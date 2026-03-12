const experiences = [
  {
    role: "Senior Flutter Developer",
    company: "TechVista Solutions",
    period: "2023 – Present",
    points: [
      "Lead development of 3 production Flutter applications serving 500K+ users",
      "Architected scalable BLoC-based state management patterns adopted team-wide",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    role: "Flutter Developer",
    company: "AppCraft Studio",
    period: "2021 – 2023",
    points: [
      "Built and shipped 5 cross-platform mobile apps from scratch",
      "Integrated complex REST APIs and real-time WebSocket connections",
      "Reduced app startup time by 40% through optimization techniques",
    ],
  },
  {
    role: "Junior Mobile Developer",
    company: "PixelWave Inc.",
    period: "2020 – 2021",
    points: [
      "Developed native Android apps using Kotlin before transitioning to Flutter",
      "Implemented CI/CD pipelines using Codemagic and GitHub Actions",
      "Contributed to internal Flutter component library",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Experience</h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                {/* Dot */}
                <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 w-2.5 h-2.5 rounded-full bg-primary shadow-glow z-10" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-primary font-mono text-sm">{exp.period}</span>
                  <h3 className="text-xl font-bold text-foreground font-heading mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-3">{exp.company}</p>
                  <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:ml-auto" : ""}`}>
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
