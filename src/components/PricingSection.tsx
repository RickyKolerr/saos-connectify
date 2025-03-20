
import { Check } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: number;
  description: string;
  features: string[];
  primary?: boolean;
  delay: string;
  cta: string;
  onPremise?: boolean;
};

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 199,
    description: "Perfect for startups and small projects",
    features: [
      "10,000 API calls per month",
      "3 AI providers",
      "Basic analytics",
      "Community support",
      "Standard SLA"
    ],
    delay: "0.1s",
    cta: "Get Started"
  },
  {
    id: "standard",
    name: "Standard",
    monthlyPrice: 499,
    description: "Ideal for growing teams with moderate AI needs",
    features: [
      "25,000 API calls per month",
      "5 AI providers",
      "Advanced analytics",
      "Priority email support",
      "99.5% uptime SLA",
      "Custom API keys"
    ],
    delay: "0.15s",
    cta: "Try Free for 14 Days"
  },
  {
    id: "professional",
    name: "Professional",
    monthlyPrice: 799,
    description: "For growing companies with serious AI needs",
    features: [
      "50,000 API calls per month",
      "All AI providers",
      "Advanced analytics",
      "Email + chat support",
      "99.9% uptime SLA",
      "Custom domain",
      "Team collaboration tools"
    ],
    primary: true,
    delay: "0.2s",
    cta: "Get Started"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 0,
    description: "For organizations needing complete control",
    features: [
      "Unlimited API calls",
      "On-premise deployment",
      "Private cloud option",
      "Dedicated support team",
      "Custom integrations",
      "SSO & advanced security",
      "SLA guarantees",
      "Dedicated account manager"
    ],
    delay: "0.3s",
    cta: "Contact Sales"
  }
];

// On-premise packages
const onPremisePlans: PricingPlan[] = [
  {
    id: "on-premise-standard",
    name: "On-Premise Standard",
    monthlyPrice: 999,
    description: "Self-hosted solution for security-focused teams",
    features: [
      "Full platform deployment on your infrastructure",
      "Up to 10 concurrent projects",
      "Local AI model hosting capability",
      "Standard implementation support",
      "Quarterly updates",
      "8/5 technical support"
    ],
    delay: "0.1s",
    cta: "Request Quote",
    onPremise: true
  },
  {
    id: "on-premise-enterprise",
    name: "On-Premise Enterprise",
    monthlyPrice: 1999,
    description: "Complete control with maximum security",
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
    primary: true,
    delay: "0.2s",
    cta: "Request Quote",
    onPremise: true
  }
];

