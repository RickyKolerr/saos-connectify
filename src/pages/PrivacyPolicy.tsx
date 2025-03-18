
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    // Update document title when component mounts
    document.title = "Privacy Policy - ORCHESITY";
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "information", label: "Information We Collect" },
    { id: "usage", label: "How We Use Your Data" },
    { id: "security", label: "Data Security" },
    { id: "rights", label: "Your Legal Rights" },
    { id: "contact", label: "Contact Us" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#0a0a14] to-[#0a0a1a] text-white">
      <SEOHead 
        title="Privacy Policy - ORCHESITY AI Orchestration Platform"
        description="Learn how ORCHESITY protects your data and privacy. Review our comprehensive privacy policy."
        keywords="privacy policy, data protection, GDPR, CCPA, user rights, data security, ORCHESITY privacy"
      />
      <Navbar />
      
      <main className="flex-grow relative">
        {/* Background orbs */}
        <div className="absolute top-40 left-10 w-[300px] h-[300px] rounded-full bg-purple-900/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container px-4 md:px-6 py-16 md:py-24 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Privacy Policy</h1>
            <p className="text-xl text-white/70">Last updated: April 15, 2024</p>
          </div>
          
          {/* Desktop sticky navigation sidebar */}
          <div className="lg:grid lg:grid-cols-4 gap-8">
            <aside className="hidden lg:block sticky top-24 self-start">
              <div className="glass-card p-5 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-white">Contents</h3>
                <nav>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-md transition-colors hover:bg-white/10 ${activeSection === section.id ? 'bg-white/10 text-white' : 'text-white/70'}`}
                        >
                          {section.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
            
            {/* Content section */}
            <div className="col-span-3 prose prose-invert max-w-none">
              <section id="introduction" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Introduction</h2>
                <p className="text-white/80 leading-relaxed">
                  At ORCHESITY, we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you 
                  visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>
              
              <section id="information" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Information We Collect</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We may collect, use, store, and transfer different kinds of personal data about you which 
                  we have grouped together as follows:
                </p>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Identity Data</strong> includes first name, last name, username, or similar identifier.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Contact Data</strong> includes billing address, email address, and telephone numbers.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Financial Data</strong> includes payment card details.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Profile Data</strong> includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Usage Data</strong> includes information about how you use our website, products, and services.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                    <span><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</span>
                  </li>
                </ul>
              </section>
              
              <section id="usage" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">How We Use Your Data</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use 
                  your personal data in the following circumstances:
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="ml-6 relative">
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                    Where we need to perform the contract we are about to enter into or have entered into with you.
                  </li>
                  <li className="ml-6 relative">
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                    Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
                  </li>
                  <li className="ml-6 relative">
                    <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                    Where we need to comply with a legal obligation.
                  </li>
                </ul>
              </section>
              
              <section id="security" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Data Security</h2>
                <p className="text-white/80 leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being 
                  accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, 
                  we limit access to your personal data to those employees, agents, contractors, and other third 
                  parties who have a business need to know.
                </p>
              </section>
              
              <section id="rights" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Your Legal Rights</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your 
                  personal data, including the right to:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-white/80">
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Request access</div>
                    <div className="text-sm">to your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Request correction</div>
                    <div className="text-sm">of your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Request erasure</div>
                    <div className="text-sm">of your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Object to processing</div>
                    <div className="text-sm">of your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Request restriction</div>
                    <div className="text-sm">of processing your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md">
                    <div className="font-semibold">Request transfer</div>
                    <div className="text-sm">of your personal data</div>
                  </div>
                  <div className="card-highlight p-3 rounded-md md:col-span-2">
                    <div className="font-semibold">Right to withdraw consent</div>
                    <div className="text-sm">at any time where we are relying on consent to process your personal data</div>
                  </div>
                </div>
              </section>
              
              <section id="contact" className="glass-card p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 border-b border-white/10 pb-2">Contact Us</h2>
                <p className="text-white/80 leading-relaxed mb-4">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-2 mt-4">
                  <div className="bg-white/10 p-4 rounded-full">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:privacy@orchesity.com" className="text-xl font-medium text-indigo-300 hover:text-white transition-colors">
                    privacy@orchesity.com
                  </a>
                </div>
              </section>
              
              {/* Back to top button (visible on mobile) */}
              <div className="lg:hidden flex justify-center mt-8">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
