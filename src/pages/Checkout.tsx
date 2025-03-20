import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { usePayment } from "@/context/PaymentContext";
import { Button } from "@/components/ui/button";
import PaymentForm from "@/components/payment/PaymentForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Check, ChevronRight } from "lucide-react";

// Define plan structure
type Plan = {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  onPremise?: boolean;
};

// Mock plans data
const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 199,
    annualPrice: 2029, // ~15% discount
    features: [
      "10,000 API calls per month",
      "3 AI providers",
      "Basic analytics",
      "Community support",
      "Standard SLA"
    ]
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 499,
    annualPrice: 5089, // ~15% discount
    features: [
      "25,000 API calls per month",
      "5 AI providers",
      "Advanced analytics",
      "Priority email support",
      "99.5% uptime SLA",
      "Custom API keys"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    monthlyPrice: 799,
    annualPrice: 8149, // ~15% discount
    features: [
      "50,000 API calls per month",
      "All AI providers",
      "Advanced analytics",
      "Email + chat support",
      "99.9% uptime SLA",
      "Custom domain",
      "Team collaboration tools"
    ]
  },
  {
    id: "on-premise-standard",
    name: "On-Premise Standard",
    monthlyPrice: 999,
    annualPrice: 10189, // ~15% discount
    features: [
      "Full platform deployment on your infrastructure",
      "Up to 10 concurrent projects",
      "Local AI model hosting capability",
      "Standard implementation support",
      "Quarterly updates",
      "8/5 technical support"
    ],
    onPremise: true
  },
  {
    id: "on-premise-enterprise",
    name: "On-Premise Enterprise",
    monthlyPrice: 1999,
    annualPrice: 20389, // ~15% discount
    features: [
      "Unlimited self-hosted deployments",
      "Unlimited concurrent projects",
      "Custom integrations with existing systems",
      "White-labeled solution option",
      "Priority implementation support",
      "Monthly updates",
      "24/7 technical support",
      "Compliance assistance (HIPAA, GDPR, etc.)"
    ],
    onPremise: true
  }
];

const Checkout = () => {
  const { planId } = useParams<{ planId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isAnnual, setIsAnnual, selectedPlan, setSelectedPlan } = usePayment();
  
  const [currentStep, setCurrentStep] = useState(1);
  
  // Find selected plan
  const plan = plans.find(p => p.id === planId) || plans[0];
  
  useEffect(() => {
    // If the user is not logged in, redirect to login page
    if (!user) {
      navigate("/auth/signin?redirect=" + encodeURIComponent(`/checkout/${planId}`));
    }
    
    // Set the selected plan in context
    if (planId) {
      setSelectedPlan(planId);
    }
    
    // Update document title
    document.title = "Checkout - ORCHESITY";
  }, [user, planId, navigate, setSelectedPlan]);
  
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  
  const handleSuccess = () => {
    setCurrentStep(3); // Move to confirmation step
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] relative overflow-hidden">
      <SEOHead 
        title="Checkout - ORCHESITY AI Orchestration Platform"
        description="Complete your subscription purchase for the ORCHESITY AI platform."
        keywords="checkout, payment, subscription, AI platform"
      />
      
      {/* Gradient orbs for enhanced background effect */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-900/5 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] rounded-full bg-blue-900/5 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <Navbar />
      
      <main className="flex-grow container px-4 md:px-6 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Checkout Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className={`flex items-center ${currentStep >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  {currentStep > 1 ? <Check className="h-4 w-4" /> : <span>1</span>}
                </div>
                <span className="ml-2 font-medium">Plan Selection</span>
              </div>
              
              <div className={`w-10 h-0.5 mx-2 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted-foreground/40'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  {currentStep > 2 ? <Check className="h-4 w-4" /> : <span>2</span>}
                </div>
                <span className="ml-2 font-medium">Payment</span>
              </div>
              
              <div className={`w-10 h-0.5 mx-2 ${currentStep >= 3 ? 'bg-primary' : 'bg-muted-foreground/40'}`}></div>
              
              <div className={`flex items-center ${currentStep >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground'}`}>
                  <span>3</span>
                </div>
                <span className="ml-2 font-medium">Confirmation</span>
              </div>
            </div>
          </div>
          
          {/* Step 1: Plan Selection */}
          {currentStep === 1 && (
            <div className="bg-background/20 backdrop-blur-md rounded-xl border border-border p-6">
              <h1 className="text-2xl font-bold mb-6 text-center">Your Subscription Plan</h1>
              
              <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-1">{plan.name} Plan</h2>
                  <p className="text-muted-foreground">
                    {isAnnual ? "Annual billing" : "Monthly billing"}
                  </p>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center">
                  <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-muted-foreground'}`}>Monthly</span>
                  <div className="mx-2">
                    <button
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${isAnnual ? "bg-primary" : "bg-gray-600"}`}
                      onClick={() => setIsAnnual(!isAnnual)}
                    >
                      <div 
                        className={`w-4 h-4 rounded-full bg-white transform transition-transform ${isAnnual ? "translate-x-6" : "translate-x-0"}`} 
                      />
                    </button>
                  </div>
                  <span className={`text-sm ${isAnnual ? 'text-white' : 'text-muted-foreground'}`}>Annual</span>
                  <span className="ml-2 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white">
                    Save 15%
                  </span>
                </div>
              </div>
              
              <div className="bg-background/30 rounded-lg p-4 mb-6">
                <div className="flex justify-between mb-4">
                  <span>Plan price</span>
                  <span className="font-semibold">
                    ${isAnnual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                    <span className="text-muted-foreground text-sm ml-1">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </span>
                </div>
                {isAnnual && (
                  <div className="flex justify-between mb-4 text-green-500">
                    <span>Annual discount</span>
                    <span>-${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-border pt-4 flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-xl">${price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Plan includes:</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center">
                        <Check className="h-2 w-2 text-primary-foreground" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between">
                <Link to="/pricing">
                  <Button variant="outline">Change Plan</Button>
                </Link>
                <Button onClick={() => setCurrentStep(2)}>
                  Continue to Payment <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 2: Payment */}
          {currentStep === 2 && (
            <div>
              <PaymentForm 
                amount={price} 
                planName={`${plan.name} Plan (${isAnnual ? 'Annual' : 'Monthly'})`}
                onSuccess={handleSuccess}
              />
              <div className="mt-4 text-center">
                <Button variant="link" onClick={() => setCurrentStep(1)}>
                  Back to Plan Selection
                </Button>
              </div>
            </div>
          )}
          
          {/* Step 3: Confirmation */}
          {currentStep === 3 && (
            <div className="bg-background/20 backdrop-blur-md rounded-xl border border-border p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-500" />
              </div>
              
              <h1 className="text-2xl font-bold mb-2">Subscription Activated!</h1>
              
              <p className="text-muted-foreground mb-6">
                Your {plan.name} Plan has been successfully activated. You now have access to all the features included in your subscription.
              </p>
              
              <div className="bg-background/30 rounded-lg p-4 mb-6 text-left">
                <h3 className="font-medium mb-3">Subscription Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Plan</span>
                    <span>{plan.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Billing</span>
                    <span>{isAnnual ? "Annual" : "Monthly"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Amount</span>
                    <span>${price.toFixed(2)} {isAnnual ? "/year" : "/month"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <span className="text-green-500">Active</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Link to="/dashboard">
                  <Button className="w-full">Go to Dashboard</Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" className="w-full">Return to Home</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;
