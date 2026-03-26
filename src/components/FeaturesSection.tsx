import { motion } from "framer-motion";
import { Lightbulb, Compass, Mail } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "AI Career Suggestions",
    description: "Get personalized job role recommendations based on your unique skills and interests.",
  },
  {
    icon: Compass,
    title: "Smart Career Guidance",
    description: "Receive actionable advice on how to grow in your chosen field and stand out to employers.",
  },
  {
    icon: Mail,
    title: "Professional Email Generator",
    description: "Instantly generate polished application emails tailored to your skills and target role.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-20 px-4">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3">
          Powerful Features
        </h2>
        <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
          Everything you need to plan your career and land your dream job.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="card-glass rounded-2xl p-7 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{f.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
