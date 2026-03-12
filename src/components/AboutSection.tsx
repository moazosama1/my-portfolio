import { Code2, Smartphone, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Smartphone, label: "Mobile First", desc: "Cross-platform apps for iOS & Android" },
  { icon: Code2, label: "Clean Code", desc: "Maintainable, scalable architecture" },
  { icon: Palette, label: "UI/UX Focus", desc: "Beautiful, intuitive interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed & efficiency" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">About Me</h2>
        <div className="w-16 h-1 bg-gradient-primary rounded-full mb-10" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Flutter Developer with 4+ years of experience crafting high-quality cross-platform mobile applications. I specialize in building pixel-perfect UIs, integrating complex APIs, and implementing clean architecture patterns.
            </p>
            <p>
              My journey started with native Android development before transitioning to Flutter, which allows me to deliver stunning apps for both iOS and Android from a single codebase. I'm deeply committed to writing testable, maintainable code and staying current with the latest Flutter ecosystem developments.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to open-source Flutter packages, writing technical articles, or exploring new state management solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass rounded-xl p-5 hover:shadow-glow transition-shadow duration-500 group">
                <Icon size={28} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground mb-1">{label}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
