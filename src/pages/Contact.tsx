
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
                    Get in Touch
                  </h1>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    Have questions about ORCHESITY? Our team is here to help you implement the perfect AI orchestration solution for your business.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-full bg-white/5">
                        <Mail className="h-6 w-6 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">Email Us</h3>
                        <p className="text-white/70">support@orchesity.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-full bg-white/5">
                        <Phone className="h-6 w-6 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">Call Us</h3>
                        <p className="text-white/70">
                          US: +1 (810) 351 7299<br />
                          VN: +84 938 737 714
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-full bg-white/5">
                        <MapPin className="h-6 w-6 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">Visit Us</h3>
                        <p className="text-white/70">
                          B-0707, Block B - Sunrise Riverside Apt<br />
                          Nguyen Huu Tho St, Nha Be District<br />
                          Ho Chi Minh City 70000, VietNam
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-full bg-white/5">
                        <MessageSquare className="h-6 w-6 text-white/80" />
                      </div>
                      <div>
                        <h3 className="font-medium text-white mb-1">Live Chat</h3>
                        <p className="text-white/70">
                          Available Monday-Friday<br />
                          9am-6pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm">
                  <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm text-white/70">Full Name</label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm text-white/70">Email Address</label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="you@company.com" 
                          className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm text-white/70">Company</label>
                      <Input 
                        id="company" 
                        placeholder="Your company" 
                        className="bg-black/40 border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="interest" className="text-sm text-white/70">I'm interested in</label>
                      <Select>
                        <SelectTrigger className="bg-black/40 border-white/10 text-white focus:border-white/30">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent className="bg-black text-white border-white/10">
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="partner">Partnership Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-white/70">Your Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        className="min-h-32 bg-black/40 border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 transition-all duration-300">
                      Send Message
                    </Button>
                    
                    <p className="text-xs text-white/50 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
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

export default Contact;
