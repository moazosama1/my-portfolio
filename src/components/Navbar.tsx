import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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

      // Section active detection
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

  return (
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
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden border-t border-border/30 mt-3 pt-3 pb-2 px-2"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <span>{link.label}</span>
                    <Sparkles size={14} className="opacity-0 group-hover:opacity-100 text-primary" />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
