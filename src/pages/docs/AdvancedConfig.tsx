
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const AdvancedConfig = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Advanced Configuration</h1>
            <p className="text-white/70 text-lg mb-8">
              Learn how to customize and configure ORCHESITY for advanced use cases.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Environment Variables</h2>
                <p className="text-white/70 mb-4">
                  ORCHESITY supports various environment variables to customize its behavior:
                </p>
                <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                  <pre className="text-white/80">
                    {`ORCHESITY_API_KEY=your_api_key
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
MAX_TOKENS=2048
MODEL_TEMPERATURE=0.7`}
                  </pre>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Custom Model Settings</h2>
                <p className="text-white/70 mb-4">
                  Fine-tune model parameters for optimal performance:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Temperature control for creativity vs precision</li>
                  <li>Token limits for response length</li>
                  <li>Custom stop sequences</li>
                  <li>Response formatting options</li>
                </ul>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Advanced Features</h2>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Custom Prompts</h3>
                    <p className="text-white/70">
                      Create and save custom prompt templates for consistent results.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Webhook Integration</h3>
                    <p className="text-white/70">
                      Set up webhooks for real-time notifications and automation.
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

export default AdvancedConfig;
