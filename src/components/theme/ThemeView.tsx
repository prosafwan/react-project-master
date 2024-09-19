import { ThemeProvider } from "../../hooks/context/theme/ThemeContext"
import ThemeSwitcher from "./ThemeSwitcher"

const ThemeView = () => {
  return (
    <ThemeProvider>
       <div>
        <h1 className="theme-row-css">React Theme Switcher</h1>
        <ThemeSwitcher />
        <div className="theme-box">
          Theme Box
        </div>
      </div>
    </ThemeProvider>
  )
}

export default ThemeView
