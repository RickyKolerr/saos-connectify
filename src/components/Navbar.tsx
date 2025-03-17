
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-md border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col items-start">
          <a href="/" className="text-2xl font-bold text-gradient relative group">
            ORCHESITY
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <span className="text-xs text-muted-foreground">powered by Kolerr Technologies</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/features" className="text-sm font-medium text-foreground/80 hover:text-gradient transition-colors duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/how-it-works" className="text-sm font-medium text-foreground/80 hover:text-gradient transition-colors duration-300 relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/benefits" className="text-sm font-medium text-foreground/80 hover:text-gradient transition-colors duration-300 relative group">
            Benefits
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/pricing" className="text-sm font-medium text-foreground/80 hover:text-gradient transition-colors duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <Button variant="default" size="sm" className="bg-white text-black hover:bg-white/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] ml-2 transition-all duration-300">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="text-foreground hover:text-white/80 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-md shadow-md z-50 py-4 border-b border-border/50">
          <div className="container flex flex-col space-y-4">
            <a 
              href="/features" 
              className="text-sm font-medium text-foreground/80 hover:text-gradient p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/how-it-works" 
              className="text-sm font-medium text-foreground/80 hover:text-gradient p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="/benefits" 
              className="text-sm font-medium text-foreground/80 hover:text-gradient p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="/pricing" 
              className="text-sm font-medium text-foreground/80 hover:text-gradient p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-white text-black hover:bg-white/90 w-full transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
