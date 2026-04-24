import cookie from "../assets/cookie.png";

function Cookie() {
    
	return (
		<div>
			<button className="cursor-pointer">
				<img src={cookie} alt="Cookie" className="w-96" />
			</button>
		</div>
	);
}

export default Cookie;
