import { useState } from "react";
i

function CookiePerSecond() {
    cosnt {state} = useGame();
	const [second, setSecond] = useState(0);
	return <div className="text-white">{second}/s</div>;
}

export default CookiePerSecond;
