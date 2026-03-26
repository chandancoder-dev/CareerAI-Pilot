import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToInput = () => {
    document.getElementById("career-input")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm font-medium text-muted-foreground font-body border border-border/40">
            <Sparkles className="h-4 w-4 text-accent" />
            AI-Powered Career Planning
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-tight">
            Navigate Your Future{" "}
            <span className="text-gradient-brand">with AI</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Discover personalized career paths, get expert guidance, and generate professional application content — all powered by artificial intelligence.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={scrollToInput}
              size="lg"
              className="bg-gradient-brand text-primary-foreground font-display font-semibold rounded-xl h-13 px-8 text-base hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
