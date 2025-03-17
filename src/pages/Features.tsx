
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
