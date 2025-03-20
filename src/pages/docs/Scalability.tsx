
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const Scalability = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Scalability</h1>
            <p className="text-foreground/70 dark:text-white/70 text-lg mb-8">
              Scale your application for growing demands and high-volume scenarios.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Scaling Challenges</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  Common challenges when scaling AI applications:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 dark:text-white/70">
                  <li>Provider rate limits and quotas</li>
                  <li>Increased latency under high load</li>
                  <li>Rising costs with growing usage</li>
                  <li>Managing state across distributed systems</li>
                  <li>Maintaining reliability during traffic spikes</li>
                </ul>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Architecting for Scale</h2>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Distributed Request Processing</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Set up worker pools to distribute AI requests across multiple instances.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Queuing Systems</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Implement message queues to handle traffic spikes and ensure consistent processing.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Load Balancing</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Balance requests across multiple AI providers to maximize throughput.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">ORCHESITY Scaling Features</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  ORCHESITY provides built-in features to help scale your AI infrastructure:
                </p>
                <div className="bg-secondary/40 dark:bg-black/40 rounded-lg p-4 border border-border dark:border-white/10">
                  <pre className="text-foreground/80 dark:text-white/80">
{`const orchesity = new Orchesity({
  scaling: {
    maxConcurrent: 50, // Max concurrent requests
    queue: {
      enabled: true,
      maxSize: 1000,
      timeout: 60000 // ms
    },
    rateLimit: {
      enabled: true,
      requestsPerMinute: 300,
      fair: true // Fair distribution across users
    }
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

export default Scalability;
