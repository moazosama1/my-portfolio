const skillCategories = [
  {
    title: "Core",
    skills: ["Flutter", "Dart", "Kotlin", "Swift"],
  },
  {
    title: "State Management",
    skills: ["BLoC / Cubit", "Riverpod", "Provider", "GetX"],
  },
  {
    title: "Backend & Tools",
    skills: ["Firebase", "REST APIs", "GraphQL", "Git & CI/CD"],
  },
  {
    title: "Other",
    skills: ["UI/UX Design", "Testing", "Animations", "Platform Channels"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Skills</h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-5 font-heading">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skillName) => (
                  <span
                    key={skillName}
                    className="px-4 py-2 rounded-xl bg-background/50 border border-white/10 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-0.5 text-sm font-medium text-foreground transition-all duration-300 shadow-sm cursor-default"
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
