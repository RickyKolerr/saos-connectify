
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative rounded-xl overflow-hidden card-highlight p-1">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-24 h-24 rounded-full bg-blue-500 absolute -top-12 -left-12"></div>
              <div className="w-16 h-16 rounded-full bg-blue-500 absolute top-20 right-20"></div>
              <div className="w-20 h-20 rounded-full bg-blue-500 absolute bottom-8 left-1/4"></div>
            </div>
            
            <div className="bg-background/60 backdrop-blur-md rounded-lg p-8 md:p-12 relative">
              <Quote className="h-12 w-12 text-blue-500/20 absolute top-6 left-6" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-secondary overflow-hidden flex-shrink-0">
                  <svg className="w-full h-full text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                <div className="text-center md:text-left">
                  <blockquote className="text-lg md:text-xl mb-4 font-medium text-foreground">
                    "orchesity cut our AI integration time by 70%—it's a game-changer for our team. We were able to switch between multiple AI providers without rewriting our code, and the cost savings have been substantial."
                  </blockquote>
                  
                  <footer>
                    <div className="font-semibold text-foreground">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">CTO at TechInnovate</div>
                  </footer>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
                {["70% faster development", "30% cost reduction", "5 min average setup", "Zero code changes"].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-medium text-muted-foreground">{stat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
