
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-violet-500/10 blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-violet-900/40 to-purple-900/40 p-8 md:p-12 
          shadow-[0_0_40px_rgba(139,92,246,0.3)] border border-violet-500/20 text-center 
          hover:shadow-[0_0_60px_rgba(139,92,246,0.4)] transition-all duration-700 backdrop-blur-md
          relative overflow-hidden">
          
          {/* Animated accent dots */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-violet-400 animate-ping opacity-75" style={{ animationDuration: "3s" }}></div>
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400 animate-ping opacity-75" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-400 animate-ping opacity-75" style={{ animationDuration: "3.5s" }}></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-violet-400 animate-ping opacity-75" style={{ animationDuration: "4.5s" }}></div>
          
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-1.5 text-sm text-violet-300 mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-violet-100 to-white/90 bg-clip-text text-transparent">
            Ready to supercharge your AI integration?
          </h2>
          <p className="text-lg mb-8 text-violet-200">
            Join hundreds of companies already using ORCHESITY to simplify their AI infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:opacity-90 transition-all duration-300 group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-violet-400/50 hover:bg-violet-500/10 hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300">
              Request Demo
            </Button>
          </div>
          
          <div className="mt-8 text-xs text-violet-300/70">No credit card required. 14-day free trial.</div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
