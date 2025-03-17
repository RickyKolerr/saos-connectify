
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = "Features - ORCHESITY";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] relative overflow-hidden">
      {/* Gradient orbs for enhanced background effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-900/5 blur-[100px] animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      <Navbar />
      <main className="relative z-10">
        <div className="py-16 container">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Features</h1>
          <p className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto">
            Discover how ORCHESITY can streamline your AI operations with our comprehensive feature set.
          </p>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
