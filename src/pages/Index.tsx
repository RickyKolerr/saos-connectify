
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import TestimonialSection from "@/components/TestimonialSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import WorkflowSection from "@/components/WorkflowSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = "ORCHESITY - AI Orchestration Platform";
    
    // Add structured data for homepage
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'url': 'https://orchesity.com/',
      'name': 'ORCHESITY',
      'description': 'AI Orchestration Platform that streamlines your AI operations',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://orchesity.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] relative overflow-hidden">
      <SEOHead 
        title="ORCHESITY - AI Orchestration Platform"
        description="Streamline your AI operations with ORCHESITY's powerful orchestration platform"
      />
      
      {/* Gradient orbs for enhanced background effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[100px] animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <WorkflowSection />
        <BenefitsSection />
        <TrustSection />
        <TestimonialSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
