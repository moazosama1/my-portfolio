import { ArrowDown, Github, Linkedin, Code2, Smartphone, Terminal, Database, Sparkles, Eye, Download, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24 pb-16">
      {/* Background Aurora Glow Effects */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Tech Icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[18%] left-[8%] text-primary/20">
          <Smartphone size={52} />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[22%] left-[12%] text-accent/20">
          <Code2 size={40} />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[15%] right-[8%] text-primary/20">
          <Database size={44} />
        </motion.div>
        <motion.div animate={{ y: [0, 35, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[18%] right-[10%] text-accent/20">
          <Terminal size={44} />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">

          {/* Left Column: Text & CTA Content (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">

            {/* Availability & Cohort Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium mb-5 backdrop-blur-md shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Enterprise & Freelance Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-heading mb-3 tracking-tight leading-tight"
            >
              <span className="text-foreground block mb-1">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">Moaz Osama</span>
            </motion.h1>

            {/* Role Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="h-px w-8 bg-primary/50 hidden lg:block" />
              <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-heading tracking-tight flex items-center gap-2">
                Senior <span className="text-foreground font-semibold">Flutter & Mobile</span> Architect <Sparkles className="text-primary hidden sm:block w-4 h-4" />
              </h2>
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-mono max-w-xl mb-6 border-l-2 border-primary/40 pl-3.5 ml-0 text-left"
            >
              CS Engineering graduate from the Elite 10x Cohort at HTI with 2+ years architecting scalable, cross-platform apps using Clean Architecture, MVI, and BLoC/Cubit.
            </motion.p>

            {/* Key Tech Badges Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 mb-8"
            >
              {["Flutter", "Clean Architecture", "MVI", "BLoC/Cubit", "Supabase", "Firebase AI"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-8"
            >
              <a
                href="https://drive.google.com/file/d/1eT6FPISKWzxGHsdMh5utTe8iE2ZB6OwB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(var(--primary),0.35)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transform hover:-translate-y-0.5 overflow-hidden flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>Show CV</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-2.5 rounded-xl border border-border/70 bg-card/60 backdrop-blur-md text-foreground text-xs sm:text-sm font-semibold hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-xs"
              >
                <Layers className="w-4 h-4 text-primary" />
                <span>View Projects</span>
              </a>
            </motion.div>

            {/* Social Links & Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-border/40 w-full"
            >
              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com/moazosama1", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/moaz-osama-7a3013265", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2.5 rounded-xl bg-card/50 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              <div className="h-4 w-px bg-border/60 hidden sm:block" />

              {/* Quick Stat Pill */}
              <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1 font-bold text-foreground">
                  <ShieldCheck size={14} className="text-primary" /> 2+ Yrs Exp
                </span>
                <span>•</span>
                <span className="font-bold text-foreground">7+ Projects</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Avatar with Floating Badges (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-4 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative group w-56 h-56 sm:w-64 sm:h-64 lg:w-[340px] lg:h-[340px]"
            >
              {/* Outer Decorative Spinning Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/25 scale-105 animate-[spin_22s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-accent/30 scale-[1.18] animate-[spin_28s_linear_infinite_reverse] border-dashed" />

              {/* Glowing Background Orb */}
              <div className="absolute inset-4 bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700 pointer-events-none" />

              {/* Core Avatar Frame */}
              <div className="absolute inset-6 rounded-full p-1.5 bg-gradient-to-br from-primary via-cyan-300 to-accent animate-[spin_8s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-background overflow-hidden border-[5px] border-background animate-[spin_8s_linear_infinite_reverse]">
                  <img
                    src={profileImg}
                    alt="Moaz Osama"
                    className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[8%] -right-[5%] bg-card/90 backdrop-blur-xl border border-border/60 px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2 animate-float"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-foreground">2+ YRS EXP</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-[18%] -left-[5%] bg-card/90 backdrop-blur-xl border border-border/60 px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-mono font-bold text-foreground">Clean Architecture</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-[2%] right-[15%] bg-card/90 backdrop-blur-xl border border-border/60 px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-mono font-bold text-foreground">MVI / Cubit</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden sm:block"
      >
        <a href="#about" className="flex flex-col items-center group cursor-pointer">
          <div className="animate-bounce">
            <div className="p-2 border border-primary/20 text-primary/70 backdrop-blur-md rounded-full group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-xs">
              <ArrowDown size={18} />
            </div>
          </div>
        </a>
      </motion.div>

    </section>
  );
};

export default HeroSection;
