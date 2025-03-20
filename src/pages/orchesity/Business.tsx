
import React, { useState } from "react";
import OrchesityNavbar from "@/components/orchesity/OrchesityNavbar";
import BusinessPortal from "@/components/orchesity/BusinessPortal";
import OfflineFallback from "@/components/orchesity/OfflineFallback";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Business = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [currentProject, setCurrentProject] = useState("default");
  const { toast } = useToast();

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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold">[EN] Business Portal</h1>
          
          <Select 
            value={currentProject} 
            onValueChange={setCurrentProject}
            defaultValue="default"
          >
            <SelectTrigger className="w-[200px] bg-black border-white/20 focus:outline-white focus:ring-2 focus:ring-white">
              <SelectValue placeholder="[EN] Select Project" />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/20 text-white">
              <SelectItem value="default">[EN] Default Project</SelectItem>
              <SelectItem value="project1">[EN] AI Chatbot</SelectItem>
              <SelectItem value="project2">[EN] Content Generator</SelectItem>
              <SelectItem value="project3">[EN] Data Analysis</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <BusinessPortal />
      </main>
      
      {isOffline && <OfflineFallback onRetry={handleRetryConnection} />}
      
      <Toaster />
    </div>
  );
};

export default Business;
