"use client"
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const MainContext = ({ children }) => {
    const [theme, settheme] = useState(null)

    useEffect(() => {
        if (typeof (localStorage) != "undefined" && typeof (window) != "undefined" && typeof (document) != "undefined") {
            const LocalTheme = localStorage.getItem("theme") ?? "auto";
            settheme(LocalTheme)
        }
    }, []);


    useEffect(() => {
        if (typeof (localStorage) != "undefined" && typeof (window) != "undefined" && typeof (document) != "undefined") {

            theme == "dark"
                ? document.documentElement.classList.add("dark")
                : theme == "light"
                    ? document.documentElement.classList.remove("dark")
                    : window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? document.documentElement.classList.add("dark")
                        : document.documentElement.classList.remove("dark");

            localStorage.setItem("theme", theme)

        }
    }, [theme]);


    return (
        <MainContextE.Provider value={{
            theme,
            settheme
        }}     >
            {children}
        </MainContextE.Provider>
    )
}
export const useMainContext = () => {
    const {
        theme,
        settheme
    }
        = useContext(MainContextE)
    return {
        theme,
        settheme,
    }
}

export default MainContext
