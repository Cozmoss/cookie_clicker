import { useState } from "react";

function CookieCount() {
	const [count, setCount] = useState(0);

	return <div className="text-white">{count}</div>;
}

export default CookieCount;
