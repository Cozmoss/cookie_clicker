import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    const {state} = useGame();
	return <div className="text-white">{state.cps}/s</div>;
}

export default CookiePerSecond;
