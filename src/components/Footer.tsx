
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, this would send the email to a server
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our newsletter at " + email
    });
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <h3 className="text-xl font-bold text-white relative inline-block group">
                <Link to="/">ORCHESITY</Link>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></div>
              </h3>
              <span className="text-xs text-white/50">Powered by Kolerr Technologies</span>
            </div>
            <p className="text-white/60 text-sm">Your bridge to smarter AI solutions.</p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@orchesity.com" className="text-white/60 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/features" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Features<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Pricing<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/documentation" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Documentation<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/api-reference" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">API Reference<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">About Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/careers" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Careers<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/blog" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Blog<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Contact Us<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/developer-program" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Developer Program<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/status" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Status<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/privacy-policy" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Privacy Policy<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
              <li><Link to="/terms-of-service" className="text-white/60 hover:text-white transition-colors duration-300 relative inline-block group">Terms of Service<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white/60 transition-all duration-300 group-hover:w-full"></span></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} ORCHESITY. All rights reserved.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <form onSubmit={handleSubscribe} className="relative group flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-64 px-4 py-2 rounded-l-md focus:outline-none bg-black border border-white/20 text-white text-sm focus:border-white/50 transition-all duration-300"
              />
              <Button type="submit" className="rounded-l-none bg-white text-black hover:bg-white/90 transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
