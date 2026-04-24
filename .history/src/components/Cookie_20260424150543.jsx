import cookie from "../assets/cookie.png";

function Cookie() {
    const { dispatch } = useContext(GameContext);
	return (
		<div>
			<button className="cursor-pointer">
				<img src={cookie} alt="Cookie" className="w-96" />
			</button>
		</div>
	);
}

export default Cookie;
