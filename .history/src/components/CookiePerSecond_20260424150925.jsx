import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    const {state} = useGame();
	return <div className="text-white">{state.second}/s</div>;
}

export default CookiePerSecond;
