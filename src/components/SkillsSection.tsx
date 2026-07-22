import { Code2, Layers, Cpu, Database, Sparkles, MonitorSmartphone, Wrench, BrainCircuit, Users, Check } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core Development",
    icon: Code2,
    badge: "Core",
    color: "from-emerald-500/15 via-teal-500/5 to-transparent",
    accent: "border-emerald-500/40 text-emerald-400",
    skills: ["Dart", "Flutter", "OOP", "Clean Code"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    badge: "Enterprise",
    color: "from-purple-500/15 via-indigo-500/5 to-transparent",
    accent: "border-purple-500/40 text-purple-400",
    skills: ["Clean Architecture", "MVI", "MVVM", "SOLID", "Design Patterns"],
  },
  {
    title: "State Management",
    icon: Cpu,
    badge: "Reactive",
    color: "from-cyan-500/15 via-blue-500/5 to-transparent",
    accent: "border-cyan-500/40 text-cyan-400",
    skills: ["BLoC", "Cubit", "Provider"],
  },
  {
    title: "Backend & Databases",
    icon: Database,
    badge: "Cloud & Local",
    color: "from-amber-500/15 via-orange-500/5 to-transparent",
    accent: "border-amber-500/40 text-amber-400",
    skills: ["Supabase", "Firebase", "RESTful APIs (Dio)", "Hive", "ObjectBox"],
  },
  {
    title: "Specialized APIs & AI",
    icon: Sparkles,
    badge: "Realtime & AI",
    color: "from-blue-500/15 via-cyan-500/5 to-transparent",
    accent: "border-blue-500/40 text-blue-400",
    skills: ["Google Maps", "Background Location", "FCM", "Gemini AI", "AI Agents", "Paymob"],
  },
  {
    title: "Cross-Platform",
    icon: MonitorSmartphone,
    badge: "Multi-Platform",
    color: "from-teal-500/15 via-emerald-500/5 to-transparent",
    accent: "border-teal-500/40 text-teal-400",
    skills: ["Android", "iOS", "Web", "Windows Desktop"],
  },
  {
    title: "Testing & Tools",
    icon: Wrench,
    badge: "Tooling",
    color: "from-indigo-500/15 via-purple-500/5 to-transparent",
    accent: "border-indigo-500/40 text-indigo-400",
    skills: ["Unit/Widget Testing", "Mockito", "CI/CD Actions", "Git/GitHub", "Postman", "Figma"],
  },
  {
    title: "Problem Solving",
    icon: BrainCircuit,
    badge: "Algorithms",
    color: "from-rose-500/15 via-pink-500/5 to-transparent",
    accent: "border-rose-500/40 text-rose-400",
    skills: ["Data Structures & Algorithms", "System Design"],
  },
  {
    title: "Soft Skills & Agile",
    icon: Users,
    badge: "Collaboration",
    color: "from-sky-500/15 via-blue-500/5 to-transparent",
    accent: "border-sky-500/40 text-sky-400",
    skills: ["Communication", "Teamwork", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-14 sm:py-16 bg-background relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono font-semibold tracking-wider uppercase mb-2.5 shadow-xs">
            <Sparkles size={12} className="animate-pulse text-primary" />
            <span>Technical Arsenal</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-2.5 text-foreground tracking-tight leading-tight">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-accent">Technologies</span>
          </h2>

          <p className="text-muted-foreground text-xs sm:text-sm font-mono max-w-xl mx-auto">
            Full-stack mobile expertise across architecture, state management & tools.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {skillCategories.map(({ title, icon: Icon, badge, color, accent, skills }, idx) => {
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="rounded-2xl bg-card/60 backdrop-blur-xl p-5 sm:p-6 border-t-2 border-t-primary/50 border-x border-b border-border/60 hover:border-t-primary hover:border-primary/60 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between shadow-md"
              >
                {/* Background Ambient Color Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-xs">
                        <Icon size={18} />
                      </div>
                      <h3 className="font-bold text-foreground text-base font-heading group-hover:text-primary transition-colors">
                        {title}
                      </h3>
                    </div>

                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-secondary/80 border ${accent}`}>
                      {badge}
                    </span>
                  </div>

                  {/* Horizontal Wrap Skills Tags / Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                    {skills.map((skillName) => (
                      <span
                        key={skillName}
                        className="px-2.5 py-1 text-xs rounded-xl bg-secondary/60 border border-border/50 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground transition-all duration-200 font-mono font-medium flex items-center gap-1 shadow-xs cursor-default"
                      >
                        <Check size={11} className="text-primary shrink-0" />
                        <span>{skillName}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
