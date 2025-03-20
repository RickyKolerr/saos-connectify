
import React, { useState, useEffect } from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import DeveloperPortal from "@/components/orchesity/DeveloperPortal";
import OfflineFallback from "@/components/orchesity/OfflineFallback";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { AlertTriangle } from "lucide-react";

const Developer = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [rateLimitWarning, setRateLimitWarning] = useState(false);
  const { toast } = useToast();

  // Simulate API rate limiting
  useEffect(() => {
    // For demo purposes, randomly show rate limit warning
    const showWarning = Math.random() < 0.5;
    
    if (showWarning) {
      setTimeout(() => {
        setRateLimitWarning(true);
        
        toast({
          title: "[EN] Rate Limit Warning",
          description: "[EN] Approaching API limit: 95/100 requests this hour.",
          className: "border border-yellow-600/30 bg-black text-white",
        });
      }, 5000); // 5 seconds for demo
    }
  }, [toast]);

  const handleRetryConnection = () => {
    toast({
      title: "[EN] Reconnecting",
      description: "[EN] Trying to reconnect to the Orchesity backend...",
    });
    
    // Simulate reconnection attempt
    setTimeout(() => {
      const reconnected = Math.random() < 0.8; // 80% chance of success
      
      setIsOffline(!reconnected);
      
      if (reconnected) {
        toast({
          title: "[EN] Connected",
          description: "[EN] Successfully reconnected to the Orchesity backend.",
          className: "border border-white/20 bg-black text-white",
        });
      } else {
        toast({
          title: "[EN] Connection Failed",
          description: "[EN] Could not reconnect to the backend. Please try again later.",
          variant: "destructive",
        });
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <OrchesityNavbar />
      <main className="container mx-auto py-8 px-4">
        <DeveloperPortal />
      </main>
      
      {isOffline && <OfflineFallback onRetry={handleRetryConnection} />}
      
      <Toaster />
    </div>
  );
};

export default Developer;
