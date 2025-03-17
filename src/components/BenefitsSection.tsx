
import { Check, Sparkles } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-black/70 to-black/60 flex items-center justify-center mr-3 mt-0.5 group-hover:shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:bg-black/80">
      <Check className="h-3 w-3 text-white" />
    </div>
    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{text}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-background via-black/5 to-secondary/20 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black/5 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-black/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-black/20 to-black/20 px-4 py-1.5 text-sm text-black/70">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose ORCHESITY</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl bg-gradient-to-r from-black via-black/90 to-black/80 bg-clip-text text-transparent">
              Enterprise-grade AI infrastructure, without the complexity
            </h2>
            <p className="text-lg text-muted-foreground">
              Save time, cut costs, and scale effortlessly—whether you're a startup integrating AI or an enterprise building an AI ecosystem.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BenefitItem text="70% faster AI implementation" />
              <BenefitItem text="30% lower operating costs" />
              <BenefitItem text="99.9% service reliability" />
              <BenefitItem text="Zero vendor lock-in" />
              <BenefitItem text="Enterprise-grade security" />
              <BenefitItem text="24/7 technical support" />
            </div>
          </div>
          
          <div className="rounded-xl glass-card p-6 opacity-0 animate-fade-in backdrop-blur-md border border-black/20 hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Supported AI Providers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["OpenAI (GPT-4)", "Anthropic (Claude)", "Grok", "Mistral AI", "LLaMA", "Cohere", "AI21 Labs", "NVIDIA", "HuggingFace"].map((provider, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 rounded-lg border border-black/10 bg-white/50 text-center hover:border-black/30 hover:shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-105 hover:bg-white/80"
                >
                  <span className="text-sm font-medium text-foreground/80 hover:text-black transition-colors">{provider}</span>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 rounded-lg border border-dashed border-black/30 bg-black/5 text-center hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-105">
                <span className="text-sm font-medium text-black/70">+ Many More</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-b from-black/10 to-black/5 rounded-lg border border-black/20 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-semibold mb-2 text-black">Custom Deployment Options</h4>
              <p className="text-sm text-black/80 mb-3">
                Need to support a specific AI provider or run in a custom environment?
              </p>
              <p className="text-sm font-medium text-black/70 hover:text-black transition-colors duration-300 cursor-pointer">Contact our team for enterprise solutions →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
