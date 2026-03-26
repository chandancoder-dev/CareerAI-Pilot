import { useState } from "react";
import { Compass, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = ["Home", "About", "Features", "Contact"] as const;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 card-glass border-b border-border/40">
      <div className="container max-w-6xl flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-brand flex items-center justify-center">
            <Compass className="h-4.5 w-4.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-lg text-gradient-brand">CareerPilot AI</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              {link}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-display rounded-lg text-muted-foreground hover:text-foreground">
            Login
          </Button>
          <Button size="sm" className="bg-gradient-brand text-primary-foreground font-display rounded-lg hover:opacity-90 transition-opacity">
            Sign Up
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden card-glass border-t border-border/40 px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-body py-2"
            >
              {link}
            </button>
          ))}
          <div className="flex gap-3 pt-2">
            <Button variant="ghost" size="sm" className="font-display rounded-lg flex-1">Login</Button>
            <Button size="sm" className="bg-gradient-brand text-primary-foreground font-display rounded-lg flex-1 hover:opacity-90">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
