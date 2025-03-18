
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Lock, Database, Server, Eye, FileCheck, Code, Building } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-white">
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Security & Data Privacy
              </h1>
              <p className="text-lg text-black mb-10">
                ORCHESITY is built from the ground up with enterprise-grade security and privacy in mind. Learn how we protect your AI operations and data.
              </p>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gray-100 rounded-lg p-1">
                  <TabsTrigger value="overview" className="text-black">Overview</TabsTrigger>
                  <TabsTrigger value="data" className="text-black">Data Handling</TabsTrigger>
                  <TabsTrigger value="compliance" className="text-black">Compliance</TabsTrigger>
                  <TabsTrigger value="enterprise" className="text-black">Enterprise</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Shield className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">End-to-End Encryption</h3>
                      </div>
                      <p className="text-black">
                        All data passing through ORCHESITY is encrypted in transit and at rest using industry-standard AES-256 encryption, ensuring your prompts and responses remain confidential.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Access Controls</h3>
                      </div>
                      <p className="text-black">
                        Granular role-based access controls allow you to define exactly who in your organization can access which AI models and what operations they can perform.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Database className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Data Minimization</h3>
                      </div>
                      <p className="text-black">
                        We follow data minimization principles, only storing the information necessary to provide our services and automatically purging data after it's no longer needed.
                      </p>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Server className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Private Deployment</h3>
                      </div>
                      <p className="text-black">
                        For maximum security, enterprise customers can deploy ORCHESITY within their own infrastructure, keeping all data and operations within their security perimeter.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="data" className="mt-8">
                  <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Eye className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Data Transparency</h3>
                      </div>
                      <p className="text-black mb-4">
                        Full visibility into how your data flows through the ORCHESITY platform and which AI providers process your information.
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Comprehensive data flow logs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Provider usage tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Data lineage visualization</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <FileCheck className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Data Retention Policies</h3>
                      </div>
                      <p className="text-black mb-4">
                        Configurable data retention settings that allow you to control how long your data remains in our systems.
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Custom retention periods</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Automatic data purging</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Compliance with data regulations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="compliance" className="mt-8">
                  <div className="grid gap-6">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Code className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Regulatory Compliance</h3>
                      </div>
                      <p className="text-black mb-4">
                        ORCHESITY helps your organization maintain compliance with key data protection and AI regulations.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["GDPR", "HIPAA", "SOC 2", "CCPA", "ISO 27001", "NIST", "FedRAMP", "FERPA"].map((cert, index) => (
                          <div key={index} className="p-3 border border-gray-200 rounded-lg text-center bg-white">
                            <span className="font-medium text-black">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <h3 className="text-xl font-semibold mb-4 text-black">Compliance Documentation</h3>
                      <p className="text-black mb-4">
                        We provide comprehensive documentation to help your organization during security audits and compliance reviews.
                      </p>
                      <ul className="space-y-2 text-black">
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Security whitepapers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Compliance certifications</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Data processing agreements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                          <span>Audit logs and reports</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="enterprise" className="mt-8">
                  <div className="space-y-8">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="h-6 w-6 text-black" />
                        <h3 className="text-xl font-semibold text-black">Enterprise Security Features</h3>
                      </div>
                      <p className="text-black mb-6">
                        ORCHESITY Enterprise includes additional security measures designed for organizations with stringent data protection requirements.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h4 className="font-medium text-black">Advanced Security</h4>
                          <ul className="space-y-2 text-black">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>Single Sign-On (SSO)</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>Multi-factor authentication</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>IP allowlisting</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>Activity monitoring</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="space-y-4">
                          <h4 className="font-medium text-black">Deployment Options</h4>
                          <ul className="space-y-2 text-black">
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>Private cloud deployment</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>On-premises installation</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>Air-gapped environments</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                              <span>VPC peering</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-300">
                        <p className="text-black font-medium mb-2">Need custom security arrangements?</p>
                        <p className="text-black/80 text-sm">
                          Contact our enterprise team to discuss your specific security and compliance requirements.
                        </p>
                        <div className="mt-3">
                          <button className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-black/80 transition-colors">
                            Contact Enterprise Sales
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
