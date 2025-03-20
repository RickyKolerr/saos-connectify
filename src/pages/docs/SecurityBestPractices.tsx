
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const SecurityBestPractices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Security Best Practices</h1>
            <p className="text-white/70 text-lg mb-8">
              Implement robust security measures for your AI applications.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Key Security Concerns</h2>
                <p className="text-white/70 mb-4">
                  Critical security considerations for AI applications:
                </p>
                <div className="grid gap-4">
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">API Key Management</h3>
                    <p className="text-white/70">
                      Secure handling and rotation of provider API keys.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Prompt Injection</h3>
                    <p className="text-white/70">
                      Preventing malicious users from manipulating model behavior through crafted inputs.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Data Privacy</h3>
                    <p className="text-white/70">
                      Handling sensitive information and compliance with privacy regulations.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border border-white/10 bg-black/40">
                    <h3 className="font-medium text-white mb-2">Output Validation</h3>
                    <p className="text-white/70">
                      Ensuring AI outputs are safe and appropriate before presenting to users.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Security Implementation</h2>
                <p className="text-white/70 mb-4">
                  ORCHESITY security features to protect your application:
                </p>
                <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                  <pre className="text-white/80">
{`const orchesity = new Orchesity({
  security: {
    inputValidation: {
      enabled: true,
      sanitize: true,
      maxLength: 4000
    },
    outputValidation: {
      enabled: true,
      contentFilter: "strict" // "off", "standard", "strict"
    },
    pii: {
      detection: true,
      redaction: "partial" // "none", "partial", "full"
    },
    logging: {
      level: "info",
      excludeSensitiveData: true
    }
  }
})`}
                  </pre>
                </div>
              </section>

              <Separator className="bg-white/10" />

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Security Best Practices</h2>
                <ul className="list-disc list-inside space-y-2 text-white/70">
                  <li>Use environment variables for all API keys and sensitive configuration</li>
                  <li>Implement server-side validation for all AI interactions</li>
                  <li>Apply the principle of least privilege for service accounts</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Implement rate limiting to prevent abuse</li>
                  <li>Keep detailed logs of AI usage for security investigations</li>
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

export default SecurityBestPractices;
