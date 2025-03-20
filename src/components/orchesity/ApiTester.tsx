
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ApiTester = () => {
  const [payload, setPayload] = useState(`{
  "prompt": "What is quantum computing?",
  "providers": ["openai", "anthropic"],
  "options": {
    "priority": "speed",
    "maxTokens": 500
  }
}`);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendRequest = () => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      const sampleResponse = {
        id: "gen_" + Math.random().toString(36).substring(2, 8),
        response: "Quantum computing uses quantum bits (qubits) that can exist in multiple states simultaneously thanks to superposition. Unlike classical bits that are either 0 or 1, qubits can represent both values at once, enabling quantum computers to solve complex problems much faster than traditional computers for certain tasks.",
        provider: Math.random() > 0.5 ? "openai" : "anthropic",
        metrics: {
          latency: Math.floor(Math.random() * 1500) + 500,
          tokens: Math.floor(Math.random() * 400) + 100,
          cost: (Math.random() * 0.02).toFixed(4)
        }
      };
      
      setResponse(JSON.stringify(sampleResponse, null, 2));
      setIsLoading(false);
    }, 1500);
  };

  const copyResponse = () => {
    if (!response) return;
    
    navigator.clipboard.writeText(response);
    toast({
      title: "Copied to clipboard",
      description: "Response JSON has been copied to clipboard",
    });
  };

  return (
    <div className="border border-white/10 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-medium mb-4">Try it yourself</h3>
      
      <div className="mb-4">
        <label className="block text-sm text-white/80 mb-2">Request Payload</label>
        <Textarea 
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          className="font-mono text-sm mb-4 min-h-32"
        />
        <Button 
          onClick={handleSendRequest} 
          variant="orchesity"
          className="w-full md:w-auto"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              Send Request
            </span>
          )}
        </Button>
      </div>
      
      {response && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm text-white/80">Response</label>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/70 hover:text-white"
              onClick={copyResponse}
            >
              <Copy className="h-3.5 w-3.5 mr-1" />
              Copy
            </Button>
          </div>
          <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTester;
