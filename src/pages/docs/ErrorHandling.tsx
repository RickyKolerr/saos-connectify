
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const ErrorHandling = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Error Handling</h1>
            <p className="text-white/70 text-lg mb-8">
              Best practices for handling errors and edge cases when working with AI providers.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Common Error Types</h2>
                <p className="text-white/70 mb-4">
                  Understanding different error categories in AI applications:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Provider API Errors</h3>
                    <p className="text-white/70">
                      Authentication issues, rate limits, and server-side errors from AI providers.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Input Validation Errors</h3>
                    <p className="text-white/70">
                      Invalid prompts, token limits exceeded, or content policy violations.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Response Processing Errors</h3>
                    <p className="text-white/70">
                      Unexpected response formats, parsing failures, or timeouts.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Robust Error Handling</h2>
                <p className="text-white/70 mb-4">
                  Implementing resilient error handling with ORCHESITY:
                </p>
                <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                  <pre className="text-white/80">
{`// Using try-catch blocks
try {
  const response = await orchesity.complete({
    prompt: userInput,
    maxTokens: 500
  });
  // Process successful response
} catch (error) {
  if (error.code === 'rate_limit_exceeded') {
    // Handle rate limiting
    await delay(1000);
    return retryRequest();
  } else if (error.code === 'context_length_exceeded') {
    // Handle token limit issues
    return handleTokenLimitError();
  } else {
    // Generic error handling
    console.error('AI request failed:', error);
    return fallbackResponse();
  }
}`}
                  </pre>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Advanced Error Strategies</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Implement automatic retries with exponential backoff</li>
                  <li>Set up provider fallbacks to switch between different AI services</li>
                  <li>Create cached fallback responses for critical functionality</li>
                  <li>Monitor error rates and patterns to identify systematic issues</li>
                  <li>Design graceful degradation paths for components relying on AI</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ErrorHandling;
