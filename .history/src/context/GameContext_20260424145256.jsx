import { createContext } from "react";

const gameContext = createContext()

const initialState = {
    cookie: 0,
    cookiePerSecond: 0,
    upgrades: ["Grandmother", "Bakery", "Factory"],
}

function GameReducer(state, action) {
    switch (action.type) {
        case "CLICK_COOKIE": 
            return {...state, count: state.count + 1};
        case "BUY_UPGRADE":
            return {...state, count: state.count - action.payload.cost, cookiePerSecond: state.cookiePerSecond + action.payload.cps};
        case "TICK":
            return {...state, count: state.count + state.cookiePerSecond};
    }
}

export function GameProvider()