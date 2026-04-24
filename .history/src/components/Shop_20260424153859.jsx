import { useGame } from "../context/GameContext";

function Shop() {
    const { state, dispatch } = useGame();
	return (
		<div className="bg-white p-4 rounded-md">
            {state.upgrades.map((upgrade) => (
                <button key={upgrade.id} onClick={() => dispatch({type: "BUY_UPGRADE", payload: { cost: upgrade.cost, cps: upgrade.cps }})} disabled={state.count < upgrade.cost} className="bg-gray-300 rounded-md cursor-pointer align-middle p mr-1">{upgrade.name} : {upgrade.cost}</button>
            ))}
		</div>
	);
}

export default Shop;
