
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SEOHead 
        title="About ORCHESITY - Our Mission & Vision"
        description="Learn about ORCHESITY's mission to democratize AI integration and orchestration for businesses of all sizes. Discover our team, values, and vision."
        keywords="ORCHESITY team, AI integration, AI orchestration mission, about ORCHESITY, AI platform company"
      />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About ORCHESITY</h1>
              <p className="text-xl text-white/70">Revolutionizing AI orchestration for enterprises worldwide</p>
            </div>
            
            <div className="grid gap-10 md:gap-16 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Our Mission</h2>
                <p className="text-white/70">
                  At ORCHESITY, we're on a mission to democratize access to advanced AI technologies. We believe that by simplifying AI integration and orchestration, we can empower organizations of all sizes to harness the transformative power of artificial intelligence without the complexity and high costs typically associated with AI implementation.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Our Vision</h2>
                <p className="text-white/70">
                  We envision a world where AI integration is seamless, cost-effective, and accessible to all organizations. By providing an intelligent orchestration layer between businesses and AI providers, we aim to accelerate AI adoption and innovation across industries.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-medium mb-2">Innovation</h3>
                    <p className="text-white/70">We continuously push boundaries to create cutting-edge solutions that simplify complex AI integration challenges.</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-medium mb-2">Transparency</h3>
                    <p className="text-white/70">We believe in clear and honest communication with our customers, partners, and team members.</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-medium mb-2">Accessibility</h3>
                    <p className="text-white/70">We strive to make advanced AI technology accessible to organizations of all sizes and technical capabilities.</p>
                  </div>
                  <div className="border border-white/10 rounded-lg p-6 bg-white/5 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-medium mb-2">Excellence</h3>
                    <p className="text-white/70">We are committed to delivering exceptional quality in our products, support, and customer experience.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Our Team</h2>
                <p className="text-white/70">
                  ORCHESITY was founded by a team of AI specialists, enterprise software architects, and business leaders who recognized the need for a better way to integrate and manage AI services. With decades of combined experience in AI, cloud infrastructure, and enterprise software, our team is uniquely positioned to solve the complex challenges of AI orchestration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
