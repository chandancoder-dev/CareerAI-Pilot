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
import { useToast } from "@/hooks/use-toast";

interface CareerResults {
  roles: string[];
  rolesFit: string;
  guidance: string;
  email: string;
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<CareerResults | null>(null);
  const { toast } = useToast();

  const handleGenerate = async (skills: string, interest: string) => {
    setIsLoading(true);
    setResults(null);
    try {
      const data = await generateCareerPlan(skills, interest);
      setResults(data);

      const generated_email = data.email;
      const webhookUrl = `https://chandann8n1.app.n8n.cloud/webhook/002a5549-7e59-47ab-b3e1-af794f38479c?email=${encodeURIComponent(generated_email)}`;

      const response = await fetch(webhookUrl);
      if (!response.ok) throw new Error("Webhook failed");

      toast({
        title: "✅ Your job application email has been sent successfully!",
      });
    } catch (err) {
      console.error(err);
      if (results || err instanceof Error) {
        toast({
          title: "❌ Failed to send email. Please try again.",
          variant: "destructive",
        });
      }
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
