import { motion } from "framer-motion";
import { Briefcase, Compass, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CareerResults {
  roles: string[];
  guidance: string;
  email: string;
}

interface CareerPilotResultsProps {
  results: CareerResults;
}

const SectionCard = ({
  icon: Icon,
  title,
  children,
  delay,
}: {
  icon: typeof Briefcase;
  title: string;
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="card-glass rounded-2xl p-6 space-y-4"
  >
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>
    </div>
    {children}
  </motion.div>
);

const CareerPilotResults = ({ results }: CareerPilotResultsProps) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(results.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto space-y-5 mt-8"
    >
      <SectionCard icon={Briefcase} title="Recommended Job Roles" delay={0.1}>
        <div className="space-y-2">
          {results.roles.map((role, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60"
            >
              <span className="h-7 w-7 rounded-lg bg-gradient-brand flex items-center justify-center text-sm font-bold text-primary-foreground font-display">
                {i + 1}
              </span>
              <span className="font-body font-medium text-foreground">{role}</span>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard icon={Compass} title="Career Guidance" delay={0.25}>
        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
          {results.guidance}
        </p>
      </SectionCard>

      <SectionCard icon={Mail} title="Professional Email" delay={0.4}>
        <div className="relative">
          <div className="p-4 rounded-xl bg-secondary/60 text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">
            {results.email}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={copyEmail}
            className="absolute top-3 right-3 rounded-lg border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            {copied ? (
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5" /> Copied
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Copy className="h-3.5 w-3.5" /> Copy
              </span>
            )}
          </Button>
        </div>
      </SectionCard>
    </motion.div>
  );
};

export default CareerPilotResults;
