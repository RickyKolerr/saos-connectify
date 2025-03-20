
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Send, AlertTriangle, Check } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ApiTester = () => {
  const [apiKey, setApiKey] = useState("");
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
  const [responseStatus, setResponseStatus] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { toast } = useToast();

  const handleSendRequest = () => {
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      // Simulate random success/error responses
      const isSuccess = Math.random() > 0.3; // 70% chance of success
      
      if (isSuccess) {
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
        setResponseStatus("success");
        setErrorMessage("");
      } else {
        // Simulate different error types
        const errorTypes = [
          { status: 429, message: "Too Many Requests: Rate limit exceeded. Please try again later." },
          { status: 401, message: "Unauthorized: Invalid API key provided." },
          { status: 500, message: "Internal Server Error: Something went wrong on our end." },
          { status: 400, message: "Bad Request: The request payload is invalid." }
        ];
        
        const error = errorTypes[Math.floor(Math.random() * errorTypes.length)];
        const errorResponse = {
          error: {
            status: error.status,
            message: error.message
          }
        };
        
        setResponse(JSON.stringify(errorResponse, null, 2));
        setResponseStatus("error");
        setErrorMessage(`[EN] ${error.status} ${error.message}`);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const copyResponse = () => {
    if (!response) return;
    
    navigator.clipboard.writeText(response);
    toast({
      title: "[EN] Copied to clipboard",
      description: "[EN] Response JSON has been copied to clipboard",
    });
  };

  return (
    <div className="border border-white/10 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-medium mb-4">[EN] Try it yourself</h3>
      
      <div className="mb-4 space-y-4">
        <div>
          <Label className="block text-sm text-white/80 mb-2" htmlFor="api-key">[EN] API Key</Label>
          <Input 
            id="api-key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="[EN] Enter your API key for authenticated testing"
            className="font-mono text-sm"
            type="password"
          />
        </div>
        
        <div>
          <Label className="block text-sm text-white/80 mb-2" htmlFor="request-payload">[EN] Request Payload</Label>
          <Textarea 
            id="request-payload"
            value={payload}
            onChange={(e) => setPayload(e.target.value)}
            className="font-mono text-sm mb-4 min-h-32"
          />
        </div>
        
        <Button 
          onClick={handleSendRequest} 
          variant="orchesity"
          className="w-full md:w-auto"
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              [EN] Processing...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              [EN] Send Request
            </span>
          )}
        </Button>
      </div>
      
      {responseStatus && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
              <label className="block text-sm text-white/80">[EN] Response</label>
              {responseStatus === "success" ? (
                <span className="flex items-center gap-1 text-green-400 text-xs">
                  <Check className="h-3 w-3" />
                  [EN] Success
                </span>
              ) : (
                <span className="flex items-center gap-1 text-red-400 text-xs">
                  <AlertTriangle className="h-3 w-3" />
                  {errorMessage}
                </span>
              )}
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white/70 hover:text-white"
              onClick={copyResponse}
            >
              <Copy className="h-3.5 w-3.5 mr-1" />
              [EN] Copy
            </Button>
          </div>
          <pre className={`p-4 rounded-md font-mono text-sm overflow-x-auto ${
            responseStatus === "error" ? "bg-red-900/20 border border-red-800/40" : "bg-[#1F1F1F]"
          }`}>
            {response}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTester;
