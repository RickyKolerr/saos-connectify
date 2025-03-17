
import { ArrowRight } from "lucide-react";

const WorkflowSection = () => {
  const steps = [
    {
      number: "01",
      title: "Simple Integration",
      description: "Connect ORCHESITY to your existing infrastructure in minutes with our one-line SDK and clear documentation."
    },
    {
      number: "02",
      title: "Configure AI Providers",
      description: "Set your preferences for different AI providers and define rules for cost, performance, and accuracy balance."
    },
    {
      number: "03",
      title: "Instant Deployment",
      description: "Deploy with a single command to your preferred environment - cloud, on-premise, or hybrid infrastructure."
    },
    {
      number: "04",
      title: "Scale Automatically",
      description: "As your demands grow, ORCHESITY scales horizontally without additional configuration or downtime."
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/[0.01] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-white/[0.01] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
            How ORCHESITY Transforms Your Workflow
          </h2>
          <p className="text-white/70 text-lg">
            From integration to deployment, we've designed a frictionless process that lets you focus on innovation, not infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="p-8 rounded-xl border border-white/10 bg-black/60 backdrop-blur-md transition-all duration-500 
                  hover:bg-black/80 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col h-full 
                  relative overflow-hidden z-10">
                
                <div className="absolute -right-4 -top-4 text-[120px] font-bold text-white/5 select-none">
                  {step.number}
                </div>
                
                <div className="mb-4 flex-shrink-0 z-10">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-white/20 
                    bg-black text-white transition-all duration-300 group-hover:border-white/40">
                    <span className="font-bold">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 z-10 text-white group-hover:text-gradient transition-all duration-300">
                  {step.title}
                </h3>
                
                <p className="text-white/70 mb-6 z-10 group-hover:text-white/80 transition-all duration-300">
                  {step.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center text-white/60 
                  group-hover:text-white/80 transition-all duration-300 z-10">
                  <ArrowRight className="h-4 w-4 mr-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                  <span className="text-sm">Learn more about this step</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
