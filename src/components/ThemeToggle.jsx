import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full glass hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-primary group-hover:-rotate-180 transition-transform duration-500" />
      )}
    </button>
  );
};
