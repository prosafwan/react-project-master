import { createContext } from "react";

interface ThemeContextTailwindType {
    theme: string;
    toggleTheme: (theme: string) => void;
}
export const ThemeContextTailwind = createContext<ThemeContextTailwindType | undefined>(undefined);