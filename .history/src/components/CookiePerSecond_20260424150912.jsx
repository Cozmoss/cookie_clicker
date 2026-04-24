import { useState } from "react";
import { useGame } from "../context/GameContext";

function CookiePerSecond() {
    cosnt {state} = useGame();
	return <div className="text-white">{second}/s</div>;
}

export default CookiePerSecond;
