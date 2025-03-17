
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
  <div className="group flex flex-col items-center text-center p-4 md:p-6 rounded-xl glass-card opacity-0 animate-fade-in transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.1)]" style={{ animationDelay: delay }}>
    <div className="p-3 rounded-full bg-white/20 text-white mb-4 group-hover:bg-white/30 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-gradient transition-all duration-300">{title}</h3>
    <p className="text-muted-foreground group-hover:text-foreground/80 transition-all duration-300">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gradient-to-b from-black/90 to-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-white/10 px-3 py-1 text-sm text-white/70">
            Key Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            Everything you need to orchestrate AI
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            ORCHESITY provides all the tools to manage your AI integrations in one place, with powerful features built for developers and businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Feature
            icon={<Wand2 size={24} className="text-white" />}
            title="Smart API Orchestration"
            description="Dynamically selects the best AI API (e.g., Grok, GPT-4) based on cost, speed, and accuracy."
            delay="0.1s"
          />
          <Feature
            icon={<Clock size={24} className="text-white" />}
            title="Instant Setup"
            description="Configure in 5 minutes with our Quick Setup Wizard and Docker support."
            delay="0.2s"
          />
          <Feature
            icon={<ShieldCheck size={24} className="text-white" />}
            title="Scalable & Secure"
            description="Microservices architecture with WAF, OAuth 2.0, and multicloud flexibility."
            delay="0.3s"
          />
          <Feature
            icon={<DollarSign size={24} className="text-white" />}
            title="Cost Optimization"
            description="Reduce API costs with caching (Redis) and intelligent fallback."
            delay="0.4s"
          />
          <Feature
            icon={<BarChart3 size={24} className="text-white" />}
            title="Real-Time Insights"
            description="Monitor performance with dashboards and alerts (Slack/Email)."
            delay="0.5s"
          />
          <div className="p-6 rounded-xl border border-dashed border-white/20 glass-card flex flex-col items-center justify-center text-center opacity-0 animate-fade-in hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 transform hover:scale-105" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-semibold mb-2 text-white/70">And Many More...</h3>
            <p className="text-muted-foreground">Explore all the features in our documentation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
