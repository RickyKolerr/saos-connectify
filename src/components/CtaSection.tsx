
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto rounded-xl bg-gradient-to-r from-blue-900/50 to-blue-600/50 p-8 md:p-12 shadow-[0_0_40px_rgba(30,64,175,0.4)] text-white text-center border border-blue-500/30 hover:shadow-[0_0_60px_rgba(30,64,175,0.5)] transition-all duration-700">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ready to supercharge your AI integration?</h2>
          <p className="text-lg mb-8 text-blue-200">
            Join hundreds of companies already using ORCHESITY to simplify their AI infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-white to-white/90 text-blue-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:opacity-90 transition-all duration-300">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
