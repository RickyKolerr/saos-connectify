
import Navbar from "@/components/Navbar";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
