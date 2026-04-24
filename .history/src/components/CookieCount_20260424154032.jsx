import { useGame } from "../context/GameContext";

function CookieCount() {
    const { state } = useGame();

	return <div className="text-white text-xl">{state.count}</div>;
}

export default CookieCount;
