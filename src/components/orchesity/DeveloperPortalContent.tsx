
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, ChevronRight, Download } from "lucide-react";
import ApiTester from "./ApiTester";
import { useToast } from "@/hooks/use-toast";

interface DeveloperPortalContentProps {
  copyCode: (code: string) => void;
}

const DeveloperPortalContent = ({ copyCode }: DeveloperPortalContentProps) => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Generate a simple bash script
    const scriptContent = `#!/bin/bash
# Orchesity Setup Script
# Version 1.0.0

echo "Starting Orchesity installation..."
docker pull orchesity:latest
docker run -p 3000:3000 -d --name orchesity-instance orchesity:latest
echo "Orchesity is now running at http://localhost:3000"`;

    const blob = new Blob([scriptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orchesity-setup.sh';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: "Setup script has been downloaded successfully",
    });
  };

  return (
    <main className="flex-1">
      <h1 className="text-3xl font-bold mb-6">Developer Documentation</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Quickstart</h2>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-3">Installation</h3>
            <div className="relative mb-6">
              <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
                docker run -p 3000:3000 orchesity:latest
              </pre>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-3 right-3 text-white hover:text-white/80"
                onClick={() => copyCode("docker run -p 3000:3000 orchesity:latest")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            
            <Button 
              variant="orchesity" 
              className="gap-2 mb-6"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
              Download Setup Script
            </Button>

            <h3 className="text-lg font-medium mb-3">Usage</h3>
            <div className="relative">
              <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
{`// Initialize the client
const orchesity = new Orchesity({ 
  apiKey: 'YOUR_API_KEY',
  project: 'YOUR_PROJECT_NAME'
});

// Make a request
const response = await orchesity.generate({
  prompt: "What is the capital of France?",
  providers: ["openai", "anthropic"]
});`}
              </pre>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-3 right-3 text-white hover:text-white/80"
                onClick={() => copyCode(`// Initialize the client
const orchesity = new Orchesity({ 
  apiKey: 'YOUR_API_KEY',
  project: 'YOUR_PROJECT_NAME'
});

// Make a request
const response = await orchesity.generate({
  prompt: "What is the capital of France?",
  providers: ["openai", "anthropic"]
});`)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <ApiTester />

      {/* REST API section */}
      <section id="rest-api" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">REST API</h2>
        
        <div id="post-api" className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <span className="px-2 py-1 bg-white/10 rounded text-xs font-medium">POST</span>
            <code className="font-mono">/api/v1/ai</code>
          </div>
          
          <p className="text-white/80 mb-4">
            Generate AI responses from multiple providers with a single request.
          </p>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="font-medium mb-2">Request Body</h4>
              <div className="relative mb-6">
                <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
{`{
  "prompt": "Explain quantum computing",
  "providers": ["openai", "anthropic", "grok"],
  "options": {
    "priority": "speed",
    "maxTokens": 500
  }
}`}
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 text-white hover:text-white/80"
                  onClick={() => copyCode(`{
  "prompt": "Explain quantum computing",
  "providers": ["openai", "anthropic", "grok"],
  "options": {
    "priority": "speed",
    "maxTokens": 500
  }
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              
              <h4 className="font-medium mb-2">Response</h4>
              <div className="relative">
                <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
{`{
  "id": "gen_123abc",
  "response": "Quantum computing uses quantum bits...",
  "provider": "anthropic",
  "metrics": {
    "latency": 1250,
    "tokens": 320,
    "cost": 0.015
  }
}`}
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 text-white hover:text-white/80"
                  onClick={() => copyCode(`{
  "id": "gen_123abc",
  "response": "Quantum computing uses quantum bits...",
  "provider": "anthropic",
  "metrics": {
    "latency": 1250,
    "tokens": 320,
    "cost": 0.015
  }
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* GraphQL API section */}
      <section id="graphql-api" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">GraphQL API</h2>
        
        <div id="query-ai-response" className="mb-6">
          <h3 className="text-xl font-medium mb-3">Query: aiResponse</h3>
          
          <p className="text-white/80 mb-4">
            Query AI responses with GraphQL for more flexibility.
          </p>
          
          <Card>
            <CardContent className="p-6">
              <div className="relative mb-6">
                <pre className="bg-[#1F1F1F] p-4 rounded-md font-mono text-sm overflow-x-auto">
{`query {
  aiResponse(
    input: {
      prompt: "Explain quantum computing",
      providers: ["openai", "anthropic"],
      options: { priority: "accuracy" }
    }
  ) {
    id
    response
    provider
    metrics {
      latency
      tokens
      cost
    }
  }
}`}
                </pre>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute top-3 right-3 text-white hover:text-white/80"
                  onClick={() => copyCode(`query {
  aiResponse(
    input: {
      prompt: "Explain quantum computing",
      providers: ["openai", "anthropic"],
      options: { priority: "accuracy" }
    }
  ) {
    id
    response
    provider
    metrics {
      latency
      tokens
      cost
    }
  }
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-12 text-center">
        <Button variant="orchesity" className="gap-2">
          View Full Documentation
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </main>
  );
};

export default DeveloperPortalContent;
