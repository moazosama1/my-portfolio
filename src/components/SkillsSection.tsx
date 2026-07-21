import { Code2, Layers, Cpu, Database, Sparkles, MonitorSmartphone, Wrench, BrainCircuit, Users } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Core",
    icon: Code2,
    skills: ["Dart", "Flutter", "OOP", "Clean Code"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: ["Clean Architecture", "MVI", "MVVM", "SOLID", "Design Patterns"],
  },
  {
    title: "State Management",
    icon: Cpu,
    skills: ["BLoC", "Cubit", "Provider"],
  },
  {
    title: "Backend & DB",
    icon: Database,
    skills: ["Supabase", "Firebase", "RESTful APIs (Retrofit/Dio)", "Hive", "ObjectBox"],
  },
  {
    title: "Specialized APIs",
    icon: Sparkles,
    skills: ["Google Maps", "Background Location", "FCM", "Gemini AI", "AI Agents", "Google AdMob"],
  },
  {
    title: "Platforms",
    icon: MonitorSmartphone,
    skills: ["Android", "iOS", "Web", "Windows Desktop"],
  },
  {
    title: "Testing & Tools",
    icon: Wrench,
    skills: ["Unit/Widget Testing", "Mockito", "CI/CD (GitHub Actions)", "Git/GitHub", "Postman", "Figma", "Jira"],
  },
  {
    title: "Problem Solving",
    icon: BrainCircuit,
    skills: ["Data Structures & Algorithms"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Communication", "Team Collaboration", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-3">
            <Sparkles size={13} /> Technical Arsenal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-foreground tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-mono">
            Full-stack mobile expertise across architecture, state management & tools.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-card/50 backdrop-blur-md rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(var(--primary),0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-primary/20 transition-all duration-500" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base font-bold text-foreground font-heading tracking-tight">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-medium text-muted-foreground/60">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {cat.skills.map((skillName) => (
                      <span
                        key={skillName}
                        className="px-3 py-1 text-xs rounded-lg bg-secondary/70 border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200 font-medium cursor-default shadow-xs"
                      >
                        {skillName}
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
