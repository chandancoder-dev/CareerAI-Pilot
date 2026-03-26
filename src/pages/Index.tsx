import { useState } from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import CareerPilotInput from "@/components/CareerPilotInput";
import CareerPilotResults from "@/components/CareerPilotResults";
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
      <div className="container max-w-4xl py-16 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center">
              <Compass className="h-6 w-6 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold font-display text-gradient-brand">
              CareerPilot AI
            </h1>
          </div>
          <p className="text-muted-foreground font-body text-lg">
            Navigate Your Future with AI
          </p>
        </motion.div>

        {/* Input */}
        <CareerPilotInput onGenerate={handleGenerate} isLoading={isLoading} />

        {/* Results */}
        {results && <CareerPilotResults results={results} />}
      </div>
    </div>
  );
};

export default Index;
