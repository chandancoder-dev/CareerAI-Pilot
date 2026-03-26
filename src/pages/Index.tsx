import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CareerPilotInput from "@/components/CareerPilotInput";
import CareerPilotResults from "@/components/CareerPilotResults";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { generateCareerPlan } from "@/lib/generateCareerPlan";

interface CareerResults {
  roles: string[];
  guidance: string;
  email: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<CareerResults | null>(null);

  const handleGenerate = async (skills: string, interest: string) => {
    setIsLoading(true);
    setResults(null);
    try {
      const data = await generateCareerPlan(skills, interest);
      setResults(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      <Navbar />

      <HeroSection />

      {/* Career Input Section */}
      <section id="career-input" className="py-20 px-4">
        <div className="container max-w-4xl">
          <CareerPilotInput onGenerate={handleGenerate} isLoading={isLoading} />
          {results && <CareerPilotResults results={results} />}
        </div>
      </section>

      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
