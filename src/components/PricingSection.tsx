
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  primary = false,
  delay
}: { 
  name: string; 
  price: string; 
  description: string; 
  features: string[];
  primary?: boolean;
  delay: string;
}) => (
  <div 
    className={`rounded-xl p-6 ${primary ? 'border-2 border-blue-500 shadow-lg' : 'border border-border'} 
    relative flex flex-col h-full ${primary ? 'bg-blue-900/20' : 'glass-card'} opacity-0 animate-fade-in`}
    style={{ animationDelay: delay }}
  >
    {primary && (
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
        <div className="bg-teal-500 text-background text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </div>
      </div>
    )}
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <div className="mt-4 mb-2">
        <span className="text-3xl font-bold text-foreground">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    
    <div className="mt-6 space-y-3 flex-grow">
      {features.map((feature, index) => (
        <div className="flex items-start" key={index}>
          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${primary ? 'bg-blue-500' : 'bg-teal-500'} flex items-center justify-center mr-3 mt-0.5`}>
            <Check className="h-3 w-3 text-background" />
          </div>
          <p className="text-sm text-muted-foreground">{feature}</p>
        </div>
      ))}
    </div>
    
    <div className="mt-8">
      <Button
        className={`w-full ${primary 
          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
          : 'bg-background/50 hover:bg-background/70 text-foreground border border-border'}`}
      >
        {primary ? 'Get Started' : 'Learn More'}
      </Button>
    </div>
  </div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan that's right for you, with no surprises or hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingTier
            name="Starter"
            price="$99"
            description="Perfect for startups and small projects"
            features={[
              "10,000 API calls per month",
              "3 AI providers",
              "Basic analytics",
              "Community support",
              "Standard SLA"
            ]}
            delay="0.1s"
          />
          
          <PricingTier
            name="Professional"
            price="$299"
            description="For growing companies with serious AI needs"
            features={[
              "50,000 API calls per month",
              "All AI providers",
              "Advanced analytics",
              "Email + chat support",
              "99.9% uptime SLA",
              "Custom domain"
            ]}
            primary={true}
            delay="0.2s"
          />
          
          <PricingTier
            name="Enterprise"
            price="Custom"
            description="For organizations needing complete control"
            features={[
              "Unlimited API calls",
              "On-premise deployment",
              "Private cloud option",
              "Dedicated support team",
              "Custom integrations",
              "SSO & advanced security"
            ]}
            delay="0.3s"
          />
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4">
            All plans include our core features. Need something different? We offer custom pricing for special requirements.
          </p>
          <Button variant="outline" className="mx-auto border-border text-foreground">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
