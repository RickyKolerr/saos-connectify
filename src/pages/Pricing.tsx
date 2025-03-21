
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const Pricing = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = "Pricing - ORCHESITY";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] relative overflow-hidden">
      <SEOHead 
        title="Pricing Plans - ORCHESITY AI Orchestration Platform"
        description="Choose the right ORCHESITY plan for your AI needs. Simple, transparent pricing with monthly and annual subscription options."
        keywords="AI pricing, AI orchestration, subscription plans, annual discount, AI platform pricing"
      />
      {/* Gradient orbs for enhanced background effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[100px] animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      <Navbar />
      <main className="relative z-10">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
