
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { LogIn, Copy, ChevronRight } from "lucide-react";

const DeveloperPortal = () => {
  const isMobile = useIsMobile();

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // In a real app, add a toast notification
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Orchesity</div>
          <Button variant="orchesity" size="sm" className="gap-2">
            <LogIn className="h-4 w-4" />
            Login
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex-1 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className={`md:w-64 ${isMobile ? "mb-8" : "md:sticky md:top-20 md:self-start"}`}>
            <div className="border border-white/10 rounded-lg p-4">
              <h2 className="text-lg font-medium mb-4">API Reference</h2>
              <nav className="space-y-2">
                <a 
                  href="#rest-api" 
                  className="block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white"
                >
                  REST API
                </a>
                <div className="pl-4 space-y-1 text-sm">
                  <a 
                    href="#post-api" 
                    className="block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white"
                  >
                    POST /api/v1/ai
                  </a>
                </div>
                <a 
                  href="#graphql-api" 
                  className="block p-2 rounded hover:bg-white/5 text-white/90 hover:text-white"
                >
                  GraphQL API
                </a>
                <div className="pl-4 space-y-1 text-sm">
                  <a 
                    href="#query-ai-response" 
                    className="block p-1.5 rounded hover:bg-white/5 text-white/80 hover:text-white"
                  >
                    query aiResponse
                  </a>
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
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

            <Separator className="my-8 bg-white/10" />

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

            <Separator className="my-8 bg-white/10" />

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
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 p-6 mt-12">
        <div className="container mx-auto">
          <div className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Orchesity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeveloperPortal;
