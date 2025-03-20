
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const OrchesityNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [apiStatus, setApiStatus] = useState<"online" | "offline">("online");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "[EN] Dashboard", path: "/orchesity/dashboard" },
    { name: "[EN] Developer Portal", path: "/orchesity/developer" },
    { name: "[EN] Business Portal", path: "/orchesity/business" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Simulate API status check - in a real app, this would be a fetch to your backend
  useEffect(() => {
    const checkApiStatus = () => {
      // Simulate random status changes for demonstration purposes
      const isOnline = Math.random() > 0.2; // 80% chance of being online
      setApiStatus(isOnline ? "online" : "offline");
    };

    // Initial check
    checkApiStatus();

    // Set up interval for periodic checks
    const intervalId = setInterval(checkApiStatus, 30000); // Check every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  const handleLogout = () => {
    setShowLogoutDialog(true);
  };

  const confirmLogout = () => {
    // In a real app, this would call your logout API
    setShowLogoutDialog(false);
    console.log("User logged out");
    // navigate to login page or similar
  };

  return (
    <>
      <nav className="bg-black border-b border-white/10 py-3 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <Link to="/orchesity/dashboard" className="text-xl font-bold text-white mr-8">
              [EN] Orchesity
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

          {/* Status Indicator and Logout Button */}
          <div className="flex items-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-2">
                    <Circle 
                      className={cn(
                        "h-3 w-3 transition-colors duration-300",
                        apiStatus === "online" ? "fill-white text-white" : "fill-gray-500 text-gray-500"
                      )} 
                    />
                    <span className="text-xs text-white/70 hidden sm:inline">
                      [EN] API {apiStatus === "online" ? "Online" : "Offline"}
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>[EN] Backend API Status: {apiStatus}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button 
              variant="orchesity" 
              size="sm" 
              className="hidden md:flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              [EN] Logout
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
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Circle 
                    className={cn(
                      "h-3 w-3",
                      apiStatus === "online" ? "fill-white text-white" : "fill-gray-500 text-gray-500"
                    )} 
                  />
                  <span className="text-xs text-white/70">
                    [EN] API {apiStatus === "online" ? "Online" : "Offline"}
                  </span>
                </div>
                <Button 
                  variant="orchesity" 
                  size="sm" 
                  className="flex items-center justify-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  [EN] Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent className="bg-black text-white border border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white">[EN] Confirm Logout</DialogTitle>
            <DialogDescription className="text-white/80">
              [EN] Are you sure you want to log out of your Orchesity account?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 justify-end">
            <Button 
              variant="outline" 
              onClick={() => setShowLogoutDialog(false)}
              className="border-white/40 text-white hover:bg-white/10"
            >
              [EN] No, Cancel
            </Button>
            <Button 
              variant="orchesity" 
              onClick={confirmLogout}
            >
              [EN] Yes, Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OrchesityNavbar;
