
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from "./context/AuthContext";
import { PaymentProvider } from "./context/PaymentContext";
import AnimatedLine from "./components/AnimatedLine";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Pricing from "./pages/Pricing";
import Checkout from "./pages/Checkout";
import Billing from "./pages/Billing";
import Documentation from "./pages/Documentation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ApiReference from "./pages/ApiReference";
import DeveloperProgram from "./pages/DeveloperProgram";
import Status from "./pages/Status";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ChatInterface from "./components/ChatInterface";
import AdvancedConfig from "./pages/docs/AdvancedConfig";
import ProviderSelection from "./pages/docs/ProviderSelection";
import CachingStrategies from "./pages/docs/CachingStrategies";
import ErrorHandling from "./pages/docs/ErrorHandling";
import CostOptimization from "./pages/docs/CostOptimization";
import Scalability from "./pages/docs/Scalability";
import SecurityBestPractices from "./pages/docs/SecurityBestPractices";
import MonitoringAnalytics from "./pages/docs/MonitoringAnalytics";

// Orchesity Pages
import OrchesityDashboard from "./pages/orchesity/Dashboard";
import OrchesityDeveloper from "./pages/orchesity/Developer";
import OrchesityBusiness from "./pages/orchesity/Business";
import OrchesityNotFound from "./pages/orchesity/NotFound";
import OrchesityServerError from "./pages/orchesity/ServerError";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PaymentProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AnimatedLine />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/features" element={<Features />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/benefits" element={<Benefits />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/checkout/:planId" element={<Checkout />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/api-reference" element={<ApiReference />} />
                <Route path="/developer-program" element={<DeveloperProgram />} />
                <Route path="/status" element={<Status />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                {/* Auth Routes */}
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/signup" element={<SignUp />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/auth/reset-password" element={<ResetPassword />} />
                {/* Documentation Routes */}
                <Route path="/documentation/advanced-config" element={<AdvancedConfig />} />
                <Route path="/documentation/provider-selection" element={<ProviderSelection />} />
                <Route path="/documentation/caching" element={<CachingStrategies />} />
                <Route path="/documentation/error-handling" element={<ErrorHandling />} />
                <Route path="/documentation/cost-optimization" element={<CostOptimization />} />
                <Route path="/documentation/scalability" element={<Scalability />} />
                <Route path="/documentation/security" element={<SecurityBestPractices />} />
                <Route path="/documentation/monitoring" element={<MonitoringAnalytics />} />
                
                {/* Orchesity Routes */}
                <Route path="/orchesity/dashboard" element={<OrchesityDashboard />} />
                <Route path="/orchesity/developer" element={<OrchesityDeveloper />} />
                <Route path="/orchesity/business" element={<OrchesityBusiness />} />
                <Route path="/orchesity/error" element={<OrchesityServerError />} />
                <Route path="/orchesity/*" element={<OrchesityNotFound />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <ChatInterface />
            </BrowserRouter>
          </TooltipProvider>
        </PaymentProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
