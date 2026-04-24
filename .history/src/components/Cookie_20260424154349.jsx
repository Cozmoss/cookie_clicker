import cookie from "../assets/cookie.png";
import { useGame } from "../context/GameContext";
import { useState } from "react";

function Cookie() {
    const { dispatch } = useGame();
    const [isCliked, setIsCliked] = useState(false);

    function handleClick() {
        dispatch({type: "CLICK_COOKIE"});
        setIsCliked(true);
        setTimeout(() => )
    }
	return (
		<div>
			<button className="cursor-pointer" onClick={() => dispatch({type: "CLICK_COOKIE"})}>
				<img src={cookie} alt="Cookie" className="w-96" />
			</button>
		</div>
	);
}

export default Cookie;
