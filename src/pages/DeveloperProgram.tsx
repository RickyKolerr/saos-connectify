
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const DeveloperProgram = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">ORCHESITY Developer Program</h1>
              <p className="text-xl text-white/70">Join our community of innovators building the future of AI orchestration</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Program Benefits</h2>
                <ul className="space-y-3">
                  {[
                    "Early access to new APIs and features",
                    "Extended API rate limits for development",
                    "Direct access to our engineering team",
                    "Co-marketing opportunities",
                    "Showcase on our partner directory",
                    "Priority technical support"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="border border-white/10 rounded-lg p-6 bg-white/5">
                <h2 className="text-2xl font-semibold mb-4">Join the Program</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm" htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white/50 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white/50 text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm" htmlFor="company">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white/50 text-white"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm" htmlFor="project">Project Description</label>
                    <textarea 
                      id="project" 
                      className="w-full px-4 py-2 bg-transparent border border-white/20 rounded-md focus:outline-none focus:border-white/50 text-white h-24"
                      placeholder="Tell us about your project and how you plan to use ORCHESITY"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-white text-black hover:bg-white/90">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">Developer Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">Documentation</h3>
                  <p className="text-white/70 mb-4">Comprehensive guides and API reference for integrating with ORCHESITY.</p>
                  <Button variant="outline" className="border-white/20 hover:border-white/50 text-white">
                    View Docs
                  </Button>
                </div>
                <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">SDKs</h3>
                  <p className="text-white/70 mb-4">Client libraries for multiple languages to simplify integration.</p>
                  <Button variant="outline" className="border-white/20 hover:border-white/50 text-white">
                    Browse SDKs
                  </Button>
                </div>
                <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">Example Projects</h3>
                  <p className="text-white/70 mb-4">Sample applications demonstrating ORCHESITY integration patterns.</p>
                  <Button variant="outline" className="border-white/20 hover:border-white/50 text-white">
                    See Examples
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DeveloperProgram;
