import { useState } from "react";
import {
  Code2,
  Layers,
  Cpu,
  Database,
  Sparkles,
  MonitorSmartphone,
  Wrench,
  BrainCircuit,
  Users,
  Check,
  Flame,
  Rocket,
  Star,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

type Category = {
  id: string;
  title: string;
  icon: typeof Code2;
  badge: string;
  glow: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  primary?: boolean;
  skills: string[];
};

const skillCategories: Category[] = [
  {
    id: "core",
    title: "Core Development",
    icon: Code2,
    badge: "Core",
    glow: "shadow-[0_0_35px_rgba(16,185,129,0.35)]",
    accentText: "text-emerald-400",
    accentBorder: "border-emerald-500/40",
    accentBg: "bg-emerald-500/10",
    primary: true,
    skills: ["Dart", "Flutter", "OOP", "Clean Code"],
  },
  {
    id: "arch",
    title: "Architecture & Patterns",
    icon: Layers,
    badge: "Enterprise",
    glow: "shadow-[0_0_35px_rgba(168,85,247,0.35)]",
    accentText: "text-purple-400",
    accentBorder: "border-purple-500/40",
    accentBg: "bg-purple-500/10",
    primary: true,
    skills: ["Clean Architecture", "MVI", "MVVM", "SOLID", "Design Patterns"],
  },
  {
    id: "state",
    title: "State Management",
    icon: Cpu,
    badge: "Reactive",
    glow: "shadow-[0_0_35px_rgba(34,211,238,0.35)]",
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/40",
    accentBg: "bg-cyan-500/10",
    skills: ["BLoC", "Cubit", "Provider"],
  },
  {
    id: "backend",
    title: "Backend & Databases",
    icon: Database,
    badge: "Cloud & Local",
    glow: "shadow-[0_0_35px_rgba(245,158,11,0.35)]",
    accentText: "text-amber-400",
    accentBorder: "border-amber-500/40",
    accentBg: "bg-amber-500/10",
    primary: true,
    skills: ["Supabase", "Firebase", "RESTful APIs (Dio)", "Hive", "ObjectBox"],
  },
  {
    id: "ai",
    title: "Specialized APIs & AI",
    icon: Sparkles,
    badge: "Realtime & AI",
    glow: "shadow-[0_0_35px_rgba(59,130,246,0.35)]",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/40",
    accentBg: "bg-blue-500/10",
    skills: ["Google Maps", "Background Location", "FCM", "Gemini AI", "AI Agents", "Paymob"],
  },
  {
    id: "platform",
    title: "Cross-Platform",
    icon: MonitorSmartphone,
    badge: "Multi-Platform",
    glow: "shadow-[0_0_35px_rgba(20,184,166,0.35)]",
    accentText: "text-teal-400",
    accentBorder: "border-teal-500/40",
    accentBg: "bg-teal-500/10",
    skills: ["Android", "iOS", "Web", "Windows Desktop"],
  },
  {
    id: "tools",
    title: "Testing & Tools",
    icon: Wrench,
    badge: "Tooling",
    glow: "shadow-[0_0_35px_rgba(99,102,241,0.35)]",
    accentText: "text-indigo-400",
    accentBorder: "border-indigo-500/40",
    accentBg: "bg-indigo-500/10",
    skills: ["Unit/Widget Testing", "Mockito", "CI/CD Actions", "Git/GitHub", "Postman", "Figma"],
  },
  {
    id: "cs",
    title: "Problem Solving",
    icon: BrainCircuit,
    badge: "Algorithms",
    glow: "shadow-[0_0_35px_rgba(244,63,94,0.35)]",
    accentText: "text-rose-400",
    accentBorder: "border-rose-500/40",
    accentBg: "bg-rose-500/10",
    skills: ["Data Structures & Algorithms", "System Design"],
  },
  {
    id: "soft",
    title: "Soft Skills & Agile",
    icon: Users,
    badge: "Collaboration",
    glow: "shadow-[0_0_35px_rgba(14,165,233,0.35)]",
    accentText: "text-sky-400",
    accentBorder: "border-sky-500/40",
    accentBg: "bg-sky-500/10",
    skills: ["Communication", "Teamwork", "Agile/Scrum"],
  },
];

const specialties = [
  {
    icon: Flame,
    title: "Flutter & Dart",
    subtitle: "Cross-platform expert",
    level: 95,
    years: "2+ yrs",
    accent: "from-emerald-500 to-teal-400",
    ring: "ring-emerald-500/40",
    glow: "shadow-[0_0_40px_rgba(16,185,129,0.4)]",
    text: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    subtitle: "MVI · BLoC · Cubit",
    level: 90,
    years: "Enterprise",
    accent: "from-purple-500 to-fuchsia-400",
    ring: "ring-purple-500/40",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
    text: "text-purple-400",
  },
  {
    icon: Rocket,
    title: "Backend & AI",
    subtitle: "Supabase · Firebase · Gemini",
    level: 85,
    years: "Production",
    accent: "from-amber-500 to-orange-400",
    ring: "ring-amber-500/40",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.4)]",
    text: "text-amber-400",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "primary", label: "Primary" },
];

