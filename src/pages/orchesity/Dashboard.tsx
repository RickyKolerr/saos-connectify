
import React, { useState, useEffect } from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import SetupWizard from "@/components/orchesity/SetupWizard";
import OfflineFallback from "@/components/orchesity/OfflineFallback";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [isOffline, setIsOffline] = useState(false);
  const { toast } = useToast();

  // Simulate checking backend connection
  useEffect(() => {
    const checkConnection = () => {
      // 10% chance of simulating offline status for demonstration
      const offline = Math.random() < 0.1;
      setIsOffline(offline);
    };
    
    checkConnection();
  }, []);

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
        <h1 className="text-3xl font-bold mb-8">[EN] Dashboard</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>[EN] Welcome to Orchesity!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80">
              [EN] Orchestrate AI providers with a single API. Follow the quick setup wizard to get started.
            </p>
          </CardContent>
        </Card>
        
        <SetupWizard />
      </main>
      
      <footer className="border-t border-white/10 p-6 mt-12">
        <div className="container mx-auto">
          <div className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Orchesity. [EN] All rights reserved.
          </div>
        </div>
      </footer>
      
      {isOffline && <OfflineFallback onRetry={handleRetryConnection} />}
      
      <Toaster />
    </div>
  );
};

export default Dashboard;
