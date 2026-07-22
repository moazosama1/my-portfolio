import { Smartphone, Cpu, Zap, GraduationCap, Award, Sparkles, CheckCircle2, Layers, ShieldCheck, Terminal, Code2, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Smartphone,
    label: "Cross-Platform Mobile",
    desc: "Single Dart codebase delivering native-performance iOS & Android applications.",
    color: "from-emerald-500/15 via-teal-500/5 to-transparent",
    accent: "border-emerald-500/40 text-emerald-400",
    badge: "iOS & Android",
    points: ["Single Codebase", "Native Performance"],
  },
  {
    icon: Layers,
    label: "Clean Architecture & MVI",
    desc: "Testable, decoupled enterprise codebase using Cubit state management.",
    color: "from-purple-500/15 via-indigo-500/5 to-transparent",
    accent: "border-purple-500/40 text-purple-400",
    badge: "Enterprise",
    points: ["Decoupled Data Layer", "BLoC / Cubit"],
  },
  {
    icon: Cpu,
    label: "AI & Real-Time Sync",
    desc: "Seamless Supabase Realtime, Firebase & LLM AI Agent integrations.",
    color: "from-cyan-500/15 via-blue-500/5 to-transparent",
    accent: "border-cyan-500/40 text-cyan-400",
    badge: "Realtime",
    points: ["Supabase Realtime", "AI Workflows"],
  },
  {
    icon: Zap,
    label: "High FPS Performance",
    desc: "Smooth 60/120 FPS UI animations with optimized memory handling.",
    color: "from-amber-500/15 via-orange-500/5 to-transparent",
    accent: "border-amber-500/40 text-amber-400",
    badge: "120 FPS",
    points: ["Zero Frame Drops", "Optimized Memory"],
  },
];

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10x", label: "HTI CS Cohort" },
  { number: "100%", label: "Clean Code" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-14 sm:py-16 relative overflow-hidden bg-background">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono font-semibold tracking-wider uppercase mb-2.5 shadow-xs">
            <Sparkles size={12} className="animate-pulse text-primary" />
            <span>Get To Know Me</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-2.5 text-foreground tracking-tight leading-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">Mobile Systems</span> with Precision
          </h2>

          <p className="text-muted-foreground text-xs sm:text-sm font-mono max-w-xl mx-auto">
            CS Engineering Graduate & Junior Flutter Developer crafting resilient, enterprise-grade mobile applications.
          </p>
        </motion.div>

        {/* Bento Box Grid (Main Bio + Live IDE Code Box) */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch mb-6">
          
          {/* Main Bio Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl bg-card/70 backdrop-blur-xl p-6 sm:p-8 border-t-2 border-t-primary/70 border-x border-b border-border/70 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-primary/50 transition-all duration-300"
          >
            {/* Top Right Ambient Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-primary/15 via-cyan-500/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />

            <div>
              {/* Header profile row */}
              <div className="flex items-center gap-3.5 mb-5 relative z-10">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 via-cyan-500/10 to-accent/20 border border-primary/30 text-primary shadow-sm group-hover:scale-105 transition-transform shrink-0">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading">Moaz Osama</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider shadow-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      VERIFIED ENGINEER
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">CS Engineering Graduate • Elite 10x Cohort at HTI</p>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 relative z-10">
                <p className="border-l-2 border-primary pl-3 py-0.5 text-foreground/90 font-medium">
                  I'm a <span className="text-primary font-semibold">Junior Flutter Developer</span> with <span className="text-foreground font-mono font-bold">2+ years</span> architecting enterprise-grade, cross-platform applications using Clean Architecture, MVI, and BLoC/Cubit.
                </p>
                <p>
                  As a CS Engineering graduate from the Elite 10x Cohort at HTI, I have a proven freelance track record delivering enterprise-grade solutions including real-time tracking systems and published apps on Google Play.
                </p>
                <p>
                  Specialized in integrating AI agents into mobile workflows and building robust backend infrastructure with Firebase, Supabase, and RESTful APIs.
                </p>
              </div>
            </div>

            {/* Quick Tech Tag Pills */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40 relative z-10">
              {["Flutter", "Dart", "Clean Arch", "MVI / Cubit", "Firebase", "Supabase", "REST APIs", "AI Agents"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-lg bg-secondary/60 border border-border/50 text-[11px] font-mono font-medium text-muted-foreground hover:border-primary/40 hover:text-foreground transition-all duration-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Code Snippet Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl bg-slate-950/90 backdrop-blur-xl border-t-2 border-t-emerald-500/70 border-x border-b border-slate-800/80 p-5 sm:p-6 shadow-2xl flex flex-col justify-between font-mono relative group hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* macOS Window Header */}
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <Terminal size={12} className="text-emerald-400" /> developer_profile.dart
              </span>
            </div>

            {/* Code Snippet Container */}
            <div className="text-[11px] sm:text-xs text-slate-300 leading-relaxed space-y-1 overflow-x-auto py-1 font-mono">
              <div><span className="text-purple-400">class</span> <span className="text-emerald-400">FlutterArchitect</span> &#123;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String name = <span className="text-amber-300">'Moaz Osama'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String role = <span className="text-amber-300">'Junior Flutter Developer'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String degree = <span className="text-amber-300">'CS Engineer (HTI 10x)'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> List&lt;String&gt; stack = [</div>
              <div className="pl-8 text-cyan-300">'Flutter', 'Clean Arch', 'MVI', 'Supabase'</div>
              <div className="pl-4">];</div>
              <div className="pl-4"><span className="text-purple-400">final</span> bool available = <span className="text-emerald-400">true</span>;</div>
              <div className="pl-4 py-0.5 text-slate-500">// Scalable, clean & production ready</div>
              <div className="pl-4"><span className="text-purple-400">void</span> <span className="text-cyan-400">buildApp</span>() &#123;</div>
              <div className="pl-8 text-emerald-400">print('Scalable. Clean. Reliable.');<span className="w-1.5 h-3.5 bg-emerald-400 animate-pulse inline-block align-middle ml-1" /></div>
              <div className="pl-4">&#125;</div>
              <div>&#125;</div>
            </div>

            {/* Status indicator bar */}
            <div className="my-2.5 py-1 px-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Status: 200 OK
              </span>
              <span>Clean Code Verified</span>
            </div>

            {/* Stats Pills Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-center">
              {stats.map(({ number, label }) => (
                <div key={label} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
                  <div className="text-sm sm:text-base font-bold text-emerald-400 font-heading">{number}</div>
                  <div className="text-[9px] text-slate-400 leading-tight mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
          {highlights.map(({ icon: Icon, label, desc, color, accent, badge, points }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * idx }}
              className="rounded-2xl bg-card/60 backdrop-blur-xl p-5 border-t-2 border-t-primary/50 border-x border-b border-border/60 hover:border-t-primary hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between shadow-md"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-xs">
                    <Icon size={18} />
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary/80 border ${accent}`}>
                    {badge}
                  </span>
                </div>

                <h3 className="font-bold text-foreground mb-1 text-sm sm:text-base font-heading group-hover:text-primary transition-colors">
                  {label}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed font-mono mb-3">{desc}</p>

                {/* Sub Points as horizontal wrap pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  {points.map((pt) => (
                    <span
                      key={pt}
                      className="px-2 py-0.5 text-[10px] rounded-lg bg-secondary/60 border border-border/50 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium flex items-center gap-1 shadow-xs cursor-default"
                    >
                      <Check size={10} className="text-primary shrink-0" />
                      <span>{pt}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
