
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const MonitoringAnalytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Monitoring & Analytics</h1>
            <p className="text-white/70 text-lg mb-8">
              Track performance and gather insights from your AI applications.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Key Metrics to Monitor</h2>
                <p className="text-white/70 mb-4">
                  Essential metrics for effective AI monitoring:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Performance Metrics</h3>
                    <p className="text-white/70">
                      Latency, throughput, and response time distributions.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Cost Metrics</h3>
                    <p className="text-white/70">
                      Token usage, API call volume, and cost per request.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Quality Metrics</h3>
                    <p className="text-white/70">
                      Response quality, error rates, and user satisfaction.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Operational Metrics</h3>
                    <p className="text-white/70">
                      Cache hit rates, provider availability, and error distributions.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Monitoring Setup</h2>
                <p className="text-white/70 mb-4">
                  ORCHESITY provides comprehensive monitoring capabilities:
                </p>
                <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                  <pre className="text-white/80">
{`const orchesity = new Orchesity({
  monitoring: {
    metrics: {
      enabled: true,
      detailed: true,
      exporters: ["prometheus", "datadog"]
    },
    logging: {
      level: "info", // "debug", "info", "warn", "error"
      format: "json",
      destination: "stdout" // or "file"
    },
    alerting: {
      enabled: true,
      thresholds: {
        errorRate: 0.05, // 5%
        p95Latency: 2000, // ms
        costSpike: 200 // %
      }
    }
  }
})`}
                  </pre>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Analytics and Insights</h2>
                <p className="text-white/70 mb-4">
                  Gain valuable insights from AI usage patterns:
                </p>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Identify most common user requests and topics</li>
                  <li>Track success rates across different prompt templates</li>
                  <li>Analyze cost efficiency of different model configurations</li>
                  <li>Measure impact of caching and optimization strategies</li>
                  <li>Correlate AI performance with business outcomes</li>
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

export default MonitoringAnalytics;
