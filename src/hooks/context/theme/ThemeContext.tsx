import { createContext, ReactNode, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children}:{children:ReactNode}) =>{

    const [theme, setTheme] = useState<string>(getInitialTheme);

    function getInitialTheme(){
        // const savedTheme = localStorage.getItem('theme')
        // if(savedTheme) return savedTheme;

        // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // return systemPrefersDark ? 'dark' : 'light';

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'system' || !savedTheme) {
          const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return systemPrefersDark ? 'dark' : 'light';
        }
        return savedTheme;
    }

    const toggleTheme = (newTheme: string) =>setTheme(newTheme);

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    // useEffect(() => {
    //     const root = window.document.documentElement;
    //     if (theme === 'dark') {
    //       root.classList.add('dark');
    //     } else {
    //       root.classList.remove('dark');
    //     }
    //     localStorage.setItem('theme', theme);
    //   }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
