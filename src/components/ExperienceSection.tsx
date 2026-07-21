import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, Sparkles, CheckCircle2, Building2, Terminal, ChevronRight, Zap } from "lucide-react";

const experiences = [
  {
    step: "01",
    role: "Freelance Flutter Developer",
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
  return (
    <section id="experience" className="py-16 bg-background relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} /> Career Milestones
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">
            Work <span className="text-gradient">Experience</span> & Track Record
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-mono mt-2">
            A chronological timeline of my professional growth & mobile engineering achievements.
          </p>
        </motion.div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-5xl mx-auto">
          {/* Laser Timeline Line (Hidden on tiny screens, centered on desktop) */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-accent opacity-40 shadow-[0_0_10px_rgba(var(--primary),0.5)] hidden sm:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.role + idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`relative flex flex-col md:flex-row items-center gap-4 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Badge (Desktop) */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-20 hidden sm:flex items-center justify-center">
                    <div className="w-9 h-9 rounded-xl bg-card border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon size={16} />
                    </div>
                  </div>

                  {/* Experience Card Container */}
                  <div className="w-full sm:w-[calc(100%-3.5rem)] sm:ml-14 md:ml-0 md:w-[calc(50%-2.5rem)]">
                    <div className="group relative bg-card/70 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-border/60 hover:border-primary/50 shadow-md hover:shadow-[0_10px_30px_rgba(var(--primary),0.15)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                      
                      {/* Left Gradient Border Accent */}
                      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-cyan-400 to-accent rounded-r-full opacity-70 group-hover:opacity-100 transition-opacity" />

                      {/* Ambient Glow Corner Orb */}
                      <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all pointer-events-none" />

                      {/* Header Row: Icon Avatar, Role & Period */}
                      <div className="flex items-start justify-between gap-2.5 mb-3.5 relative z-10">
                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shadow-xs">
                            <Icon size={17} />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 inline-block mb-0.5">
                              STEP {exp.step} • {exp.type}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold font-heading text-foreground group-hover:text-primary transition-colors leading-snug">
                              {exp.role}
                            </h3>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <div className="flex items-center gap-1 text-[11px] font-mono font-medium text-muted-foreground bg-secondary/70 px-2.5 py-0.5 rounded-full border border-border/50 shadow-xs">
                            <Calendar size={11} className="text-primary" />
                            <span>{exp.period}</span>
                          </div>
                          {exp.status === "Active" ? (
                            <span className="flex items-center gap-1 text-[9px] font-bold font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Active
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-full bg-secondary/60 text-muted-foreground border border-border/40">
                              {exp.status}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Company Subtitle */}
                      <div className="flex items-center gap-1.5 mb-3 text-xs font-semibold text-primary font-mono bg-secondary/40 px-2.5 py-1 rounded-lg border border-border/40 w-fit">
                        <Terminal size={12} />
                        <span>{exp.company}</span>
                      </div>

                      {/* Key Achievement Banner */}
                      <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/15 text-[11px] font-mono text-foreground/90 mb-3.5 flex items-center gap-2 shadow-xs">
                        <Zap size={13} className="text-primary shrink-0" />
                        <span className="font-medium leading-tight">{exp.highlight}</span>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-1.5 mb-4 relative z-10">
                        {exp.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                            <CheckCircle2 size={13} className="text-primary shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1 pt-3 border-t border-border/40 relative z-10">
                        {exp.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary/60 border border-border/40 text-muted-foreground font-medium group-hover:border-primary/30 group-hover:text-foreground transition-all duration-200"
                          >
                            #{t}
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
