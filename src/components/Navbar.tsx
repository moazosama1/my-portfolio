import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
  User,
  Layers,
  FolderKanban,
  Briefcase,
  Mail,
  ChevronRight,
  Github,
  Linkedin,
  ArrowUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about", icon: User, desc: "Who I am" },
  { label: "Skills", href: "#skills", icon: Layers, desc: "Tech stack" },
  { label: "Projects", href: "#projects", icon: FolderKanban, desc: "Featured work" },
  { label: "Experience", href: "#experience", icon: Briefcase, desc: "Career path" },
  { label: "Contact", href: "#contact", icon: Mail, desc: "Get in touch" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll + Escape to close when mobile menu open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto w-full max-w-5xl rounded-full transition-all duration-500 border ${
            scrolled
              ? "bg-background/80 backdrop-blur-2xl border-primary/30 shadow-[0_10px_35px_rgba(0,0,0,0.3)] py-2.5 px-5 sm:px-6"
              : "bg-card/40 backdrop-blur-xl border-border/40 shadow-lg py-3 px-5 sm:px-7"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex items-center gap-2 text-base sm:text-lg font-bold font-heading tracking-wide transition-all"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
                <Terminal size={16} />
              </div>
              <span className="text-foreground group-hover:text-primary transition-colors">
                Moaz<span className="text-primary font-mono">.dev</span>
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1 bg-secondary/40 p-1.5 rounded-full border border-border/30">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? "text-primary-foreground font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full shadow-md shadow-primary/25"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Right Actions (Theme Switcher & Mobile Menu) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="relative p-2 rounded-full bg-secondary/60 hover:bg-primary/20 border border-border/40 text-foreground transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {dark ? (
                  <Sun size={18} className="text-amber-400" />
                ) : (
                  <Moon size={18} className="text-primary" />
                )}
              </button>

              <button
                className="p-2 rounded-full bg-secondary/60 border border-border/40 text-foreground md:hidden hover:bg-primary/20 transition-all"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Navigation"
                aria-expanded={open}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {open ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="block"
                    >
                      <X size={20} />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="block"
                    >
                      <Menu size={20} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ===== MOBILE MENU (backdrop + floating sheet) ===== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-4 right-4 top-[76px] sm:top-[88px] z-50 md:hidden max-h-[calc(100vh-96px)] overflow-hidden rounded-3xl border border-border/60 bg-card/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Ambient corner glows */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col max-h-[calc(100vh-96px)] overflow-y-auto">
                {/* Header strip */}
                <div className="px-5 py-4 border-b border-border/50 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-primary/90 mb-0.5">
                        Navigation
                      </p>
                      <h3 className="text-base font-bold font-heading text-foreground">
                        Jump to a section
                      </h3>
                    </div>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Links */}
                <nav className="p-3 space-y-1.5">
                  {navLinks.map((link, i) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 + i * 0.04 }}
                        className={`group flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-primary/15 via-primary/10 to-transparent border-primary/40 shadow-[0_4px_20px_rgba(var(--primary),0.15)]"
                            : "bg-secondary/40 border-border/50 hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-xl border shrink-0 transition-all duration-300 ${
                            isActive
                              ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                              : "bg-primary/10 border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary group-hover:scale-105"
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-bold font-heading transition-colors ${
                                isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                              }`}
                            >
                              {link.label}
                            </span>
                            {isActive && (
                              <span className="flex items-center gap-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary">
                                <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                HERE
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-mono text-muted-foreground truncate">
                            {link.desc}
                          </p>
                        </div>
                        <ChevronRight
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            isActive
                              ? "text-primary translate-x-0.5"
                              : "text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5"
                          }`}
                        />
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Footer: socials + CTA */}
                <div className="mt-1 px-3 pb-4 pt-3 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/moazosama1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/60 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/moaz-osama-7a3013265"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/60 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all"
                    >
                      <Linkedin size={18} />
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold shadow-[0_6px_20px_rgba(var(--primary),0.35)] hover:-translate-y-0.5 transition-all"
                    >
                      Let's Talk
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
