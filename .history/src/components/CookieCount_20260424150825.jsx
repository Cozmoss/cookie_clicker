import { use } from "react";
import { useGame } from "../context/GameContext";

function CookieCount() {
    const { state } = use

	return <div className="text-white">{count}</div>;
}

export default CookieCount;
