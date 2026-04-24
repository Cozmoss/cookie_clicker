import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    const { state } = useGame();
	return <div className="text-white text-2xl">{state.cookiePerSecond}/s</div>;
}

export default CookiePerSecond;
