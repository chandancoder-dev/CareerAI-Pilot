import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 px-4">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card-glass rounded-2xl p-8 sm:p-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-5">
          About <span className="text-gradient-brand">CareerPilot AI</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          CareerPilot AI is an intelligent career planning tool designed for students and job seekers. 
          By combining your skills with your career interests, our AI engine generates tailored job recommendations, 
          expert guidance, and ready-to-send professional emails — helping you take the next step in your career with confidence.
        </p>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
