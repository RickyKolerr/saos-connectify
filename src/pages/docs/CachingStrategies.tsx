
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const CachingStrategies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Caching Strategies</h1>
            <p className="text-foreground/70 dark:text-white/70 text-lg mb-8">
              Implement efficient caching for better performance and cost optimization.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Why Cache AI Responses?</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  Caching AI responses offers several benefits:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 dark:text-white/70">
                  <li>Reduced latency and improved user experience</li>
                  <li>Lower operational costs by minimizing API calls</li>
                  <li>Decreased dependency on external provider availability</li>
                  <li>Consistent responses for identical inputs</li>
                </ul>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Built-in Caching</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  ORCHESITY provides flexible caching options out of the box:
                </p>
                <div className="bg-secondary/40 dark:bg-black/40 rounded-lg p-4 border border-border dark:border-white/10">
                  <pre className="text-foreground/80 dark:text-white/80">
{`const orchesity = new Orchesity({
  cache: {
    enabled: true,
    ttl: 3600, // Time to live in seconds
    strategy: "semantic", // "exact" or "semantic"
    similarity: 0.95, // For semantic caching
    storage: "memory" // "memory", "redis", or "custom"
  }
})`}
                  </pre>
                </div>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Advanced Caching Techniques</h2>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Semantic Caching</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Use vector embeddings to cache semantically similar queries, not just exact matches.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Distributed Caching</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Set up Redis or other distributed caching solutions for multi-server deployments.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Selective Caching</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Cache only specific types of requests while always fetching fresh results for others.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CachingStrategies;
