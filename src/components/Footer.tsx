import { Compass } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-10 px-4">
    <div className="container max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
          <Compass className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-foreground">CareerPilot AI</span>
      </div>
      <p className="text-sm text-muted-foreground font-body">
        Navigate Your Future with AI &copy; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
