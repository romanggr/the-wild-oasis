import {createContext, useContext, useEffect, useState} from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const BurgerContext = createContext();

function BurgerProvider({ children }) {
    const [isBurger, setIsBurger] = useState(false);

    function toggleBurger() {
        setIsBurger(prev => !prev)
    }

    return (
        <BurgerContext.Provider value={{ isBurger, toggleBurger }}>{children}</BurgerContext.Provider>
    )
}

function useBurger() {
    const context = useContext(BurgerContext);
    if (context === "undefined") throw new Error("BurgerContext was used outside of BurgerProvider")
    return context
}

export { BurgerProvider, useBurger }