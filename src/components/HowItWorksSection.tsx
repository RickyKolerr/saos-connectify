
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
            Simple Process
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
            How SAOS Works
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            SAOS simplifies AI integration with a straightforward process that just works.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Flow Diagram */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Send Request</h3>
              <p className="text-muted-foreground text-sm">Send API requests through our unified endpoint.</p>
            </div>
            
            {/* Arrow 1 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="text-blue-400" size={32} />
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">SAOS Optimizes</h3>
              <p className="text-muted-foreground text-sm">Our middleware selects the best AI model based on your parameters.</p>
            </div>
            
            {/* Arrow 2 */}
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="text-blue-400" size={32} />
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Get Results</h3>
              <p className="text-muted-foreground text-sm">Receive standardized results from any AI provider.</p>
            </div>
          </div>
          
          {/* Extended Diagram for Desktop */}
          <div className="mt-16 glass-card rounded-xl p-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Technical Flow</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <h4 className="font-medium text-blue-400 mb-2">Client Application</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• API Key Authentication</li>
                  <li>• Single SDK Integration</li>
                  <li>• Transparent Failover</li>
                </ul>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <h4 className="font-medium text-blue-400 mb-2">SAOS Middleware</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Load Balancing</li>
                  <li>• Model Selection</li>
                  <li>• Rate Limiting</li>
                  <li>• Response Caching</li>
                </ul>
              </div>
              <div className="bg-background/50 p-4 rounded-lg border border-border">
                <h4 className="font-medium text-blue-400 mb-2">AI Providers</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• OpenAI (GPT-4)</li>
                  <li>• Anthropic (Claude)</li>
                  <li>• Grok</li>
                  <li>• LLaMA & more</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
