import React, { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { lightTheme, darkTheme } from "../../constants/colors";
import { IColors } from "../../types/color";
import { getAsyncData, setAsyncData } from "../../utils/storage";

type themeTypes = "light" | "dark"

type ThemeProviderProps = PropsWithChildren<{}>

const ThemeContext = createContext({
    theme: "light",
    setTheme: (x: themeTypes) => {},
    colors: {} as IColors
})

export const ThemeProvider = ({ children }: ThemeProviderProps): React.JSX.Element => {

    const [theme, set] = useState<themeTypes>("light")

    const colors = useMemo(() => theme === "light" ? lightTheme : darkTheme, [theme])

    const setTheme = () => {
        set(curr => curr === "light" ? "dark" : "light")
    }

    useEffect(() => {
        const boot = async () => {
            const storedTheme = await getAsyncData<themeTypes>({ key: "theme" })
            storedTheme ? set(storedTheme) : set("light")
        }
        boot();
    }, [])

    useEffect(() => {
        if (theme === "dark") {
            setAsyncData<themeTypes>({ key: "theme", data: "dark"})
        } else {
            setAsyncData<themeTypes>({ key: "theme", data: "light" })
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, setTheme, colors }}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, useTheme };