
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-black/40 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-purple-900/10 blur-[80px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-blue-900/10 blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-black/50 to-black/30 p-8 md:p-12 
          shadow-[0_0_40px_rgba(0,0,0,0.3)] border border-white/10 text-center 
          hover:shadow-[0_0_60px_rgba(0,0,0,0.4)] transition-all duration-700 backdrop-blur-md
          relative overflow-hidden">
          
          {/* Animated accent dots */}
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20 animate-ping opacity-75" style={{ animationDuration: "3s" }}></div>
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20 animate-ping opacity-75" style={{ animationDuration: "4s" }}></div>
          <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20 animate-ping opacity-75" style={{ animationDuration: "3.5s" }}></div>
          <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20 animate-ping opacity-75" style={{ animationDuration: "4.5s" }}></div>
          
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/70 mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to supercharge your AI integration?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Join hundreds of companies already using ORCHESITY to simplify their AI infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/5 hover:border-white/60 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
              Request Demo
            </Button>
          </div>
          
          <div className="mt-8 text-xs text-white/50">No credit card required. 14-day free trial.</div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
