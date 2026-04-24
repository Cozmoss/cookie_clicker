import cookie from "../assets/cookie.png";
impost 

function Cookie() {
    const { dispatch } = useGame();
	return (
		<div>
			<button className="cursor-pointer" onClick={() => dispatch({type: "CLICK_COOKIE"})}>
				<img src={cookie} alt="Cookie" className="w-96" />
			</button>
		</div>
	);
}

export default Cookie;
