const skillCategories = [
  {
    title: "Core",
    skills: ["Dart", "Flutter", "OOP", "Clean Code"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["Clean Architecture", "MVI", "MVVM", "SOLID", "Design Patterns"],
  },
  {
    title: "State Management",
    skills: ["BLoC", "Cubit", "Provider"],
  },
  {
    title: "Backend & DB",
    skills: ["Supabase", "Firebase", "RESTful APIs", "Hive", "ObjectBox"],
  },
  {
    title: "Specialized APIs",
    skills: ["Google Maps", "Background Location", "FCM", "Gemini AI", "AI Agents"],
  },
  {
    title: "Testing & Tools",
    skills: ["Unit Testing", "Widget Testing", "Mockito", "CI/CD", "Git/GitHub", "Postman", "Figma", "Jira"],
  },
  {
    title: "Problem Solving",
    skills: ["Data Structures", "Algorithms"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Team Collaboration", "Agile/Scrum"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Skills</h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group relative bg-card/40 backdrop-blur-md rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-mono text-sm border border-primary/20">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground font-heading">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5 relative z-10">
                {cat.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-3.5 py-1.5 text-sm rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skillName}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
