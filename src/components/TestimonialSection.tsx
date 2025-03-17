
import { Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative rounded-xl overflow-hidden card-highlight p-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="w-24 h-24 rounded-full bg-black/80 absolute -top-12 -left-12 animate-pulse"></div>
              <div className="w-16 h-16 rounded-full bg-black/80 absolute top-20 right-20 animate-pulse delay-300"></div>
              <div className="w-20 h-20 rounded-full bg-black/80 absolute bottom-8 left-1/4 animate-pulse delay-700"></div>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md rounded-lg p-8 md:p-12 relative transform hover:scale-[1.01] transition-all duration-500">
              <Quote className="h-12 w-12 text-black/20 absolute top-6 left-6" />
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex-shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/lovable-uploads/b113c385-3229-4cc8-bc6a-a77746e3ce51.png" alt="Rachel Le" className="object-cover" />
                    <AvatarFallback className="w-full h-full text-white bg-black/80">RL</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="text-center md:text-left">
                  <blockquote className="text-lg md:text-xl mb-4 font-medium text-foreground relative">
                    <span className="text-black/60 absolute -left-4 top-0 text-2xl">"</span>
                    ORCHESITY cut our AI integration time by 70%—it's a game-changer for our team. We were able to switch between multiple AI providers without rewriting our code, and the cost savings have been substantial.
                    <span className="text-black/60 text-2xl">"</span>
                  </blockquote>
                  
                  <footer>
                    <div className="font-semibold text-gradient">Rachel Le</div>
                    <div className="text-sm text-muted-foreground">CTO at TechInnovate</div>
                  </footer>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
                {["70% faster development", "30% cost reduction", "5 min average setup", "Zero code changes"].map((stat, index) => (
                  <div key={index} className="text-center hover:transform hover:scale-105 transition-all duration-300">
                    <div className="text-sm font-medium text-black/70">{stat}</div>
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
