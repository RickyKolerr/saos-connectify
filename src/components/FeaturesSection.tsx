
import { CircuitBoard, ArrowRight, Code, Shield, Zap, Layers, Command, RefreshCw, Settings, CloudCog } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group p-6 rounded-xl transition-all duration-300 card-highlight hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      <div className="mb-4 text-white bg-gradient-to-br from-white/10 to-white/5 p-3 rounded-xl w-fit group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/80 mb-4">{description}</p>
      <a href="#" className="inline-flex items-center text-sm font-medium text-white/90 hover:text-white group">
        Learn more
        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <CloudCog className="h-6 w-6 text-white" />,
      title: "AI Provider Integration",
      description: "Connect to any AI provider through a unified API, eliminating the need for multiple integrations."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Model Optimization",
      description: "Automatically select the best model for each task based on performance, cost, and latency requirements."
    },
    {
      icon: <Layers className="h-6 w-6 text-white" />,
      title: "Load Balancing",
      description: "Distribute requests across multiple models and providers to optimize for cost, performance, and reliability."
    },
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with encryption, access controls, and compliance monitoring tools."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      title: "Fallback Management",
      description: "Automatically retry with alternative models when primary providers fail, ensuring high availability."
    },
    {
      icon: <Command className="h-6 w-6 text-white" />,
      title: "Prompt Management",
      description: "Create, test, and optimize prompts centrally with versioning and performance tracking."
    },
    {
      icon: <CircuitBoard className="h-6 w-6 text-white" />,
      title: "Observability",
      description: "Monitor usage, performance, and costs across all AI operations from a single dashboard."
    },
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Developer Tools",
      description: "Comprehensive SDKs, APIs, and documentation to streamline development and deployment."
    },
    {
      icon: <Settings className="h-6 w-6 text-white" />,
      title: "Customizable Workflows",
      description: "Build complex AI workflows with custom logic, filtering, and processing steps."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gradient-to-b from-black via-[#05050f] to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Everything you need to orchestrate AI
          </h2>
          <p className="mt-4 text-xl text-white/80">
            One platform to integrate, manage, and optimize your entire AI ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
