
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-saos-navy">
            SAOS
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue transition-colors">
            Benefits
          </a>
          <a href="#pricing" className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue transition-colors">
            Pricing
          </a>
          <Button variant="default" size="sm" className="bg-saos-blue hover:bg-saos-navy text-white ml-2">
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
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-md z-50 py-4">
          <div className="container flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium text-saos-gray-dark hover:text-saos-blue p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-saos-blue hover:bg-saos-navy text-white w-full"
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