const SkillsSection = () => {
  const [filter, setFilter] = useState<"all" | "primary">("all");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const displayed = filter === "primary" ? skillCategories.filter((c) => c.primary) : skillCategories;
  const totalSkills = skillCategories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid pattern with radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_50%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={13} className="animate-pulse" />
            <span>Technical Arsenal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground tracking-tight leading-[1.1]">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <p className="text-muted-foreground text-sm sm:text-base font-mono max-w-xl mx-auto">
            Full-stack mobile expertise across architecture, state management, backend & tools.
          </p>

          {/* Meta counters */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <Zap size={11} />
              {totalSkills}+ Skills
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground">
              <Layers size={11} className="text-cyan-400" />
              {skillCategories.length} Categories
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground">
              <Star size={11} className="text-amber-400" />
              {skillCategories.filter((c) => c.primary).length} Primary Focus
            </span>
          </div>
        </motion.div>

        {/* ===== CORE SPECIALTIES HERO ROW ===== */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mb-10">
          {specialties.map(({ icon: Icon, title, subtitle, level, years, accent, ring, glow, text }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * idx }}
              className="group relative rounded-3xl bg-card/70 backdrop-blur-xl border border-border/70 hover:border-primary/40 p-5 sm:p-6 overflow-hidden shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Gradient border top */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent} opacity-80`} />
              {/* Corner glow */}
              <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl bg-gradient-to-bl ${accent} opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${accent} text-white ${glow} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={22} />
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary/80 border ${ring} ${text} tracking-wider`}>
                      {years}
                    </span>
                    <span className={`text-2xl font-bold font-heading ${text}`}>{level}%</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-4">{subtitle}</p>

                {/* Skill meter */}
                <div className="mt-auto">
                  <div className="h-1.5 rounded-full bg-secondary/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.25 + idx * 0.08, ease: "easeOut" }}
                      className={`h-full bg-gradient-to-r ${accent} rounded-full shadow-[0_0_10px_currentColor]`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== FILTER TABS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center justify-center bg-card/60 backdrop-blur-md border border-border/50 p-1.5 rounded-2xl w-fit shadow-sm">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as "all" | "primary")}
                className={`px-4 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${
                  filter === f.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {f.id === "primary" && <Star size={12} />}
                {f.label}
                <span className="text-[10px] opacity-70 ml-0.5">
                  ({f.id === "primary" ? skillCategories.filter((c) => c.primary).length : skillCategories.length})
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ===== CATEGORY GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {displayed.map(({ id, title, icon: Icon, badge, glow, accentText, accentBorder, accentBg, primary, skills }, idx) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredCategory(id)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative rounded-2xl bg-card/60 backdrop-blur-xl p-5 border border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col"
            >
              {/* Ambient corner glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none" />

              {/* Primary star */}
              {primary && (
                <div className="absolute top-3 right-3 z-10">
                  <div className={`w-6 h-6 rounded-full ${accentBg} border ${accentBorder} flex items-center justify-center ${accentText}`}>
                    <Star size={11} className="fill-current" />
                  </div>
                </div>
              )}

              <div className="relative z-10 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start gap-3 mb-3 pr-8">
                  <div className={`p-2.5 rounded-xl ${accentBg} border ${accentBorder} ${accentText} ${glow} shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-foreground text-sm sm:text-base font-heading group-hover:text-primary transition-colors leading-tight">
                      {title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md ${accentBg} ${accentText} border ${accentBorder}`}>
                        {badge}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {skills.length} {skills.length === 1 ? "skill" : "skills"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40 mt-auto">
                  {skills.map((skillName, sIdx) => (
                    <motion.span
                      key={skillName}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: 1,
                        scale: hoveredCategory === id ? 1.03 : 1,
                      }}
                      transition={{
                        duration: 0.2,
                        delay: hoveredCategory === id ? sIdx * 0.03 : 0,
                      }}
                      className={`px-2.5 py-1 text-[11px] rounded-lg border transition-all duration-200 font-mono font-medium flex items-center gap-1 shadow-xs ${
                        sIdx === 0
                          ? `${accentBg} ${accentBorder} ${accentText}`
                          : "bg-secondary/60 border-border/50 text-muted-foreground hover:border-primary/40 hover:bg-primary/10 hover:text-foreground"
                      }`}
                    >
                      <Check size={10} className={sIdx === 0 ? accentText : "text-primary shrink-0"} />
                      <span>{skillName}</span>
                    </motion.span>
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

export default SkillsSection;
