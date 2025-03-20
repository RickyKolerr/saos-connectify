
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import DocGuideCard from "@/components/DocGuideCard";
import { 
  ChevronRight, 
  Settings, 
  Server, 
  Layers, 
  AlertTriangle,
  DollarSign,
  TrendingUp,
  Shield,
  BarChart4
} from "lucide-react";

const Documentation = () => {
  const guideItems = [
    { 
      title: "Advanced Configuration", 
      icon: <Settings className="h-5 w-5" />,
      href: "/documentation/advanced-config",
      description: "Learn about custom settings, environment variables, and advanced features"
    },
    { 
      title: "Provider Selection", 
      icon: <Server className="h-5 w-5" />,
      href: "/documentation/provider-selection",
      description: "Compare and choose the right AI providers for your needs"
    },
    { 
      title: "Caching Strategies", 
      icon: <Layers className="h-5 w-5" />,
      href: "/documentation/caching",
      description: "Implement efficient caching for better performance"
    },
    { 
      title: "Error Handling", 
      icon: <AlertTriangle className="h-5 w-5" />,
      href: "/documentation/error-handling",
      description: "Best practices for handling errors and edge cases"
    },
    { 
      title: "Cost Optimization", 
      icon: <DollarSign className="h-5 w-5" />,
      href: "/documentation/cost-optimization",
      description: "Strategies to optimize costs and improve efficiency"
    },
    { 
      title: "Scalability", 
      icon: <TrendingUp className="h-5 w-5" />,
      href: "/documentation/scalability",
      description: "Scale your application for growing demands"
    },
    { 
      title: "Security Best Practices", 
      icon: <Shield className="h-5 w-5" />,
      href: "/documentation/security",
      description: "Implement robust security measures"
    },
    { 
      title: "Monitoring & Analytics", 
      icon: <BarChart4 className="h-5 w-5" />,
      href: "/documentation/monitoring",
      description: "Track performance and gather insights"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                ORCHESITY Documentation
              </h1>
              <p className="text-white/70 text-lg mb-8">
                Everything you need to know about integrating and using ORCHESITY in your projects.
              </p>
              
              <Tabs defaultValue="quickstart" className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-8 bg-black/40 p-1 rounded-lg">
                  <TabsTrigger value="quickstart" className="text-white/70 data-[state=active]:bg-white/10 data-[state=active]:text-white">
                    Quickstart
                  </TabsTrigger>
                  <TabsTrigger value="guides" className="text-white/70 data-[state=active]:bg-white/10 data-[state=active]:text-white">
                    Guides
                  </TabsTrigger>
                  <TabsTrigger value="api" className="text-white/70 data-[state=active]:bg-white/10 data-[state=active]:text-white">
                    API Reference
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="quickstart" className="space-y-6">
                  <div className="p-6 rounded-lg border border-white/10 bg-black/40 space-y-4">
                    <h2 className="text-xl font-bold text-white">Installation</h2>
                    <p className="text-white/70">Get started with ORCHESITY in your project:</p>
                    <div className="p-4 bg-black rounded-md font-mono text-white/80 text-sm">
                      npm install orchesity
                    </div>
                    
                    <h2 className="text-xl font-bold text-white pt-4">Basic Configuration</h2>
                    <p className="text-white/70">Initialize ORCHESITY with your API keys:</p>
                    <div className="p-4 bg-black rounded-md font-mono text-white/80 text-sm">
                      {`import { Orchesity } from 'orchesity';\n\nconst orchesity = new Orchesity({\n  apiKey: 'your_api_key_here',\n  providers: {\n    openai: {\n      apiKey: 'your_openai_key'\n    },\n    anthropic: {\n      apiKey: 'your_anthropic_key'\n    }\n  }\n});`}
                    </div>
                    
                    <h2 className="text-xl font-bold text-white pt-4">First Request</h2>
                    <p className="text-white/70">Make your first AI request:</p>
                    <div className="p-4 bg-black rounded-md font-mono text-white/80 text-sm">
                      {`const response = await orchesity.complete({\n  prompt: 'Explain quantum computing',\n  maxTokens: 100\n});\n\nconsole.log(response.text);`}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="link" className="text-white hover:text-white/80 transition-colors">
                      Read full quickstart guide
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="guides" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {guideItems.map((guide, index) => (
                      <DocGuideCard
                        key={index}
                        title={guide.title}
                        icon={guide.icon}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="api" className="space-y-6">
                  <div className="p-6 rounded-lg border border-white/10 bg-black/40">
                    <h2 className="text-xl font-bold text-white mb-4">API Reference</h2>
                    <p className="text-white/70 mb-6">Explore the complete ORCHESITY API:</p>
                    
                    <div className="space-y-4">
                      {[
                        "Orchestrator", 
                        "Providers", 
                        "Models", 
                        "Completion",
                        "Embeddings",
                        "Caching",
                        "Middleware",
                        "Error Handling"
                      ].map((section, index) => (
                        <div 
                          key={index} 
                          className="p-4 border border-white/10 rounded-md hover:bg-black/60 hover:border-white/20 transition-all duration-300 cursor-pointer"
                        >
                          <h3 className="text-lg font-medium text-white">{section}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
