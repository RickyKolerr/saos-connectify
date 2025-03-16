
import { Check, Sparkles } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start group">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center mr-3 mt-0.5 group-hover:shadow-[0_0_10px_rgba(139,92,246,0.6)] transition-all duration-300 group-hover:bg-violet-400">
      <Check className="h-3 w-3 text-background" />
    </div>
    <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{text}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-background via-purple-900/10 to-secondary/20 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 px-4 py-1.5 text-sm text-violet-400">
              <Sparkles className="h-4 w-4" />
              <span>Why Choose ORCHESITY</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl bg-gradient-to-r from-violet-400 via-purple-500 to-violet-300 bg-clip-text text-transparent">
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
          
          <div className="rounded-xl glass-card p-6 opacity-0 animate-fade-in backdrop-blur-md border border-violet-500/20 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Supported AI Providers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["OpenAI (GPT-4)", "Anthropic (Claude)", "Grok", "Mistral AI", "LLaMA", "Cohere", "AI21 Labs", "NVIDIA", "HuggingFace"].map((provider, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 rounded-lg border border-violet-500/10 bg-background/50 text-center hover:border-violet-500/30 hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] transition-all duration-300 transform hover:scale-105 hover:bg-background/80"
                >
                  <span className="text-sm font-medium text-foreground/80 hover:text-violet-300 transition-colors">{provider}</span>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 rounded-lg border border-dashed border-violet-500/30 bg-violet-500/10 text-center hover:shadow-[0_0_15px_rgba(139,92,246,0.25)] transition-all duration-300 transform hover:scale-105">
                <span className="text-sm font-medium text-violet-400">+ Many More</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-b from-violet-900/30 to-purple-900/30 rounded-lg border border-violet-800/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 transform hover:scale-[1.02]">
              <h4 className="font-semibold mb-2 text-violet-100">Custom Deployment Options</h4>
              <p className="text-sm text-violet-200/80 mb-3">
                Need to support a specific AI provider or run in a custom environment?
              </p>
              <p className="text-sm font-medium text-violet-300 hover:text-violet-200 transition-colors duration-300 cursor-pointer">Contact our team for enterprise solutions →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
