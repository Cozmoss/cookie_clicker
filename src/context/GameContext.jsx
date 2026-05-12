import { createContext, useContext, useEffect, useReducer } from "react";

const GameContext = createContext();

const STORAGE_KEY = "cookie-clicker-state";

const initialState = {
	count: 0,
	cookiePerSecond: 0,
	upgrades: [
		{ id: 1, name: "Grandmother", cost: 100, cps: 1 },
		{ id: 2, name: "Bakery", cost: 500, cps: 10 },
		{ id: 3, name: "Factory", cost: 5000, cps: 100 },
	],
	ownedUpgrades: {},
};

function loadState() {
	if (typeof window === "undefined") {
		return initialState;
	}

	const stored = localStorage.getItem(STORAGE_KEY);
	if (!stored) {
		return initialState;
	}

	try {
		const parsed = JSON.parse(stored);
		return {
			...initialState,
			count: parsed.count ?? initialState.count,
			cookiePerSecond: parsed.cookiePerSecond ?? initialState.cookiePerSecond,
			ownedUpgrades: parsed.ownedUpgrades ?? initialState.ownedUpgrades,
		};
	} catch {
		return initialState;
	}
}

function GameReducer(state, action) {
	switch (action.type) {
		case "CLICK_COOKIE":
			return { ...state, count: state.count + 1 };
		case "BUY_UPGRADE": {
			const currentCount = state.ownedUpgrades[action.payload.id] ?? 0;
			return {
				...state,
				count: state.count - action.payload.cost,
				cookiePerSecond: state.cookiePerSecond + action.payload.cps,
				ownedUpgrades: {
					...state.ownedUpgrades,
					[action.payload.id]: currentCount + 1,
				},
			};
		}
		case "TICK":
			return { ...state, count: state.count + state.cookiePerSecond };
		default:
			return state;
	}
}

export function GameProvider({ children }) {
	const [state, dispatch] = useReducer(GameReducer, initialState, loadState);

	useEffect(() => {
		const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		localStorage.setItem(
			STORAGE_KEY,
			JSON.stringify({
				count: state.count,
				cookiePerSecond: state.cookiePerSecond,
				ownedUpgrades: state.ownedUpgrades,
			}),
		);
	}, [state.count, state.cookiePerSecond, state.ownedUpgrades]);

	return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

export const useGame = () => useContext(GameContext);
