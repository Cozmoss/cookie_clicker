import { useGame } from "../context/GameContext";

function CookieCount() {
    const { state } = useGame();

	return <div className="text-white text-2xl">{state.count}</div>;
}

export default CookieCount;
