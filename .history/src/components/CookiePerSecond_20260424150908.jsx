import { useState } from "react";
import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    cosnt {state} = useGame();
	const [second, setSecond] = useState(0);
	return <div className="text-white">{second}/s</div>;
}

export default CookiePerSecond;
