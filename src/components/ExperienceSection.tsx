import { motion } from "framer-motion";

const experiences = [
  {
    role: "Freelance Flutter Developer",
    company: "Self-Employed",
    period: "Oct 2025 – Present",
    points: [
      "Architected and delivered enterprise-grade solutions including real-time tracking systems and published apps on Google Play.",
      "Integrated AI agents into mobile workflows and built robust backend services with Firebase and Supabase.",
      "Built scalable, cross-platform applications using Clean Architecture, MVI, MVVM, and BLoC/Cubit.",
    ],
  },
  {
    role: "Flutter Training",
    company: "Elevate Tech",
    period: "Jul 2025 – Nov 2025",
    points: [
      "Completed advanced Flutter training.",
      "Focused on building production-ready applications.",
      "Gained deeper knowledge in architecture and state management.",
    ],
  },
  {
    role: "Flutter Basics",
    company: "Route Academy",
    period: "Jun 2024 – Oct 2024",
    points: [
      "Completed foundational training in the Flutter framework and Dart programming.",
      "Learned core concepts of OOP, UI building, and widget trees.",
    ],
  },
  {
    role: "Computer Science Degree",
    company: "Higher Technological Institute (HTI)",
    period: "2022 – 2026",
    points: [
      "Pursuing a Bachelor's degree in Computer Science.",
      "Studying software engineering, algorithms, system design, and advanced programming concepts.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Experience</h2>
          <div className="w-16 h-1 bg-gradient-primary rounded-full mb-16" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline center line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-px top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-[13px] md:left-1/2 md:-translate-x-1/2 top-1 flex items-center justify-center z-10 hidden sm:flex">
                  <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(var(--primary),0.5)] relative">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  </div>
                </div>

                {/* Mobile Dot (positioned slightly differently) */}
                <div className="absolute left-[16px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background shadow-glow z-10 sm:hidden" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full text-xs font-mono font-medium mb-4 ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground font-heading mb-1">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground font-medium mb-5">{exp.company}</p>

                  <ul className={`space-y-3 text-sm text-muted-foreground/90 ${i % 2 === 0 ? "md:ml-auto inline-block text-right" : ""}`}>
                    {exp.points.map((point, j) => (
                      <li key={j} className={`flex gap-3 items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-primary mt-1 shrink-0 opacity-80">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
