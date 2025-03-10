
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gradient">
                Supercharge Your AI Integration with SAOS
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Plug-and-play middleware to orchestrate AI APIs effortlessly—scalable, secure, and ready in 5 minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-[400px]:gap-4">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary/50">
                Request Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-teal-500 mr-2"></div>
                <span className="text-muted-foreground">Free for 14 days</span>
              </div>
            </div>
          </div>
          <div className="mx-auto lg:mr-0 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative p-2">
              <div className="w-full h-full bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-teal-400/30 opacity-30 blur-xl absolute inset-0 rounded-xl"></div>
              <div className="relative rounded-xl overflow-hidden border border-border shadow-xl animate-float">
                <svg
                  className="w-full h-auto"
                  viewBox="0 0 600 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="600" height="400" fill="#111827" />
                  <path
                    d="M300 120C310.61 120 321.078 122.346 330.667 126.887C340.256 131.427 348.714 138.045 355.355 146.231C362.001 154.416 366.651 164.003 368.962 174.252C371.273 184.5 371.178 195.141 368.686 205.346C366.194 215.551 361.374 225.064 354.586 233.152C347.798 241.239 339.228 247.736 329.566 252.135C319.904 256.535 309.399 258.723 298.785 258.56C288.172 258.397 277.742 255.888 268.22 251.203"
                    stroke="#60A5FA"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 200H260"
                    stroke="#2684FF"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M340 200H500"
                    stroke="#34D399"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="120" r="20" fill="#60A5FA" />
                  <circle cx="100" cy="280" r="20" fill="#60A5FA" />
                  <circle cx="500" cy="120" r="20" fill="#34D399" />
                  <circle cx="500" cy="280" r="20" fill="#34D399" />
                  <circle cx="300" cy="200" r="30" fill="#2684FF" />
                  <path
                    d="M100 120L240 120C251.046 120 260 128.954 260 140V200"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M100 280L240 280C251.046 280 260 271.046 260 260V200"
                    stroke="#60A5FA"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M500 120L360 120C348.954 120 340 128.954 340 140V200"
                    stroke="#34D399"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M500 280L360 280C348.954 280 340 271.046 340 260V200"
                    stroke="#34D399"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
