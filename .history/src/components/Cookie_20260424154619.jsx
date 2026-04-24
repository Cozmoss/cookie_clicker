import cookie from "../assets/cookie.png";
import { useGame } from "../context/GameContext";
import { useState } from "react";

function Cookie() {
    const { dispatch } = useGame();
    const [isCliked, setIsCliked] = useState(false);

    function handleClick() {
        dispatch({type: "CLICK_COOKIE"});
        setIsCliked(true);
        setTimeout(() => setIsCliked(false), 75);
    }
	return (
		<div>
			<button className="cursor-pointer" onClick={handleClick}>
				<img src={cookie} alt="Cookie" className={`w-96 transition-transform duration-50 ${isCliked ? "scale-90" : "scale-100"}`} />
			</button>
		</div>
	);
}

export default Cookie;
