
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";

const OrchesityServerError = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <OrchesityNavbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold mb-2">500</h1>
        <h2 className="text-2xl font-semibold mb-6">[EN] Server Error</h2>
        <p className="text-white/70 mb-8 text-center max-w-md">
          [EN] Something went wrong on our servers. Please try again later or contact support if the problem persists.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="orchesity" 
            onClick={handleRefresh}
            className="px-6 py-2 flex items-center gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            [EN] Try Again
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => navigate("/orchesity/dashboard")}
            className="px-6 py-2 border-white text-white hover:bg-white/10"
          >
            [EN] Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrchesityServerError;
