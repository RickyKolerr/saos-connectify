
import { Check } from "lucide-react";

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mr-3 mt-0.5">
      <Check className="h-3 w-3 text-background" />
    </div>
    <p className="text-muted-foreground">{text}</p>
  </div>
);

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="inline-block rounded-lg bg-teal-500/20 px-3 py-1 text-sm text-teal-400">
              Why Choose SAOS
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl text-gradient">
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
          
          <div className="rounded-xl glass-card p-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Supported AI Providers</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["OpenAI (GPT-4)", "Anthropic (Claude)", "Grok", "Mistral AI", "LLaMA", "Cohere", "AI21 Labs", "NVIDIA", "HuggingFace"].map((provider, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center p-4 rounded-lg border border-border bg-background/50 text-center"
                >
                  <span className="text-sm font-medium text-foreground/80">{provider}</span>
                </div>
              ))}
              <div className="flex items-center justify-center p-4 rounded-lg border border-dashed border-blue-500/30 bg-blue-500/10 text-center">
                <span className="text-sm font-medium text-blue-400">+ Many More</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-900/30 rounded-lg border border-blue-900/50">
              <h4 className="font-semibold mb-2 text-blue-100">Custom Deployment Options</h4>
              <p className="text-sm text-blue-200/80 mb-3">
                Need to support a specific AI provider or run in a custom environment?
              </p>
              <p className="text-sm font-medium text-blue-300">Contact our team for enterprise solutions →</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
