import { Link } from "react-router-dom";
import { Instagram, Mail, Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/60 bg-peach-light pt-10">
    <div className="container py-16 grid gap-10 md:grid-cols-3 items-start">
      <div>
        <div className="flex items-center gap-1 group mb-3">
          <span className="font-serif-display text-3xl text-navy">SAHANA</span>
          <Sparkles className="text-pink w-5 h-5 group-hover:rotate-12 transition-transform" />
        </div>
        <p className="mt-3 text-sm text-muted-foreground max-w-xs">
          A fashion designer crafting vibrant, modern designs that celebrate individuality and emotions.
        </p>
      </div>
      <div className="md:justify-self-center">
        <p className="text-[0.75rem] font-bold tracking-widest uppercase text-navy mb-4">Index</p>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li><Link to="/work" className="hover:text-pink transition-colors">Previous Work</Link></li>
          <li><Link to="/about" className="hover:text-pink transition-colors">About Me</Link></li>
          <li><Link to="/contact" className="hover:text-pink transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div className="md:justify-self-end">
        <p className="text-[0.75rem] font-bold tracking-widest uppercase text-navy mb-4">Contact</p>
        <a href="mailto:hello@sahana.studio" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pink transition-colors">
          <Mail size={16} /> hello@sahana.studio
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"
           className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-pink transition-colors">
          <Instagram size={16} /> @sahana.portfolio
        </a>
      </div>
    </div>
    <div className="border-t border-border/50">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-medium">
        <p>© {new Date().getFullYear()} Sahana Portfolio. All rights reserved.</p>
        <p className="tracking-widest uppercase">Designed with love</p>
      </div>
    </div>
  </footer>
);

export default Footer;
