
import { Shield, Server, Lock } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            ORCHESITY is built with security at its core, meeting the highest standards required by enterprise businesses and regulated industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <div className="p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 
              hover:bg-black/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
            <div className="mb-6 p-4 inline-flex rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <Shield className="h-8 w-8 text-white/80" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
              SOC 2 Type II Certified
            </h3>
            <p className="text-white/70 group-hover:text-white/80 transition-all duration-300">
              Our infrastructure and operations are regularly audited against the industry's highest standards for handling sensitive data.
            </p>
          </div>
          
          <div className="p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 
              hover:bg-black/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
            <div className="mb-6 p-4 inline-flex rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <Server className="h-8 w-8 text-white/80" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
              99.99% Uptime SLA
            </h3>
            <p className="text-white/70 group-hover:text-white/80 transition-all duration-300">
              Built on a globally distributed infrastructure with automatic failover, ensuring your AI operations remain online 24/7/365.
            </p>
          </div>
          
          <div className="p-8 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-500 
              hover:bg-black/60 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group">
            <div className="mb-6 p-4 inline-flex rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
              <Lock className="h-8 w-8 text-white/80" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
              End-to-End Encryption
            </h3>
            <p className="text-white/70 group-hover:text-white/80 transition-all duration-300">
              All data in transit and at rest is encrypted using AES-256, with support for customer-managed encryption keys.
            </p>
          </div>
        </div>
        
        <div className="mt-16 p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Need custom compliance requirements?</h3>
              <p className="text-white/70">
                We offer tailored solutions for HIPAA, GDPR, CCPA, and other regulatory frameworks.
              </p>
            </div>
            <button className="px-6 py-3 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-300 whitespace-nowrap font-medium">
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