const PricingTier = ({ 
  id,
  name, 
  price, 
  description, 
  features, 
  primary = false,
  delay,
  cta,
  onPremise = false
}: { 
  id: string;
  name: string; 
  price: string | React.ReactNode; 
  description: string; 
  features: string[];
  primary?: boolean;
  delay: string;
  cta: string;
  onPremise?: boolean;
}) => (
  <Card 
    className={`rounded-xl p-6 ${primary ? 'border-2 border-white/50 shadow-lg' : 'border border-border'} 
    relative flex flex-col h-full ${primary ? 'bg-black/60' : 'glass-card'} opacity-0 animate-fade-in
    hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 transform hover:scale-[1.02]`}
    style={{ animationDelay: delay }}
  >
    {primary && (
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
        <div className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          POPULAR
        </div>
      </div>
    )}
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-foreground">{name}</h3>
      <div className="mt-4 mb-2">
        {typeof price === 'string' ? (
          <>
            <span className="text-3xl font-bold text-gradient">{price}</span>
          </>
        ) : (
          price
        )}
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    
    <div className="mt-6 space-y-3 flex-grow">
      {features.map((feature, index) => (
        <div className="flex items-start group" key={index}>
          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${primary ? 'bg-white' : 'bg-white/80'} flex items-center justify-center mr-3 mt-0.5 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300`}>
            <Check className="h-3 w-3 text-black" />
          </div>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{feature}</p>
        </div>
      ))}
    </div>
    
    <div className="mt-8">
      <Button
        className={`w-full ${primary 
          ? 'bg-white hover:bg-white/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] text-black' 
          : 'bg-background/50 hover:bg-background/70 text-foreground border border-border hover:border-white/30'} transition-all duration-300`}
        asChild
      >
        {id === "enterprise" ? (
          <Link to="/contact">
            {cta}
          </Link>
        ) : onPremise ? (
          <Link to="/contact?plan={id}">
            {cta}
          </Link>
        ) : (
          <Link to={`/checkout/${id}`}>
            {cta}
          </Link>
        )}
      </Button>
    </div>
  </Card>
);

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const annualDiscount = 0.15; // 15% discount for annual billing
  const [showOnPremise, setShowOnPremise] = useState(false);

  const formatPrice = (monthlyPrice: number) => {
    if (monthlyPrice === 0) return "Custom";
    
    const price = isAnnual 
      ? monthlyPrice * (1 - annualDiscount) 
      : monthlyPrice;
      
    return `$${Math.round(price)}`;
  };

  return (
    <section id="pricing" className="py-16 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white/80">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Simple, transparent pricing
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Choose the plan that's right for you, with no surprises or hidden fees.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-muted-foreground'}`}>Monthly</span>
            <div className="flex items-center">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-white/90"
              />
            </div>
            <div className="flex items-center">
              <span className={`text-sm ${isAnnual ? 'text-white' : 'text-muted-foreground'}`}>Annual</span>
              <span className="ml-2 inline-block rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-medium text-white">
                Save 15%
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mt-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className={`text-sm ${!showOnPremise ? 'text-white' : 'text-muted-foreground'}`}>Cloud Services</span>
            <div className="flex items-center">
              <Switch
                checked={showOnPremise}
                onCheckedChange={setShowOnPremise}
                className="data-[state=checked]:bg-white/90"
              />
            </div>
            <span className={`text-sm ${showOnPremise ? 'text-white' : 'text-muted-foreground'}`}>On-Premise Solutions</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {showOnPremise ? 
            // Display on-premise plans in a 2-column layout
            onPremisePlans.map((plan) => (
              <PricingTier
                key={plan.id}
                id={plan.id}
                name={plan.name}
                price={
                  <div>
                    <span className="text-3xl font-bold text-gradient">{formatPrice(plan.monthlyPrice)}</span>
                    <span className="text-muted-foreground ml-1">{isAnnual ? "/mo, billed annually" : "/month"}</span>
                  </div>
                }
                description={plan.description}
                features={plan.features}
                primary={plan.primary}
                delay={plan.delay}
                cta={plan.cta}
                onPremise={plan.onPremise}
              />
            ))
            :
            // Display cloud plans
            pricingPlans.map((plan) => (
              <PricingTier
                key={plan.id}
                id={plan.id}
                name={plan.name}
                price={
                  plan.monthlyPrice === 0 ? (
                    <span className="text-3xl font-bold text-gradient">Custom</span>
                  ) : (
                    <div>
                      <span className="text-3xl font-bold text-gradient">{formatPrice(plan.monthlyPrice)}</span>
                      <span className="text-muted-foreground ml-1">{isAnnual ? "/mo, billed annually" : "/month"}</span>
                    </div>
                  )
                }
                description={plan.description}
                features={plan.features}
                primary={plan.primary}
                delay={plan.delay}
                cta={plan.cta}
              />
            ))
          }
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4">
            All plans include our core features. Need something different? We offer custom pricing for special requirements.
          </p>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="outline" className="mx-auto border-border text-foreground hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-background/80 backdrop-blur-md border border-white/20">
              <div className="text-sm">
                <strong className="text-white/90">Enterprise Support</strong>
                <p className="mt-1 text-muted-foreground">Our team will create a custom plan tailored to your organization's specific needs.</p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
