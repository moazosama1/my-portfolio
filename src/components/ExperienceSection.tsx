import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
  CheckCircle2,
  Building2,
  Zap,
  Layers,
  Code2,
  Rocket,
  ListChecks,
  Info,
  BadgeCheck,
  X,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ExperienceStatus = "Active" | "Completed" | "Graduated";

type Experience = {
  step: string;
  role: string;
  company: string;
  period: string;
  type: string;
  status: ExperienceStatus;
  icon: LucideIcon;
  highlight: string;
  tags: string[];
  points: string[];
  about?: string;
};

const experiences: Experience[] = [
  {
    step: "01",
    role: "Junior Flutter Developer",
    company: "Self-Employed",
    period: "Oct 2024 – Present",
    type: "Freelance / Remote",
    status: "Active",
    icon: Briefcase,
    highlight: "Delivering production apps on Google Play & Enterprise Real-Time Tracking systems",
    tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "Supabase", "Firebase", "AI Agents"],
    points: [
      "Architected and delivered enterprise-grade solutions including real-time tracking systems and published apps on Google Play.",
      "Integrated AI agents into mobile workflows and built robust backend services with Firebase and Supabase.",
      "Engineered scalable, cross-platform applications for iOS & Android using Clean Architecture, MVI, and BLoC/Cubit.",
    ],
  },
  {
    step: "02",
    role: "Flutter Training & Advanced App Dev",
    company: "Elevate Tech",
    period: "Jul 2024 – Nov 2024",
    type: "Specialized Academy",
    status: "Completed",
    icon: Award,
    highlight: "Mastered enterprise architecture & BLoC/Cubit state management",
    tags: ["Advanced Flutter", "Clean Architecture", "State Management", "CI/CD"],
    points: [
      "Completed advanced Flutter engineering training focusing on enterprise architecture.",
      "Gained deep knowledge in Clean Architecture, state management patterns (BLoC/Cubit), and scalable codebase structure.",
      "Built production-grade project modules with comprehensive unit/widget testing.",
    ],
  },
  {
    step: "03",
    role: "Flutter & Mobile Fundamentals",
    company: "Route Academy",
    period: "Jun 2024 – Oct 2024",
    type: "Academy Training",
    status: "Completed",
    icon: Building2,
    highlight: "Core Dart OOP, reactive layouts & widget trees",
    tags: ["Dart", "Flutter Basics", "OOP", "UI Widgets"],
    points: [
      "Completed foundational training in the Flutter framework and Dart programming language.",
      "Mastered core OOP concepts, custom UI building, reactive layouts, and widget trees.",
    ],
  },
  {
    step: "04",
    role: "CS Engineering Graduate",
    company: "Higher Technological Institute (HTI)",
    period: "2022 – 2026",
    type: "Bachelor Degree • Elite 10x Cohort",
    status: "Graduated",
    icon: GraduationCap,
    highlight: "Elite 10x Cohort CS Engineering graduate with strong algorithm fundamentals",
    tags: ["Data Structures", "Algorithms", "System Design", "Software Engineering"],
    points: [
      "Graduated from the Computer Science Engineering program within the Elite 10x Cohort at HTI.",
      "Studied core software engineering, data structures & algorithms, system architecture, and operating systems.",
    ],
  },
];

type ExperienceCardProps = {
  exp: Experience;
  side: "left" | "right";
  idx: number;
  onOpenDetails: () => void;
};

