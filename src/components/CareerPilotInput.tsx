import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CAREER_OPTIONS = [
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
] as const;

interface CareerPilotInputProps {
  onGenerate: (skills: string, interest: string) => void;
  isLoading: boolean;
}

const CareerPilotInput = ({ onGenerate, isLoading }: CareerPilotInputProps) => {
  const [skills, setSkills] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = () => {
    if (skills.trim() && interest) {
      onGenerate(skills.trim(), interest);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card-glass rounded-2xl p-8 max-w-2xl mx-auto shadow-xl shadow-primary/5 border border-border/50"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium font-display text-foreground">
            Enter your skills
          </label>
          <Input
            placeholder="e.g. React, Python, Machine Learning, SQL..."
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="h-12 rounded-xl bg-secondary/50 border-border/60 font-body text-foreground placeholder:text-muted-foreground focus-visible:ring-primary/40"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium font-display text-foreground">
            Select your career interest
          </label>
          <Select value={interest} onValueChange={setInterest}>
            <SelectTrigger className="h-12 rounded-xl bg-secondary/50 border-border/60 font-body text-foreground">
              <SelectValue placeholder="Choose a career path..." />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              {CAREER_OPTIONS.map((option) => (
                <SelectItem key={option} value={option} className="font-body">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!skills.trim() || !interest || isLoading}
          className="w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-display font-semibold text-base hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" />
              Analyzing your profile...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Generate Career Plan
            </span>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default CareerPilotInput;
