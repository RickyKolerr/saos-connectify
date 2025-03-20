
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const CostOptimization = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Cost Optimization</h1>
            <p className="text-foreground/70 dark:text-white/70 text-lg mb-8">
              Strategies to optimize costs and improve efficiency when using AI services.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Understanding AI Costs</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  AI service costs are typically based on several factors:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 dark:text-white/70">
                  <li>Input and output tokens (usually priced differently)</li>
                  <li>Model selection (more powerful models cost more)</li>
                  <li>Request volume and frequency</li>
                  <li>Additional features like fine-tuning or function calling</li>
                </ul>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Optimization Techniques</h2>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Prompt Engineering</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Craft efficient prompts that achieve the desired outcome with fewer tokens.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Caching</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Implement robust caching to avoid duplicate requests for common queries.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Model Selection</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Use the most cost-effective model that meets your quality requirements.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Batching</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Combine multiple operations into single API calls when possible.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Monitoring and Budgeting</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  ORCHESITY provides tools to track and control your AI spending:
                </p>
                <div className="bg-secondary/40 dark:bg-black/40 rounded-lg p-4 border border-border dark:border-white/10">
                  <pre className="text-foreground/80 dark:text-white/80">
{`const orchesity = new Orchesity({
  budget: {
    daily: 50, // Daily spending limit in USD
    alerts: [0.5, 0.8, 0.95], // Alert at 50%, 80%, and 95% of budget
    action: "warn" // "warn", "throttle", or "block"
  },
  metrics: {
    enabled: true,
    detailed: true // Track costs per request
  }
})`}
                  </pre>
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

export default CostOptimization;
