
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const JobCard = ({ title, department, location, type }: { title: string; department: string; location: string; type: string }) => (
  <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <div>
        <h3 className="text-xl font-semibold mb-1 group-hover:text-gradient transition-all duration-300">{title}</h3>
        <div className="flex flex-wrap gap-2 text-sm text-white/60">
          <span>{department}</span>
          <span className="hidden md:inline">•</span>
          <span>{location}</span>
          <span className="hidden md:inline">•</span>
          <span>{type}</span>
        </div>
      </div>
      <Button className="bg-white text-black hover:bg-white/90 shrink-0">
        Apply Now
      </Button>
    </div>
  </div>
);

const Careers = () => {
  const jobs = [
    { title: "Senior AI Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Product Manager - AI Platform", department: "Product", location: "San Francisco, CA", type: "Full-time" },
    { title: "Technical Content Writer", department: "Marketing", location: "Remote", type: "Contract" },
    { title: "Frontend Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
    { title: "Solutions Architect", department: "Customer Success", location: "New York, NY", type: "Full-time" },
    { title: "Developer Relations Engineer", department: "Marketing", location: "Remote", type: "Full-time" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SEOHead 
        title="Careers at ORCHESITY - Join Our Team"
        description="Join ORCHESITY and help us revolutionize AI orchestration. Explore current job openings and learn about our company culture and benefits."
        keywords="ORCHESITY careers, AI jobs, tech careers, remote jobs, artificial intelligence careers, tech company jobs"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Join Our Team</h1>
              <p className="text-xl text-white/70">Help us revolutionize the future of AI orchestration</p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">Innovation-Driven</h3>
                  <p className="text-white/70">Work on cutting-edge AI technology that's reshaping how businesses use artificial intelligence.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">Flexible Work</h3>
                  <p className="text-white/70">Remote-first culture with flexible hours and the tools you need to do your best work from anywhere.</p>
                </div>
                <div className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3">Growth Focused</h3>
                  <p className="text-white/70">We invest in your professional development with learning stipends and mentorship opportunities.</p>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Current Openings</h2>
              <div className="space-y-4">
                {jobs.map((job, index) => (
                  <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <JobCard {...job} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center p-8 border border-white/10 rounded-lg bg-white/5">
              <h2 className="text-2xl font-semibold mb-4">Don't see the right role?</h2>
              <p className="text-white/70 mb-6">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button className="bg-white text-black hover:bg-white/90">
                Submit General Application
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
