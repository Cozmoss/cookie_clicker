import cookie from "../assets/cookie.png";
import { useGame } from "../context/GameContext";
import { useState } from "react";

function Cookie() {
    const { dispatch } = useGame();
    const [isCliked, setIsCliked] = useState(false);

    function handleClick() {
        dispatch({type: "CLICK_COOKIE"});
        setIsCliked(true);
        setTimeout(() => setIsCliked(false), 100);
    }
	return (
		<div>
			<button className="cursor-pointer" onClick={handleClick}>
				<img src={cookie} alt="Cookie" className={`transition-transform duration-100 ${isClicked ? "scale"}`} />
			</button>
		</div>
	);
}

export default Cookie;
