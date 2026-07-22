import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Sparkles,
  CheckCircle2,
  Building2,
  Terminal,
  Zap,
  Layers,
  Code2,
  Rocket
} from "lucide-react";

const experiences = [
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

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress along the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  // Smooth out line extension using spring animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Tip light indicator position (0% to 100%)
  const tipPercent = useTransform(scaleY, (v) => `${Math.min(Math.max(v * 100, 0), 100)}%`);

  return (
    <section id="experience" className="py-14 sm:py-16 bg-background relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono font-semibold tracking-wider uppercase mb-2.5 shadow-xs">
            <Sparkles size={12} className="animate-pulse text-primary" />
            <span>Career Milestones & Growth</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight leading-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">Experience</span> & Track Record
          </h2>

          <p className="text-muted-foreground text-xs sm:text-sm font-mono mt-2 max-w-xl mx-auto">
            A chronological timeline of my mobile engineering journey, enterprise achievements, and academic foundation.
          </p>

          {/* Compact Quick Stats Highlights */}
          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3 text-[11px] font-mono">
            <div className="px-2.5 py-1 rounded-lg bg-card/60 border border-border/60 backdrop-blur-md flex items-center gap-1.5">
              <Rocket size={12} className="text-primary" />
              <span className="text-foreground font-semibold">Production Apps</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-card/60 border border-border/60 backdrop-blur-md flex items-center gap-1.5">
              <Layers size={12} className="text-cyan-400" />
              <span className="text-foreground font-semibold">Clean Architecture & MVI</span>
            </div>
            <div className="px-2.5 py-1 rounded-lg bg-card/60 border border-border/60 backdrop-blur-md flex items-center gap-1.5">
              <Code2 size={12} className="text-accent" />
              <span className="text-foreground font-semibold">10x CS Graduate</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">

          {/* 🌟 Glowing Animated Vertical Line */}
          <div className="absolute left-4 sm:left-5 md:left-1/2 top-3 bottom-3 w-0.5 -translate-x-1/2 pointer-events-none z-0">
            {/* Background track line */}
            <div className="w-full h-full bg-border/40 dark:bg-secondary/60 rounded-full" />

            {/* Glowing Laser Light Line (Fills on scroll down) */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-cyan-400 to-accent rounded-full shadow-[0_0_10px_rgba(16,185,129,0.9),0_0_18px_rgba(56,189,248,0.7)]"
            />

            {/* Traveling Laser Tip Pulsing Orb */}
            <motion.div
              style={{ top: tipPercent }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 border border-white shadow-[0_0_10px_#22d3ee,0_0_20px_#22d3ee] z-10"
            >
              <div className="w-full h-full rounded-full bg-cyan-400 animate-ping opacity-85" />
            </motion.div>
          </div>

          {/* Experience Cards Grid */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.role + idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-stretch gap-4 ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Timeline Center Node Badge */}
                  <div className="absolute left-4 sm:left-5 md:left-1/2 -translate-x-1/2 top-0 md:top-4 z-20 flex items-center justify-center">
                    <div className="group relative w-9 h-9 rounded-xl bg-card border border-primary/80 shadow-[0_0_12px_rgba(var(--primary),0.3)] flex items-center justify-center text-primary group-hover:scale-105 transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xs group-hover:bg-primary/30 transition-all pointer-events-none" />
                      <Icon size={16} className="relative z-10 group-hover:rotate-6 transition-transform" />
                    </div>
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Experience Card Container */}
                  <div className="w-full pl-11 sm:pl-12 md:pl-0 md:w-1/2">
                    <div
                      className={`group relative bg-card/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-border/70 hover:border-primary/50 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ${isEven ? "md:mr-5" : "md:ml-5"
                        }`}
                    >
                      {/* Left Accent Bar */}
                      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-cyan-400 to-accent rounded-r-full opacity-60 group-hover:opacity-100 transition-opacity" />

                      {/* Header Row: Role & Badges */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2.5 relative z-10">
                        <div>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                              STEP {exp.step}
                            </span>
                            <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full bg-secondary/80 text-muted-foreground border border-border/40">
                              {exp.type}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                            {exp.role}
                          </h3>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-muted-foreground bg-secondary/80 px-2.5 py-0.5 rounded-full border border-border/50">
                            <Calendar size={11} className="text-primary" />
                            <span>{exp.period}</span>
                          </div>

                          {exp.status === "Active" ? (
                            <span className="flex items-center gap-1 text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active Role
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground border border-border/40">
                              {exp.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Company Name Badge */}
                      <div className="flex items-center gap-1.5 mb-2.5 text-[11px] font-bold text-primary font-mono bg-primary/10 px-2.5 py-0.5 rounded-lg border border-primary/20 w-fit">
                        <Terminal size={12} className="text-primary" />
                        <span>{exp.company}</span>
                      </div>

                      {/* Key Highlight Banner */}
                      <div className="p-2 px-2.5 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 text-[11px] font-mono text-foreground/90 mb-3 flex items-center gap-2 shadow-xs">
                        <Zap size={13} className="text-primary shrink-0 animate-pulse" />
                        <span className="font-medium leading-tight">{exp.highlight}</span>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-1.5 mb-3.5 relative z-10">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                            <span className="text-foreground/90">{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-border/40 relative z-10">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/70 border border-border/40 text-muted-foreground font-medium group-hover:border-primary/30 group-hover:text-foreground transition-all duration-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
