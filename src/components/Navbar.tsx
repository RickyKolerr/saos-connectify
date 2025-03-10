
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background/80 backdrop-blur-sm py-4 sticky top-0 z-50 shadow-md border-b border-border/30">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-gradient">
            SAOS
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Pricing
          </a>
          <Button variant="default" size="sm" className="bg-blue-500 hover:bg-blue-600 text-white ml-2">
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
              href="#features" 
              className="text-sm font-medium text-foreground/80 hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-foreground/80 hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium text-foreground/80 hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-foreground/80 hover:text-primary p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-blue-500 hover:bg-blue-600 text-white w-full"
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
