import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Cpu,
  Zap,
  GraduationCap,
  Sparkles,
  Layers,
  Terminal,
  Code2,
  Check,
  Rocket,
  Trophy,
  Flame,
  Signal,
  ChevronRight,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

const highlights = [
  {
    icon: Smartphone,
    label: "Cross-Platform Mobile",
    desc: "Single Dart codebase delivering native-performance iOS & Android applications.",
    accent: "border-emerald-500/40 text-emerald-400",
    iconGlow: "shadow-[0_0_25px_rgba(16,185,129,0.35)]",
    badge: "iOS & Android",
    level: 92,
    points: ["Single Codebase", "Native Performance"],
  },
  {
    icon: Layers,
    label: "Clean Architecture & MVI",
    desc: "Testable, decoupled enterprise codebase using Cubit state management.",
    accent: "border-purple-500/40 text-purple-400",
    iconGlow: "shadow-[0_0_25px_rgba(168,85,247,0.35)]",
    badge: "Enterprise",
    level: 88,
    points: ["Decoupled Data Layer", "BLoC / Cubit"],
  },
  {
    icon: Cpu,
    label: "AI & Real-Time Sync",
    desc: "Seamless Supabase Realtime, Firebase & LLM AI Agent integrations.",
    accent: "border-cyan-500/40 text-cyan-400",
    iconGlow: "shadow-[0_0_25px_rgba(34,211,238,0.35)]",
    badge: "Realtime",
    level: 85,
    points: ["Supabase Realtime", "AI Workflows"],
  },
  {
    icon: Zap,
    label: "High FPS Performance",
    desc: "Smooth 60/120 FPS UI animations with optimized memory handling.",
    accent: "border-amber-500/40 text-amber-400",
    iconGlow: "shadow-[0_0_25px_rgba(245,158,11,0.35)]",
    badge: "120 FPS",
    level: 90,
    points: ["Zero Frame Drops", "Optimized Memory"],
  },
];

const stats = [
  { icon: Rocket, number: "2+", label: "Years Experience", accent: "text-primary" },
  { icon: Trophy, number: "10x", label: "HTI CS Cohort", accent: "text-cyan-400" },
  { icon: Flame, number: "7+", label: "Production Apps", accent: "text-accent" },
];

const techMarquee = [
  "Flutter",
  "Dart",
  "Clean Architecture",
  "MVI",
  "BLoC / Cubit",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Gemini AI",
  "Google Maps",
  "ObjectBox",
  "Hive",
  "REST APIs",
  "GitHub Actions",
];

