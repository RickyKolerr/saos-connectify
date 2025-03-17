
import Navbar from "@/components/Navbar";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";

const Benefits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Benefits;
