
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BillingSettings from "@/components/payment/BillingSettings";

const Billing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Update document title when component mounts
    document.title = "Billing - ORCHESITY";
    
    // Redirect to login if not authenticated
    if (!user) {
      navigate("/auth/signin?redirect=" + encodeURIComponent("/billing"));
    }
  }, [user, navigate]);
  
  // If no user, show nothing until redirect happens
  if (!user) return null;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] relative overflow-hidden">
      <SEOHead 
        title="Billing & Subscription - ORCHESITY AI Orchestration Platform"
        description="Manage your subscription, payment methods, and billing history for the ORCHESITY AI platform."
        keywords="billing, subscription, payment, AI platform, invoice"
      />
      
      {/* Gradient orbs for enhanced background effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <Navbar />
      
      <main className="flex-grow container px-4 md:px-6 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>
          <BillingSettings />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Billing;