const AnimatedCounter = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const duration = 900;
    const startedAt = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      const formatted = Number.isInteger(target) ? Math.round(current).toString() : current.toFixed(1);
      setDisplay(`${formatted}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 relative overflow-hidden bg-background">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid + radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={13} className="animate-pulse" />
            <span>Get To Know Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground tracking-tight leading-[1.1]">
            Architecting <span className="text-gradient">Mobile Systems</span>
            <br className="hidden sm:inline" />
            <span className="text-foreground/80"> with Precision</span>
          </h2>

          {/* Decorative gradient underline */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <p className="text-muted-foreground text-sm sm:text-base font-mono max-w-xl mx-auto">
            CS Engineering graduate & Junior Flutter developer crafting resilient, enterprise-grade mobile applications.
          </p>
        </motion.div>

        {/* ===== BENTO ROW ===== */}
        <div className="grid lg:grid-cols-12 gap-5 items-stretch mb-6">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 group relative rounded-3xl bg-card/70 backdrop-blur-xl p-6 sm:p-8 border border-border/70 hover:border-primary/40 transition-all duration-500 shadow-xl overflow-hidden"
          >
            {/* Corner ambient glow */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-bl from-primary/25 via-cyan-500/15 to-transparent rounded-full blur-3xl pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Live "signal" corner */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-400/90">
              <Signal size={11} className="animate-pulse" />
              <span>ONLINE</span>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-cyan-400 to-accent blur-md opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="relative p-3 rounded-2xl bg-gradient-to-br from-primary/25 via-cyan-500/15 to-accent/25 border border-primary/40 text-primary group-hover:scale-105 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground font-heading tracking-tight">
                      Moaz Osama
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-bold tracking-wider shadow-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      VERIFIED ENGINEER
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    CS Engineering Graduate · Elite 10x Cohort at HTI
                  </p>
                </div>
              </div>

              {/* Bio */}
              <div className="space-y-3 text-muted-foreground text-sm leading-relaxed mb-5">
                <p className="text-foreground/90 border-l-2 border-primary/70 pl-3 py-0.5 font-medium">
                  I'm a <span className="text-primary font-semibold">Junior Flutter Developer</span> with{" "}
                  <span className="text-foreground font-mono font-bold">2+ years</span> architecting enterprise-grade cross-platform applications using Clean Architecture, MVI, and BLoC/Cubit.
                </p>
                <p className="text-xs sm:text-sm">
                  Proven freelance track record delivering enterprise solutions including real-time tracking systems and apps published on Google Play, with deep specialization in integrating AI agents into mobile workflows and building robust backends with Firebase, Supabase, and REST APIs.
                </p>
              </div>

              {/* Achievement chips */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { label: "Google Play", value: "Published" },
                  { label: "Realtime", value: "Supabase" },
                  { label: "AI Agents", value: "Gemini" },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="rounded-xl border border-border/60 bg-secondary/30 backdrop-blur-md p-2.5 text-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mb-0.5">
                      {chip.label}
                    </div>
                    <div className="text-xs font-bold text-foreground font-mono">{chip.value}</div>
                  </div>
                ))}
              </div>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40 mt-auto">
                {["Flutter", "Dart", "Clean Arch", "MVI / Cubit", "Firebase", "Supabase", "REST APIs", "AI Agents"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg border transition-colors ${i === 0
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-secondary/60 border-border/50 text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Code Snippet Card (IDE-style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 group relative rounded-3xl bg-slate-950/95 backdrop-blur-xl border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-500 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Ambient glows */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-10 w-32 h-32 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* macOS Window Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-900/50 backdrop-blur">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/90 shadow-[0_0_6px_rgba(244,63,94,0.6)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_6px_rgba(245,158,11,0.6)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
              </div>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <Terminal size={12} className="text-emerald-400" /> developer_profile.dart
              </span>
              <span className="text-[10px] font-mono text-emerald-400/80 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                live
              </span>
            </div>

            {/* Code Body with line numbers */}
            <div className="flex-1 flex text-[11px] sm:text-xs leading-relaxed font-mono">
              {/* Line numbers gutter */}
              <div className="select-none py-3 px-3 text-right text-slate-600 border-r border-slate-800/60 bg-slate-900/30">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i}>{i + 1}</div>
                ))}
              </div>

              {/* Code */}
              <div className="flex-1 py-3 px-3 sm:px-4 text-slate-300 space-y-0.5 overflow-x-auto">
                <div><span className="text-purple-400">class</span> <span className="text-emerald-400">FlutterArchitect</span> <span className="text-slate-400">&#123;</span></div>
                <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">String</span> name <span className="text-slate-400">=</span> <span className="text-amber-300">'Moaz Osama'</span>;</div>
                <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">String</span> role <span className="text-slate-400">=</span> <span className="text-amber-300">'Flutter Engineer'</span>;</div>
                <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">String</span> degree <span className="text-slate-400">=</span> <span className="text-amber-300">'CS · HTI 10x'</span>;</div>
                <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">List</span>&lt;<span className="text-cyan-300">String</span>&gt; stack <span className="text-slate-400">=</span> [</div>
                <div className="pl-8 text-amber-300">'Flutter', 'Clean Arch',</div>
                <div className="pl-8 text-amber-300">'MVI', 'Supabase'</div>
                <div className="pl-4"><span className="text-slate-400">];</span></div>
                <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">bool</span> available <span className="text-slate-400">=</span> <span className="text-orange-400">true</span>;</div>
                <div className="pl-4 text-slate-500 italic">// Scalable · Clean · Production</div>
                <div className="pl-4"><span className="text-purple-400">void</span> <span className="text-blue-400">buildApp</span>() <span className="text-slate-400">=&gt;</span> <span className="text-emerald-300">deploy</span>();<span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse align-middle ml-1" /></div>
                <div><span className="text-slate-400">&#125;</span></div>
              </div>
            </div>

            {/* Status footer bar */}
            <div className="border-t border-slate-800/80 px-3 py-2 bg-slate-900/60 flex items-center justify-between text-[10px] font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                200 OK · Clean Build
              </span>
              <span className="text-slate-500 flex items-center gap-1">
                dart <span className="text-emerald-400/80">v3.5</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* ===== ANIMATED STATS BAR ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mb-8"
        >
          {stats.map(({ icon: Icon, number, label, accent }) => (
            <div
              key={label}
              className="group relative rounded-2xl bg-card/60 backdrop-blur-xl border border-border/60 hover:border-primary/40 p-4 sm:p-5 transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none" />
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                <div className={`p-2.5 rounded-xl bg-primary/10 border border-primary/20 ${accent} shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className={`text-2xl sm:text-3xl font-bold font-heading ${accent} leading-none`}>
                    <AnimatedCounter value={number} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">
                    {label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ===== 4 PILLARS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {highlights.map(({ icon: Icon, label, desc, accent, iconGlow, badge, level, points }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * idx }}
              className="group relative rounded-2xl bg-card/60 backdrop-blur-xl p-5 border border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col"
            >
              {/* Ambient corner glow */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className={`p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary ${iconGlow} group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shrink-0`}>
                    <Icon size={20} />
                  </div>
                  <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary/80 border ${accent}`}>
                    {badge}
                  </span>
                </div>

                <h3 className="font-bold text-foreground text-sm sm:text-base font-heading group-hover:text-primary transition-colors leading-tight mb-1.5">
                  {label}
                </h3>

                <p className="text-[11px] text-muted-foreground leading-relaxed font-mono mb-3 line-clamp-3">
                  {desc}
                </p>

                {/* Skill meter */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    <span>Proficiency</span>
                    <span className="text-foreground font-bold">{level}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-secondary/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + idx * 0.08, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-cyan-400 to-accent rounded-full"
                    />
                  </div>
                </div>

                {/* Sub points */}
                <div className="flex flex-wrap gap-1 pt-3 border-t border-border/40 mt-auto">
                  {points.map((pt) => (
                    <span
                      key={pt}
                      className="px-1.5 py-0.5 text-[10px] rounded-md bg-secondary/60 border border-border/50 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium flex items-center gap-1"
                    >
                      <Check size={9} className="text-primary shrink-0" />
                      <span>{pt}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== TECH MARQUEE ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-border/60 bg-card/40 backdrop-blur-xl overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

          <div className="flex items-center gap-3 px-4 py-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-primary shrink-0 flex items-center gap-1.5 border-r border-border/50 pr-3">
              <ChevronRight size={12} />
              Stack
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="flex gap-3 animate-[marquee_28s_linear_infinite] whitespace-nowrap will-change-transform">
                {[...techMarquee, ...techMarquee].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border border-border/50 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors flex items-center gap-1.5"
                  >
                    <Code2 size={11} className="text-primary/70" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
