import {createContext, useEffect, useMemo, useState} from "react";

export const ThemeContext = createContext({isDark: false});

export const ThemeProvider = ({children}) => {
    function getTimeTheme(date) {
        if (date < 21 && date >=6) return false;
        else return true;
    }

    useEffect(() => {
        setIsDark(getTimeTheme(new Date().getHours()));
    }, []);

    const [isDark, setIsDark] = useState(false);
    const value = useMemo( () => ({isDark, setIsDark}), [isDark]);
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}