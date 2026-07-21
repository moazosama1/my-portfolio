import { Code2, Smartphone, Cpu, Zap, GraduationCap, Award, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Smartphone,
    label: "Cross-Platform",
    desc: "Single codebase for native iOS & Android apps",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Layers,
    label: "Clean Architecture & MVI",
    desc: "Testable, decoupled, and scalable state management",
    color: "from-purple-500/20 to-indigo-500/10",
  },
  {
    icon: Cpu,
    label: "AI & Real-Time Mobile",
    desc: "Firebase, Supabase & AI agents integration",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: Zap,
    label: "High Performance",
    desc: "60/120 FPS fluid UIs & efficient memory handling",
    color: "from-amber-500/20 to-orange-500/10",
  },
];

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "10x", label: "Cohort CS Graduate (HTI)" },
  { number: "100%", label: "Clean Code Standard" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden bg-background">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

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
            <Sparkles size={13} /> Get To Know Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-foreground tracking-tight">
            Architecting <span className="text-gradient">Mobile Systems</span> with Precision
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base font-mono">
            CS Engineering Graduate & Flutter Developer specializing in enterprise-grade architecture.
          </p>
        </motion.div>

        {/* Bento Box Layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Bento Item 1: Primary Bio Card (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 glass rounded-3xl p-8 border border-border/50 shadow-xl relative overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 via-accent/10 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-heading">Moaz Osama</h3>
                  <p className="text-xs text-muted-foreground font-mono">CS Engineering Graduate • Elite 10x Cohort at HTI</p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  I'm a <span className="text-foreground font-semibold">Flutter Developer</span> with <span className="text-primary font-mono font-medium">2+ years</span> architecting scalable, cross-platform applications using Clean Architecture, MVI, and BLoC/Cubit.
                </p>
                <p>
                  As a CS Engineering graduate from the Elite 10x Cohort at HTI, I have a proven freelance track record delivering enterprise-grade solutions including real-time tracking systems and published apps on Google Play.
                </p>
                <p>
                  Experienced integrating AI agents into mobile workflows and building robust backend services with Firebase and Supabase.
                </p>
              </div>
            </div>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
              {["Flutter", "Dart", "Clean Arch", "MVI / BLoC", "Firebase", "Supabase", "REST APIs", "AI Agents"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-secondary/60 border border-border/50 text-xs font-mono font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bento Item 2: Code Snippet macOS Card (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-2xl flex flex-col justify-between font-mono relative group hover:border-primary/40 transition-all duration-500"
          >
            {/* macOS Window Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs text-slate-500 font-mono">developer_profile.dart</span>
            </div>

            {/* Code Snippet Content */}
            <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2 overflow-x-auto py-2">
              <div><span className="text-purple-400">class</span> <span className="text-emerald-400">FlutterArchitect</span> &#123;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String name = <span className="text-amber-300">'Moaz Osama'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String experience = <span className="text-amber-300">'2+ years'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> String education = <span className="text-amber-300">'CS Engineer (HTI 10x)'</span>;</div>
              <div className="pl-4"><span className="text-purple-400">final</span> List&lt;String&gt; stack = [</div>
              <div className="pl-8 text-cyan-300">'Flutter', 'Clean Arch', 'MVI', 'AI Agents'</div>
              <div className="pl-4">];</div>
              <div className="pl-4"><span className="text-purple-400">final</span> bool availableForProjects = <span className="text-emerald-400">true</span>;</div>
              <div className="pl-4 py-1 text-slate-500">// Delivering 60fps polished mobile experiences</div>
              <div className="pl-4"><span className="text-purple-400">void</span> <span className="text-cyan-400">buildApp</span>() &#123;</div>
              <div className="pl-8 text-emerald-400">print('Scalable. Clean. Reliable.');</div>
              <div className="pl-4">&#125;</div>
              <div>&#125;</div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 pt-6 mt-4 border-t border-slate-800/80 text-center">
              {stats.map(({ number, label }) => (
                <div key={label} className="p-2 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-base sm:text-lg font-bold text-emerald-400 font-heading">{number}</div>
                  <div className="text-[10px] text-slate-400 leading-tight">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Highlights Row (4 Core Pillars) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {highlights.map(({ icon: Icon, label, desc, color }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="glass p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-base font-heading">{label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