const StatusPill = ({ status }: { status: ExperienceStatus }) => {
  if (status === "Active") {
    return (
      <span className="flex items-center gap-1.5 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        Active
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1.5 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-secondary/60 border border-border/50 text-muted-foreground shadow-xs">
      <BadgeCheck size={11} />
      {status}
    </span>
  );
};

const ExperienceCard = ({ exp, side, idx, onOpenDetails }: ExperienceCardProps) => {
  const Icon = exp.icon;
  const firstPoint = exp.points[0];
  const hiddenCount = Math.max(exp.points.length - 1, 0);
  const isActive = exp.status === "Active";
  const visibleTags = exp.tags.slice(0, 4);
  const hiddenTagCount = Math.max(exp.tags.length - visibleTags.length, 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: idx * 0.08 }}
      className={`group relative bg-card/60 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden shadow-md flex flex-col h-full`}
    >
      {/* Ambient corner glow */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-2.5 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shadow-xs shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 leading-tight truncate">
                {exp.role}
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground truncate block">
                {exp.company}
              </span>
            </div>
          </div>

          <StatusPill status={exp.status} />
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-muted-foreground mb-3">
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-secondary/60 border border-border/50">
            <Calendar size={10} className="text-primary" />
            {exp.period}
          </span>
          <span className="opacity-60">•</span>
          <span className="text-foreground/80 font-semibold truncate">{exp.type}</span>
        </div>

        {/* Highlight banner (compact) */}
        <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-2.5 py-2 mb-3 flex items-start gap-1.5">
          <Zap size={12} className="text-primary shrink-0 mt-0.5 animate-pulse" />
          <p className="text-[11px] sm:text-xs text-foreground/90 leading-snug line-clamp-2 font-medium">
            {exp.highlight}
          </p>
        </div>

        {/* Single bullet + "+N more" */}
        {firstPoint && (
          <div className="flex items-start gap-1.5 text-[11px] text-muted-foreground leading-snug mb-3">
            <CheckCircle2 size={12} className="text-primary shrink-0 mt-0.5" />
            <span className="text-foreground/85 line-clamp-2">{firstPoint}</span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {visibleTags.map((tag, tIdx) => (
            <span
              key={tag}
              className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border transition-colors ${
                tIdx === 0
                  ? "bg-primary/10 border-primary/20 text-primary"
                  : "bg-secondary/60 border-border/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
          {hiddenTagCount > 0 && (
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md border bg-secondary/60 border-border/50 text-muted-foreground">
              +{hiddenTagCount}
            </span>
          )}
        </div>

        {/* Action row */}
        <div className="flex items-center gap-2 mt-auto pt-2.5 border-t border-border/40">
          <button
            type="button"
            onClick={onOpenDetails}
            className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
          >
            <Info size={12} />
            Details
            {hiddenCount > 0 && (
              <span className="inline-flex items-center gap-0.5 text-[10px] text-primary/90">
                +{hiddenCount}
                <ArrowUpRight size={10} />
              </span>
            )}
          </button>

          {isActive && (
            <span className="flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg ml-auto bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-sm shadow-primary/30">
              <Rocket size={11} className="fill-current" />
              Current
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  // Track scroll progress along the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const tipPercent = useTransform(scaleY, (v) => `${Math.min(Math.max(v * 100, 0), 100)}%`);

  useEffect(() => {
    if (!selectedExperience) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedExperience(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selectedExperience]);

  const SelectedIcon = selectedExperience?.icon ?? Briefcase;

  return (
    <section id="experience" className="py-14 sm:py-16 bg-background relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} /> Career Milestones & Growth
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-foreground tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base font-mono">
            A chronological timeline of my mobile engineering journey, enterprise achievements, and academic foundation.
          </p>

          {/* Quick stat pills — Experience-only touch, restyled to match tag-primary */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
              <Rocket size={12} /> Production Apps
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground hover:text-foreground transition-colors">
              <Layers size={12} className="text-cyan-400" /> Clean Architecture & MVI
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground hover:text-foreground transition-colors">
              <Code2 size={12} className="text-accent" /> 10x CS Graduate
            </span>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Glowing Animated Vertical Line */}
          <div className="absolute left-4 sm:left-5 md:left-1/2 top-3 bottom-3 w-0.5 -translate-x-1/2 pointer-events-none z-0">
            <div className="w-full h-full bg-border/40 dark:bg-secondary/60 rounded-full" />
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-cyan-400 to-accent rounded-full shadow-[0_0_10px_rgba(16,185,129,0.9),0_0_18px_rgba(56,189,248,0.7)]"
            />
            <motion.div
              style={{ top: tipPercent }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 border border-white shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee] z-10"
            >
              <div className="w-full h-full rounded-full bg-cyan-400 animate-ping opacity-85" />
            </motion.div>
          </div>

          {/* Experience rows */}
          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;
              const side: "left" | "right" = isEven ? "right" : "left";

              return (
                <div
                  key={exp.role + idx}
                  className={`relative flex flex-col md:flex-row items-stretch gap-4 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline node badge */}
                  <div className="absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-0 md:top-6 z-20 flex items-center justify-center">
                    <div className="group relative w-9 h-9 rounded-xl bg-card border border-primary/80 shadow-[0_0_12px_rgba(var(--primary),0.3)] flex items-center justify-center text-primary transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xs pointer-events-none" />
                      <Icon size={16} className="relative z-10" />
                    </div>
                  </div>

                  {/* Desktop spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card column */}
                  <div className="w-full pl-11 sm:pl-12 md:pl-0 md:w-1/2">
                    <div className={isEven ? "md:mr-8" : "md:ml-8"}>
                      <ExperienceCard
                        exp={exp}
                        side={side}
                        idx={idx}
                        onOpenDetails={() => setSelectedExperience(exp)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details Modal — mirrors ProjectsSection modal shell */}
        {selectedExperience && (
          <div
            className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm px-4 py-8 md:px-6"
            onClick={() => setSelectedExperience(null)}
          >
            <div className="h-full w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >
                <div className="relative p-6 md:p-7 border-b border-border/50 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent">
                  <div className="pr-12">
                    <p className="text-[11px] tracking-[0.14em] uppercase text-primary/90 mb-2">Career Milestone</p>
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-xs">
                        <SelectedIcon size={22} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground leading-tight">
                          {selectedExperience.role}
                        </h3>
                        <p className="text-sm text-foreground/80 mt-1">
                          {selectedExperience.company} · {selectedExperience.period} · {selectedExperience.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedExperience(null)}
                    className="absolute top-5 right-5 h-9 w-9 rounded-full border border-border/50 bg-card/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-200 flex items-center justify-center"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-6 md:p-7 space-y-5">
                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Zap size={15} className="text-primary" />
                      Highlight
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {selectedExperience.about ?? selectedExperience.highlight}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ListChecks size={15} className="text-primary" />
                      Key Contributions
                    </p>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1.5">
                      {selectedExperience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Layers size={15} className="text-primary" />
                      Tech & Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.tags.map((tag, tIdx) => (
                        <span
                          key={tag}
                          className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${
                            tIdx === 0
                              ? "bg-primary/10 border-primary/20 text-primary"
                              : "bg-secondary/60 border-border/50 text-muted-foreground"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BadgeCheck size={15} className="text-primary" />
                      Status
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <StatusPill status={selectedExperience.status} />
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground">
                        <Calendar size={11} className="text-primary" />
                        {selectedExperience.period}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/60 border border-border/50 text-muted-foreground">
                        {selectedExperience.type}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                        STEP {selectedExperience.step}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
