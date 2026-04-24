import { createContext, useEffect, useReducer } from "react";

const GameContext = createContext()

const initialState = {
    cookie: 0,
    cookiePerSecond: 0,
    upgrades: ["Grandmother", "Bakery", "Factory"],
}

function GameReducer(state, action) {
    switch (action.type) {
        case "CLICK_COOKIE": 
            return {...state, cookie: state.count + 1};
        case "BUY_UPGRADE":
            return {...state, count: state.count - action.payload.cost, cookiePerSecond: state.cookiePerSecond + action.payload.cps};
        case "TICK":
            return {...state, count: state.count + state.cookiePerSecond};
    }
}

export function GameProvider({children}) {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    useEffect(() => {
        const interval = setInterval(() => dispatch({type: "TICK"}), 1000);
        return () => clearInterval(interval);
    }, []);

    return (<GameContext.Provider value={{state, dispatch}}>
        {children}
    </GameContext.Provider>);
}