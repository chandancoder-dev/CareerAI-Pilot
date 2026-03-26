import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="card-glass rounded-2xl p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm font-medium font-display text-foreground">Name</label>
              <Input
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-11 rounded-xl bg-secondary/50 border-border/60 font-body"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium font-display text-foreground">Email</label>
              <Input
                required
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-11 rounded-xl bg-secondary/50 border-border/60 font-body"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium font-display text-foreground">Message</label>
            <Textarea
              required
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="rounded-xl bg-secondary/50 border-border/60 font-body resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-gradient-brand text-primary-foreground font-display font-semibold text-base hover:opacity-90 transition-opacity"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
