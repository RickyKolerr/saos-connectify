
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ApiTester = () => {
  const [request, setRequest] = useState(
    JSON.stringify({
      prompt: "Tell me about Orchesity",
      providers: ["openai"],
      options: { priority: "speed" }
    }, null, 2)
  );
  
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendRequest = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResponse(JSON.stringify({
        id: "gen_" + Math.random().toString(36).substring(2, 10),
        response: "Orchesity is a platform that helps you manage and optimize your AI provider usage, giving you a single API to access multiple AI providers.",
        provider: "grok",
        metrics: {
          latency: 450,
          tokens: 42,
          cost: 0.002
        }
      }, null, 2));
      
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Try It Out</h2>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">API Tester</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Request</label>
            <textarea
              className="w-full bg-[#1F1F1F] border border-white/20 rounded-md p-3 font-mono text-sm"
              rows={8}
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>
          
          <Button 
            variant="orchesity" 
            className="gap-2"
            onClick={handleSendRequest}
            disabled={isLoading}
          >
            <Play className="h-4 w-4" />
            {isLoading ? "Sending Request..." : "Send Request"}
          </Button>
          
          <div>
            <label className="block text-sm mb-2">Response</label>
            <pre className="w-full bg-[#1F1F1F] border border-white/20 rounded-md p-3 font-mono text-sm min-h-[200px]">
              {response || "// Response will appear here"}
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ApiTester;
