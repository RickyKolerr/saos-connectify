
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Terms of Service</h1>
              <p className="text-xl text-white/70">Effective Date: January 1, 2023</p>
            </div>
            
            <div className="prose prose-invert max-w-4xl mx-auto">
              <div className="space-y-6">
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-white/70">
                    By accessing or using ORCHESITY services ("Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Services.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                  <p className="text-white/70">
                    Permission is granted to temporarily access the Services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mt-3 text-white/70 space-y-2">
                    <li>Modify or copy the materials;</li>
                    <li>Use the materials for any commercial purpose;</li>
                    <li>Attempt to decompile or reverse engineer any software contained in the Services;</li>
                    <li>Remove any copyright or other proprietary notations from the materials;</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
                  </ul>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                  <p className="text-white/70">
                    The materials on ORCHESITY's Services are provided on an 'as is' basis. ORCHESITY makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
                  <p className="text-white/70">
                    In no event shall ORCHESITY or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Services, even if ORCHESITY or an authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">5. Accuracy of Materials</h2>
                  <p className="text-white/70">
                    The materials appearing on ORCHESITY's Services could include technical, typographical, or photographic errors. ORCHESITY does not warrant that any of the materials on its Services are accurate, complete, or current. ORCHESITY may make changes to the materials contained on its Services at any time without notice.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">6. Links</h2>
                  <p className="text-white/70">
                    ORCHESITY has not reviewed all of the sites linked to its Services and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ORCHESITY of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
                  <p className="text-white/70">
                    ORCHESITY may revise these terms of service for its Services at any time without notice. By using the Services, you are agreeing to be bound by the then current version of these terms of service.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
                  <p className="text-white/70">
                    These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </section>
                
                <section className="glass-card p-6 rounded-lg">
                  <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
                  <p className="text-white/70">
                    If you have any questions about these Terms of Service, please contact us at legal@orchesity.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
