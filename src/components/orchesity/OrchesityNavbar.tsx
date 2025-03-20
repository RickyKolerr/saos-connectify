
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const OrchesityNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/orchesity/dashboard" },
    { name: "Developer Portal", path: "/orchesity/developer" },
    { name: "Business Portal", path: "/orchesity/business" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black border-b border-white/10 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/orchesity/dashboard" className="text-xl font-bold text-white mr-8">
            Orchesity
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 relative group",
                  isActive(item.path) 
                    ? "text-white" 
                    : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-white/60 transition-all duration-300",
                    isActive(item.path) 
                      ? "w-full" 
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <div className="flex items-center">
          <Button 
            variant="orchesity" 
            size="sm" 
            className="hidden md:flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10 z-40">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "py-2 px-2 text-sm font-medium transition-colors duration-300",
                  isActive(item.path) 
                    ? "text-white bg-white/10" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10">
              <Button 
                variant="orchesity" 
                size="sm" 
                className="w-full flex items-center justify-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default OrchesityNavbar;
