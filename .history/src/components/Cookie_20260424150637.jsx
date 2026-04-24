import cookie from "../assets/cookie.png";

function Cookie() {
    const { dispatch } = useGame();
	return (
		<div>
			<button className="cursor-pointer" onClick={() => dispatch}>
				<img src={cookie} alt="Cookie" className="w-96" />
			</button>
		</div>
	);
}

export default Cookie;
