
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} absolute`} />
      <Moon className={`h-5 w-5 transition-all ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} absolute`} />
    </Button>
  );
};

export default ThemeToggle;
