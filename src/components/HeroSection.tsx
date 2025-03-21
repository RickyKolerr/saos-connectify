import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 overflow-hidden bg-black relative">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full bg-white/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-white/5 blur-[100px]"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex items-center self-start gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white mb-2 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span>Introducing ORCHESITY</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl relative">
                <span className="text-white">
                  Supercharge Your AI 
                </span>
                <br />
                <span className="text-white">
                  Integration with 
                </span>
                <br />
                <span className="text-white">
                  ORCHESITY
                </span>
                
                <div className="absolute -top-20 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl">
                Plug-and-play middleware to orchestrate AI APIs effortlessly—scalable, secure, and ready in 5 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-[400px]:gap-4 pt-2">
              <Button asChild className="bg-white text-black hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group">
                <Link to="/auth/signup">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300">
                <Link to="/contact">
                  Request Demo
                </Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm pt-2">
              <div className="flex items-center group">
                <div className="h-4 w-4 rounded-full bg-white/20 mr-2 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"></div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">No credit card required</span>
              </div>
              <div className="flex items-center group">
                <div className="h-4 w-4 rounded-full bg-white/20 mr-2 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"></div>
                <span className="text-white/70 group-hover:text-white transition-colors duration-300">Free for 14 days</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative p-2">
              <div className="w-full h-full bg-white/5 opacity-30 blur-xl absolute inset-0 rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-xl animate-float hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 600 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="600" height="400" fill="#333333" />
                  <path
                    d="M300 120C310.61 120 321.078 122.346 330.667 126.887C340.256 131.427 348.714 138.045 355.355 146.231C362.001 154.416 366.651 164.003 368.962 174.252C371.273 184.5 371.178 195.141 368.686 205.346C366.194 215.551 361.374 225.064 354.586 233.152C347.798 241.239 339.228 247.736 329.566 252.135C319.904 256.535 309.399 258.723 298.785 258.56C288.172 258.397 277.742 255.888 268.22 251.203"
                    stroke="#FFFFFF"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-[dash_3s_ease-in-out_infinite]"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                  />
                  <path
                    d="M100 200H260"
                    stroke="#FFFFFF"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <path
                    d="M340 200H500"
                    stroke="#FFFFFF"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <circle cx="100" cy="120" r="20" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="100" cy="280" r="20" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="500" cy="120" r="20" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="500" cy="280" r="20" fill="#FFFFFF" className="animate-pulse" />
                  <circle cx="300" cy="200" r="30" fill="#FFFFFF" className="animate-pulse" />
                  <path
                    d="M100 120L240 120C251.046 120 260 128.954 260 140V200"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 280L240 280C251.046 280 260 271.046 260 260V200"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M500 120L360 120C348.954 120 340 128.954 340 140V200"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M500 280L360 280C348.954 280 340 271.046 340 260V200"
                    stroke="#FFFFFF"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              {/* Animated orbit dots */}
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-0 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[250px] h-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-0 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/50 shadow-[0_0_10px_2px_rgba(255,255,255,0.2)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
