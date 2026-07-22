import { ArrowDown, Github, Linkedin, Code2, Smartphone, Terminal, Database, Sparkles, Eye, Layers, ShieldCheck, Flame, Cpu, Star } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.JPEG";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20 pb-12 sm:pt-24 sm:pb-16">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-[12%] left-[12%] w-[550px] h-[550px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[650px] h-[650px] bg-accent/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[600px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Tech Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <motion.div
          animate={{ y: [0, -22, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[7%] text-primary/20 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          <Smartphone size={56} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 28, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[22%] left-[10%] text-accent/20 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        >
          <Code2 size={44} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] right-[7%] text-cyan-400/20 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
        >
          <Database size={48} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 32, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[18%] right-[9%] text-primary/20 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
        >
          <Terminal size={48} />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left Column: Text & CTA Content (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-medium mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(var(--primary),0.15)]"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>Available for Enterprise & Freelance Projects</span>
            </motion.div>

            {/* Main Title Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold font-heading mb-3 tracking-tight leading-[1.1]"
            >
              <span className="text-foreground block mb-1">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent drop-shadow-[0_0_35px_rgba(16,185,129,0.25)]">
                Moaz Osama
              </span>
            </motion.h1>

            {/* Role Subheading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2.5 mb-4"
            >
              <div className="h-px w-8 bg-primary/50 hidden lg:block" />
              <h2 className="text-base sm:text-lg md:text-xl text-muted-foreground font-heading tracking-tight flex items-center justify-center lg:justify-start gap-2">
                <span className="text-foreground font-bold">Junior Flutter & Mobile Software Engineer</span>
                <Sparkles className="text-primary hidden sm:inline-block w-4 h-4 animate-pulse" />
              </h2>
            </motion.div>

            {/* Bio Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed font-mono max-w-xl mb-6 border-l-2 border-primary/50 pl-3.5 ml-0 text-left"
            >
              Computer Science Engineering graduate from the <span className="text-foreground font-bold">Elite 10x Cohort at HTI</span> with 2+ years experience building production apps using <span className="text-primary font-semibold">Clean Architecture</span>, <span className="text-cyan-400 font-semibold">MVI / Cubit</span>, and <span className="text-accent font-semibold">Supabase & Firebase</span>.
            </motion.p>

            {/* Tech Pill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start gap-1.5 mb-7"
            >
              {["Flutter", "Clean Architecture", "MVI", "BLoC/Cubit", "Supabase", "Firebase AI", "Google Play"].map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/70 border border-border/60 text-muted-foreground font-medium hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-7"
            >
              <a
                href="https://drive.google.com/file/d/1eT6FPISKWzxGHsdMh5utTe8iE2ZB6OwB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(var(--primary),0.35)] hover:shadow-[0_0_30px_rgba(var(--primary),0.55)] transform hover:-translate-y-0.5 overflow-hidden flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Show CV</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-2.5 rounded-xl border border-border/70 bg-card/70 backdrop-blur-md text-foreground text-xs sm:text-sm font-semibold hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-xs"
              >
                <Layers className="w-4 h-4 text-primary" />
                <span>View Projects</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-secondary/80 border border-border/60 text-muted-foreground hover:text-foreground text-xs sm:text-sm font-mono transition-all hover:border-border flex items-center justify-center gap-1.5"
              >
                <Flame className="w-4 h-4 text-accent" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Social Links & Quick Metrics */}
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
                    className="group p-2.5 rounded-xl bg-card/60 backdrop-blur-md border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-xs hover:-translate-y-0.5"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>

              <div className="h-4 w-px bg-border/60 hidden sm:block" />

              {/* Quick Stat Pill */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="flex items-center gap-1 font-bold text-foreground">
                  <ShieldCheck size={14} className="text-primary" /> 2+ Yrs Exp
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-bold text-foreground">
                  <Star size={13} className="text-amber-400" /> 7+ Apps
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-bold text-foreground">
                  <Cpu size={13} className="text-cyan-400" /> Clean MVI
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Avatar with Interactive Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-4 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative group w-60 h-60 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px]"
            >
              {/* Outer Glowing Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/30 scale-105 animate-[spin_24s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-cyan-400/30 scale-[1.18] animate-[spin_30s_linear_infinite_reverse] border-dashed" />

              {/* Glowing Background Glow Aura */}
              <div className="absolute inset-3 bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full blur-2xl opacity-45 group-hover:opacity-70 transition duration-700 pointer-events-none" />

              {/* Core Avatar Frame */}
              <div className="absolute inset-5 rounded-full p-1.5 bg-gradient-to-br from-primary via-cyan-300 to-accent animate-[spin_10s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-background overflow-hidden border-[5px] border-background animate-[spin_10s_linear_infinite_reverse]">
                  <img
                    src={profileImg}
                    alt="Moaz Osama"
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge 1: 2+ Yrs Exp */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-[6%] -right-[4%] bg-card/90 backdrop-blur-xl border border-border/70 px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono font-bold text-foreground">2+ Yrs Experience</span>
              </motion.div>

              {/* Floating Badge 2: Clean Architecture */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-[20%] -left-[6%] bg-card/90 backdrop-blur-xl border border-border/70 px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-mono font-bold text-foreground">Clean Architecture</span>
              </motion.div>

              {/* Floating Badge 3: MVI / Cubit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -bottom-[2%] right-[10%] bg-card/90 backdrop-blur-xl border border-border/70 px-3.5 py-1.5 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Smartphone className="w-4 h-4 text-accent" />
                <span className="text-[11px] font-mono font-bold text-foreground">MVI & Cubit</span>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 hidden sm:block"
      >
        <a href="#about" className="flex flex-col items-center group cursor-pointer">
          <div className="animate-bounce">
            <div className="p-2 border border-primary/25 text-primary/80 backdrop-blur-md rounded-full group-hover:border-primary group-hover:text-primary transition-all duration-300 shadow-xs">
              <ArrowDown size={16} />
            </div>
          </div>
        </a>
      </motion.div>

    </section>
  );
};

export default HeroSection;
