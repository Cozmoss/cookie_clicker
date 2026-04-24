import { use } from "react";
import { useGame } from "../context/GameContext";

function CookieCount() {
    const { state } = useGame();

	return <div className="text-white">{count}</div>;
}

export default CookieCount;
