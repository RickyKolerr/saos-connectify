import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 dark:border-white/10 backdrop-blur-md bg-white/70 dark:bg-black/70">
      <div className="container flex items-center justify-between py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center font-semibold text-lg md:text-2xl text-gradient">
          ORCHESITY
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-white/80 hover:text-white transition-colors">Features</Link>
          <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">How It Works</Link>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
          <Link to="/documentation" className="text-white/80 hover:text-white transition-colors">Docs</Link>
          <Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/auth/signin">
            <Button variant="outline" size="sm" className="hidden md:inline-flex text-white border-white/40 hover:bg-white/5 hover:border-white/60">
              Sign In
            </Button>
          </Link>
          <Link to="/auth/signup">
            <Button size="sm" className="hidden md:inline-flex bg-white text-black hover:bg-white/90">
              Sign Up
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md py-4 px-6">
          <nav className="flex flex-col space-y-3">
            <Link to="/features" className="text-white/80 hover:text-white transition-colors block">Features</Link>
            <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors block">How It Works</Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors block">Pricing</Link>
            <Link to="/documentation" className="text-white/80 hover:text-white transition-colors block">Docs</Link>
            <Link to="/blog" className="text-white/80 hover:text-white transition-colors block">Blog</Link>
            <Link to="/auth/signin" className="text-white/80 hover:text-white transition-colors block">Sign In</Link>
            <Link to="/auth/signup" className="text-white/80 hover:text-white transition-colors block">Sign Up</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
