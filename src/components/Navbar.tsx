
import { useState } from "react";
import { Menu, X, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedNavLine from "./AnimatedNavLine";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md py-4 sticky top-0 z-50 shadow-md border-b border-white/10 relative">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col items-start">
          <Link to="/" className="text-2xl font-bold text-white relative group flex items-center gap-2">
            <Layers className="h-6 w-6 text-white/90 group-hover:text-white transition-colors duration-300" />
            <span>ORCHESITY</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <span className="text-xs text-white/50">Powered by Kolerr Technologies</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/features" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/benefits" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            Benefits
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/documentation" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            Docs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span>
          </Link>
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
            className="text-white hover:text-white/80 transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Animated line that responds to scrolling */}
      <AnimatedNavLine />

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-black/95 backdrop-blur-md shadow-md z-50 py-4 border-b border-white/10">
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/benefits" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/documentation" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-white/80 hover:text-white p-2 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
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
