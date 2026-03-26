import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToInput = () => {
    document.getElementById("career-input")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-sm font-medium text-muted-foreground font-body border border-border/40">
            <Sparkles className="h-4 w-4 text-accent" />
            AI-Powered Career Planning
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display leading-tight">
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
              className="bg-gradient-brand text-primary-foreground font-display font-semibold rounded-xl h-13 px-8 text-base hover:opacity-90 transition-all hover:scale-105"
            >
              Get Started
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground/70 font-body pt-2">
            Trusted by students for AI-powered career guidance
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
