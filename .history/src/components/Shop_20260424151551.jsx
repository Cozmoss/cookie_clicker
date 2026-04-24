import { useGame } from "../context/GameContext";

function Shop() {
    const { state, dispatch } = useGame();
	return (
		<div className="bg-white p-4 rounded-md">
            {state.upgrades.map((upgrade) => (
                <button key={upgrade.id} className="bg-gray-300 rounded"
            ))}
			<button className="bg-gray-300 rounded-md cursor-pointer p-1 align-middle mr-1">Grandmother : 100</button>
			<button className="bg-gray-300 rounded-md cursor-pointer p-1 align-middle mr-1">Bakery : 500</button>
			<button className="bg-gray-300 rounded-md cursor-pointer p-1 align-middle">Factory : 5000</button>
		</div>
	);
}

export default Shop;
