import { useContext } from "react";
import { ThemeContext } from "../../hooks/context/theme/ThemeContext";

const ThemeSwitcher = () => {
 
const themeContext = useContext(ThemeContext);

if(!themeContext) return null;

const { theme, toggleTheme} = themeContext; 

 const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    toggleTheme(e.target.value);
  };

  return (
     <select value={theme} onChange={handleThemeChange}>
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}

export default ThemeSwitcher;
