import { createContext } from "react";

const gameContext = createContext()

const initialState = {
    cookie: 0,
    cookiePerSecond: 0,
    upgrades: ["Grandmother", "Bakery", "Factory"],
}

function GameReducer(state, action) {
    switch (action.type) {
        case "CLICK_COOKIE"
    }
}