
import { 
  Wand2, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  BarChart3
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => (
  <div className="flex flex-col items-center text-center p-4 md:p-6 rounded-xl glass-card opacity-0 animate-fade-in" style={{ animationDelay: delay }}>
    <div className="p-3 rounded-full bg-blue-500/20 text-blue-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
            Key Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Everything you need to orchestrate AI
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            SAOS provides all the tools to manage your AI integrations in one place, with powerful features built for developers and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Feature
            icon={<Wand2 size={24} />}
            title="Smart API Orchestration"
            description="Dynamically selects the best AI API (e.g., Grok, GPT-4) based on cost, speed, and accuracy."
            delay="0.1s"
          />
          <Feature
            icon={<Clock size={24} />}
            title="Instant Setup"
            description="Configure in 5 minutes with our Quick Setup Wizard and Docker support."
            delay="0.2s"
          />
          <Feature
            icon={<ShieldCheck size={24} />}
            title="Scalable & Secure"
            description="Microservices architecture with WAF, OAuth 2.0, and multicloud flexibility."
            delay="0.3s"
          />
          <Feature
            icon={<DollarSign size={24} />}
            title="Cost Optimization"
            description="Reduce API costs with caching (Redis) and intelligent fallback."
            delay="0.4s"
          />
          <Feature
            icon={<BarChart3 size={24} />}
            title="Real-Time Insights"
            description="Monitor performance with dashboards and alerts (Slack/Email)."
            delay="0.5s"
          />
          <div className="p-6 rounded-xl border border-dashed border-border glass-card flex flex-col items-center justify-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">And Many More...</h3>
            <p className="text-muted-foreground">Explore all the features in our documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
