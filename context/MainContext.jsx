"use client"
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const MainContext = ({ children }) => {
    const [theme, settheme] = useState("light");

    useEffect(() => {
        if (document && typeof (document) != "undefined") {

            theme == "dark"
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark")
        }
    }, [theme]);


    return (
        <MainContextE.Provider
            value={{
                theme,
                settheme,
            }}
        >
            {children}
        </MainContextE.Provider>
    )
}
export const useMainContext = () => {
    const {
        theme,
        settheme,
    }
        = useContext(MainContextE)
    return {
        theme,
        settheme,

    }
}

export default MainContext
