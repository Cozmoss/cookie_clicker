import "./App.css";
import Header from "./components/Header";
import CookieCount from "./components/CookieCount";
import CookiePerSecond from "./components/CookiePerSecond";
import Cookie from "./components/Cookie";
import Shop from "./components/Shop";

function App() {
	return (
		<>
			<Header />
			<main className="grid justify-items-center gap-5">
				<CookieCount />
				<CookiePerSecond />
				<Cookie />
				<Shop />
			</main>
		</>
	);
}

export default App;
