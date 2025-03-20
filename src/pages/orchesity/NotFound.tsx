
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";

const OrchesityNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <OrchesityNavbar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-bold mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-6">[EN] Page not found</h2>
        <p className="text-white/70 mb-8 text-center max-w-md">
          [EN] The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          variant="orchesity" 
          onClick={() => navigate("/orchesity/dashboard")}
          className="px-6 py-2"
        >
          [EN] Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default OrchesityNotFound;
