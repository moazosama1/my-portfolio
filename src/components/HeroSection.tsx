import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.05s" }}>
          <div className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full border-4 border-primary/50 shadow-glow overflow-hidden bg-muted">
            <img src="https://api.dicebear.com/9.x/initials/svg?seed=JD&backgroundColor=0d9488" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        <p className="text-primary font-mono text-sm mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <span className="text-foreground">John</span>{" "}
          <span className="text-gradient">Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-heading mb-8 animate-fade-up opacity-0" style={{ animationDelay: "0.35s" }}>
          Flutter Developer & Mobile App Architect
        </p>
        <p className="max-w-xl mx-auto text-muted-foreground mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          Building beautiful, performant cross-platform mobile applications with Flutter & Dart.
        </p>

        <div className="flex items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: "0.65s" }}>
          <a href="#contact" className="px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            Get In Touch
          </a>
          <a href="#projects" className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary/50 transition-colors">
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300" aria-label={label}>
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float">
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
