"use client"
import { AuthMe, RefreshToken } from "@/api/auth";
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const MainContext = ({ children }) => {
    const [theme, settheme] = useState(null)
    const [user, setUser] = useState(null)
    // ############# --------- ############

    const Refresh_token = async () => {
        const res = await RefreshToken();
        if (res.failed) {
            return
        };
        setUser(res.user);

    }

    const AuthUser = async () => {
        const res = await AuthMe();
        if (res.failed) {
            Refresh_token()
            return
        };
        setUser(res.user);

    }



    useEffect(() => {
        AuthUser()
        if (typeof (localStorage) != "undefined" && typeof (window) != "undefined" && typeof (document) != "undefined") {
            const LocalTheme = localStorage.getItem("theme") ?? "auto";
            settheme(LocalTheme)
        }
    }, []);


    useEffect(() => {
        if (theme == null) return;

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
            settheme,
            user,
            setUser
        }}     >
            {children}
        </MainContextE.Provider>
    )
}
export const useMainContext = () => {
    const {
        theme,
        settheme,
        user,
        setUser
    }
        = useContext(MainContextE)
    return {
        theme,
        settheme,
        user,
        setUser
    }
}

export default MainContext
