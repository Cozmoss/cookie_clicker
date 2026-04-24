import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    const {state} = useGame();
	return <div className="text-white">{second}/s</div>;
}

export default CookiePerSecond;
