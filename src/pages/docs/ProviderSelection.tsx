
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const ProviderSelection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Provider Selection</h1>
            <p className="text-foreground/70 dark:text-white/70 text-lg mb-8">
              Compare and choose the right AI providers for your needs.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Comparing Providers</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  ORCHESITY supports multiple AI providers, each with their own strengths and capabilities:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">OpenAI</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Industry-leading models with strong general capabilities across a wide range of tasks.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Anthropic</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Known for Claude models with strong reasoning and safety features.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-border dark:border-white/10 bg-secondary/40 dark:bg-black/40">
                    <h3 className="font-medium text-foreground dark:text-white mb-2">Cohere</h3>
                    <p className="text-foreground/70 dark:text-white/70">
                      Specialized in embeddings and enterprise-focused applications.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Selection Criteria</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  Factors to consider when selecting providers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/70 dark:text-white/70">
                  <li>Task requirements (completion, embedding, classification)</li>
                  <li>Performance benchmarks for your specific use case</li>
                  <li>Cost considerations and usage patterns</li>
                  <li>Availability and reliability in your region</li>
                  <li>Specialization in particular domains</li>
                </ul>
              </section>

              <Separator className="bg-foreground/10 dark:bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-foreground dark:text-white mb-4">Multi-Provider Strategy</h2>
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  ORCHESITY makes it easy to implement a multi-provider strategy:
                </p>
                <div className="bg-secondary/40 dark:bg-black/40 rounded-lg p-4 border border-border dark:border-white/10">
                  <pre className="text-foreground/80 dark:text-white/80">
{`const orchesity = new Orchesity({
  providers: {
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
      models: {
        default: "gpt-4o",
        embeddings: "text-embedding-3-large"
      }
    },
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY,
      models: {
        default: "claude-3-opus-20240229"
      }
    }
  },
  routing: {
    strategy: "performance" // or "cost", "availability"
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

export default ProviderSelection;
