import { ArrowDown, Github, Linkedin, Mail, Code2, Smartphone, Terminal, Database, Sparkles, Eye } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Aurora Background Effects - Adjusted for split layout */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-float" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] mix-blend-screen" />

      {/* Modern Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 hidden lg:block">
        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] text-primary/20">
          <Smartphone size={56} />
        </motion.div>
        <motion.div animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] left-[15%] text-blue-500/20">
          <Code2 size={40} />
        </motion.div>
        <motion.div animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[15%] right-[10%] text-purple-500/20">
          <Database size={48} />
        </motion.div>
        <motion.div animate={{ y: [0, 35, 0], rotate: [0, -10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[15%] right-[12%] text-primary/20">
          <Terminal size={48} />
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-24 pb-20 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(var(--primary),0.1)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading mb-4 tracking-tight drop-shadow-sm leading-tight"
            >
              <span className="text-foreground block mb-2">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-500">Moaz Osama</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-primary/50 hidden lg:block" />
              <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-heading tracking-tight flex items-center gap-2">
                Junior <span className="text-foreground font-semibold">Flutter</span> Developer <Sparkles className="text-primary hidden sm:block w-5 h-5" />
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground/90 mb-10 leading-relaxed font-mono max-w-xl border-l-[3px] border-primary/50 pl-4 ml-0 lg:ml-2"
            >
              Architecting scalable, clean, and high-performance cross-platform applications for iOS and Android. Turning complex problems into elegant interfaces.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a href="https://drive.google.com/file/d/13RLAebV9yxgLiWUbEDmoX3UIFpMgtJ5Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-bold transition-all shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_40px_rgba(var(--primary),0.6)] transform hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" /> Show CV
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </a>
              <a href="#projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-primary/20 bg-card/40 backdrop-blur-md text-foreground hover:bg-primary/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm group">
                View My Work
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
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
                  className="group p-3.5 rounded-full bg-card/30 backdrop-blur-md border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:-translate-y-1.5"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual/Avatar */}
          <div className="flex justify-center items-center order-1 lg:order-2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border border-blue-500/20 scale-[1.2] animate-[spin_25s_linear_infinite_reverse] border-dashed" />

              {/* Core Avatar Container */}
              <div className="absolute inset-4 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-700"></div>

              <div className="absolute inset-8 rounded-full p-1.5 bg-gradient-to-br from-primary via-blue-400 to-purple-500 animate-[spin_6s_linear_infinite]">
                <div className="w-full h-full rounded-full bg-background overflow-hidden border-[6px] border-background animate-[spin_6s_linear_infinite_reverse]">
                  <img
                    src={profileImg}
                    alt="Moaz Osama"
                    className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating aesthetic badges attached to avatar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[10%] -right-[5%] lg:-right-[10%] bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 animate-float"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-foreground">1.5+ YRS EXP</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-[20%] -left-[5%] lg:-left-[10%] bg-card/80 backdrop-blur-md border border-border/50 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(var(--primary),0.2)] flex items-center gap-2 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-xs font-mono font-bold text-foreground">Clean Arch</span>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <a href="#about" className="flex flex-col items-center group cursor-pointer">
          <div className="animate-bounce">
            <div className="p-2 border border-primary/20 text-primary/70 backdrop-blur-md transform group-hover:translate-y-2 group-hover:border-primary/60 group-hover:text-primary transition-all duration-300 relative overflow-hidden rounded-full">
              <div className="relative z-10 flex items-center justify-center">
                <ArrowDown size={20} />
              </div>
            </div>
          </div>
        </a>
      </motion.div>

    </section>
  );
};

export default HeroSection;
