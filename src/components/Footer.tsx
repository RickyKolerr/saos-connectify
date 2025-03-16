
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient relative inline-block">
              ORCHESITY
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></div>
            </h3>
            <p className="text-muted-foreground text-sm">Your bridge to smarter AI solutions.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Features<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Pricing<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Documentation<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">API Reference<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">About Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Careers<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Contact Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Developer Program<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Status<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Privacy Policy<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative inline-block group">Terms of Service<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} ORCHESITY. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-64 px-4 py-2 rounded-l-md focus:outline-none bg-background border border-border text-foreground text-sm focus:border-blue-500/50 transition-all duration-300"
              />
              <Button className="absolute right-0 top-0 bottom-0 rounded-l-none bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 text-white transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.4)]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
