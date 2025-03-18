
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Server, Database, Eye, UserCheck, Users, FileText } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Update document title when component mounts
    document.title = "ORCHESITY - Secure AI Orchestration Platform";
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      
      toast({
        title: "Section Navigation",
        description: `Viewing ${id.charAt(0).toUpperCase() + id.slice(1)} section`,
        duration: 2000,
      });
    }
  };

  const sections = [
    { id: "platform", label: "Platform Overview", icon: <Server className="h-5 w-5" /> },
    { id: "security", label: "Security Features", icon: <Shield className="h-5 w-5" /> },
    { id: "data", label: "Data Handling", icon: <Database className="h-5 w-5" /> },
    { id: "privacy", label: "Privacy Controls", icon: <Eye className="h-5 w-5" /> },
    { id: "compliance", label: "Compliance", icon: <FileText className="h-5 w-5" /> },
    { id: "users", label: "User Rights", icon: <UserCheck className="h-5 w-5" /> },
    { id: "enterprise", label: "Enterprise Solutions", icon: <Users className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SEOHead 
        title="ORCHESITY - Secure AI Orchestration Platform"
        description="Learn how ORCHESITY's advanced platform ensures security, privacy, and compliance while orchestrating your AI operations."
        keywords="AI orchestration, data security, privacy controls, enterprise AI, data compliance, GDPR, CCPA, ORCHESITY security"
      />
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Secure AI Orchestration</h1>
              <p className="text-xl text-white/70">Enterprise-grade security and privacy built into every layer</p>
            </div>
            
            {/* Navigation Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto mb-12">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "outline"}
                  className={`flex flex-col items-center justify-center h-24 transition-all ${
                    activeSection === section.id 
                      ? "bg-white/10 text-white border-white/20" 
                      : "bg-black/40 text-white/70 hover:text-white border-white/10"
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <div className="mb-2">{section.icon}</div>
                  <span className="text-xs md:text-sm text-center">{section.label}</span>
                </Button>
              ))}
            </div>
            
            <div className="prose prose-invert max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Platform Overview */}
                <section id="platform" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <Server className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Platform Overview</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        ORCHESITY provides a comprehensive AI orchestration platform designed for 
                        enterprises that need to manage multiple AI systems securely and efficiently.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="card-highlight p-4 rounded-md">
                          <h3 className="font-semibold mb-2">Centralized Control</h3>
                          <p className="text-sm">Manage all AI services through a single, secure interface</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md">
                          <h3 className="font-semibold mb-2">Distributed Architecture</h3>
                          <p className="text-sm">Deploy across multiple cloud providers and on-premises environments</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md">
                          <h3 className="font-semibold mb-2">Auto-Scaling</h3>
                          <p className="text-sm">Dynamically allocate resources based on workload demands</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md">
                          <h3 className="font-semibold mb-2">Real-time Monitoring</h3>
                          <p className="text-sm">Track performance, costs, and usage across all AI services</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Security Features */}
                <section id="security" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <Shield className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Security Features</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        We have implemented multiple layers of security to protect your data and AI operations:
                      </p>
                      <ul className="space-y-3">
                        <li className="ml-6 relative">
                          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                          <strong>End-to-End Encryption:</strong> All data in transit and at rest is encrypted using AES-256.
                        </li>
                        <li className="ml-6 relative">
                          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                          <strong>Multi-Factor Authentication:</strong> Enhanced access controls for all user accounts.
                        </li>
                        <li className="ml-6 relative">
                          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                          <strong>Role-Based Access Control:</strong> Granular permissions for different user roles.
                        </li>
                        <li className="ml-6 relative">
                          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-indigo-500"></div>
                          <strong>Audit Logging:</strong> Comprehensive logs of all system access and changes.
                        </li>
                      </ul>
                      
                      <Alert className="mt-6 bg-indigo-950/30 border-indigo-500/30">
                        <AlertTitle className="text-indigo-300">Security Certification</AlertTitle>
                        <AlertDescription className="text-white/70">
                          ORCHESITY is SOC 2 Type II certified, demonstrating our commitment to maintaining the highest security standards.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Data Handling */}
                <section id="data" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <Database className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Data Handling</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        Our platform handles various types of data while maintaining strict privacy controls:
                      </p>
                      <ul className="space-y-2 text-white/80">
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                          <span><strong>Identity Data:</strong> Limited personal identifiers used only for authentication</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                          <span><strong>Usage Data:</strong> Telemetry to improve platform performance and user experience</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                          <span><strong>Content Data:</strong> Your AI inputs and outputs, processed according to your configuration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2"></span>
                          <span><strong>Configuration Data:</strong> Your settings for AI services and workflows</span>
                        </li>
                      </ul>
                      
                      <div className="mt-6 p-5 bg-white/5 rounded-md border border-white/10">
                        <h3 className="font-semibold mb-3 text-white">Data Governance Features</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-black/30 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-indigo-300 mb-1">Data Lineage</h4>
                            <p className="text-xs text-white/70">Track the origin and transformation of all data</p>
                          </div>
                          <div className="bg-black/30 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-indigo-300 mb-1">Data Classification</h4>
                            <p className="text-xs text-white/70">Automatically categorize data by sensitivity level</p>
                          </div>
                          <div className="bg-black/30 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-indigo-300 mb-1">Retention Controls</h4>
                            <p className="text-xs text-white/70">Configure custom data retention policies</p>
                          </div>
                          <div className="bg-black/30 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-indigo-300 mb-1">Data Minimization</h4>
                            <p className="text-xs text-white/70">Process only necessary data for each operation</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Privacy Controls */}
                <section id="privacy" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <Eye className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Privacy Controls</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed">
                        ORCHESITY gives you complete control over your data privacy with these features:
                      </p>
                      
                      <div className="mt-6 grid md:grid-cols-3 gap-4">
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">Private Cloud Deployment</h3>
                          <p className="text-sm">Keep all your data within your own infrastructure</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">Data Residency Options</h3>
                          <p className="text-sm">Choose specific geographic regions for data storage</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">Anonymization Tools</h3>
                          <p className="text-sm">Mask sensitive information before processing</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">No Training on Your Data</h3>
                          <p className="text-sm">Your data is never used to train our models</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">Consent Management</h3>
                          <p className="text-sm">Tools to manage and record user consent</p>
                        </div>
                        <div className="card-highlight p-4 rounded-md h-full">
                          <h3 className="font-semibold mb-2">Privacy by Design</h3>
                          <p className="text-sm">Privacy considerations built into all features</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Compliance */}
                <section id="compliance" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <FileText className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Compliance</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        ORCHESITY is designed to help you meet regulatory requirements across various frameworks:
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <div className="font-bold text-lg">GDPR</div>
                          <div className="text-xs text-white/60">European Union</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <div className="font-bold text-lg">CCPA/CPRA</div>
                          <div className="text-xs text-white/60">California, USA</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <div className="font-bold text-lg">HIPAA</div>
                          <div className="text-xs text-white/60">Healthcare</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                          <div className="font-bold text-lg">LGPD</div>
                          <div className="text-xs text-white/60">Brazil</div>
                        </div>
                      </div>
                      
                      <Alert className="mt-6 bg-indigo-950/30 border-indigo-500/30">
                        <AlertTitle className="text-indigo-300">Compliance Documentation</AlertTitle>
                        <AlertDescription className="text-white/70">
                          We provide detailed compliance documentation and data processing agreements to support your regulatory requirements.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                </section>
                
                {/* User Rights */}
                <section id="users" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <UserCheck className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">User Rights</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        We provide tools to help you respect and manage user rights related to personal data:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Data Access</div>
                          <div className="text-sm">Export all user data in portable formats</div>
                        </div>
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Data Correction</div>
                          <div className="text-sm">Update incorrect personal information</div>
                        </div>
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Data Deletion</div>
                          <div className="text-sm">Permanently remove user data</div>
                        </div>
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Processing Limitation</div>
                          <div className="text-sm">Restrict how data is processed</div>
                        </div>
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Consent Withdrawal</div>
                          <div className="text-sm">Revoke previously given permissions</div>
                        </div>
                        <div className="card-highlight p-3 rounded-md">
                          <div className="font-semibold">Data Portability</div>
                          <div className="text-sm">Transfer data between providers</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Enterprise Solutions */}
                <section id="enterprise" className="glass-card p-6 rounded-lg">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="pb-2">
                      <div className="flex items-start">
                        <Users className="h-8 w-8 text-indigo-400 mr-3 mt-1" />
                        <CardTitle className="text-2xl font-semibold">Enterprise Solutions</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2 text-white/80">
                      <p className="leading-relaxed mb-4">
                        For enterprise customers, we offer enhanced security and compliance features:
                      </p>
                      
                      <div className="mt-4 space-y-4">
                        <div className="bg-gradient-to-r from-black/40 to-indigo-950/20 p-5 rounded-lg border border-indigo-500/20">
                          <h3 className="font-semibold text-indigo-300 mb-2">Private Instances</h3>
                          <p className="text-sm">Dedicated infrastructure isolated from other customers, with enhanced security monitoring and controls.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-black/40 to-indigo-950/20 p-5 rounded-lg border border-indigo-500/20">
                          <h3 className="font-semibold text-indigo-300 mb-2">Custom Security Integrations</h3>
                          <p className="text-sm">Integration with your existing security tools, including SIEM systems, identity providers, and key management solutions.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-black/40 to-indigo-950/20 p-5 rounded-lg border border-indigo-500/20">
                          <h3 className="font-semibold text-indigo-300 mb-2">Compliance Packages</h3>
                          <p className="text-sm">Specialized configurations and documentation for regulated industries including finance, healthcare, and government.</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-8">
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                          <Lock className="h-4 w-4 mr-2" />
                          Contact Enterprise Team
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                {/* Back to top button */}
                <div className="flex justify-center mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                  >
                    Back to top
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

export default PrivacyPolicy;
