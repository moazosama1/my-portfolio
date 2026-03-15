import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { ExternalLink, Github, Play, Globe, Apple, Smartphone, ChevronLeft, LayoutGrid, List } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import IPhoneContainer from "./IPhoneContainer";

const projects = [
  {
    title: "Reward Platform",
    desc: "An end-to-end Flutter rewards ecosystem including a responsive web app, a published mobile app on Google Play, and a web admin dashboard.",
    tags: ["Flutter", "Clean Architecture", "Cross-platform"],
    github: "",
    web: "https://zlunix.com",
    playStore: "https://play.google.com/store/apps/details?id=com.zlu.nix",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=rp",
    url: "https://zlunix.com"
  },
  {
    title: "Real-Time Tracking System",
    desc: "Mobile app with background location tracking and offline support, plus an admin dashboard for real-time workforce and shift management.",
    tags: ["Flutter", "Clean Architecture", "MVI", "Supabase", "ObjectBox"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=rtts",
    url: ""
  },
  {
    title: "Flowery E-Commerce",
    desc: "Tested Flutter e-commerce app featuring secure authentication, order tracking, and Google Maps integration.",
    tags: ["Flutter", "Cubit", "Provider", "REST APIs"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=flowery",
    url: ""
  },
  {
    title: "Online Exam App",
    desc: "Scalable platform for timed assessments and detailed grading.",
    tags: ["Flutter", "MVVM", "Cubit", "Dio", "Hive"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=exam",
    url: ""
  },
  {
    title: "Super Fitness",
    desc: "Collaborative fitness app with personalized workouts and a Gemini-powered AI coach.",
    tags: ["Flutter", "BLoC", "Retrofit", "Gemini AI"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=fitness",
    url: ""
  }
];

const springConfig = { stiffness: 100, damping: 30 };

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [activeAppUrl, setActiveAppUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('grid');
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, viewMode === 'list' ? 3 : 4);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const appParam = params.get("app");

    if (appParam) {
      const targetApp = projects.find(
        (p) => p.title.toLowerCase().replace(/\s+/g, '-') === appParam.toLowerCase()
      );

      if (targetApp) {
        // Use a small timeout to let the page render first
        setTimeout(() => {
          openAndScrollToApp(targetApp.url);
        }, 500);
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 0.2, 0.4], [15, 3, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.65, 0.85, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.4], [150, 0]);

  const phoneRotateX = useSpring(rawRotateX, springConfig);
  const phoneScale = useSpring(rawScale, springConfig);
  const phoneY = useSpring(rawY, springConfig);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!isLocked && v >= 0.4) setIsLocked(true);
  });

  const openAndScrollToApp = (url: string) => {
    setActiveAppUrl(url);
    setIsLocked(true);

    setTimeout(() => {
      // Responsive scrolling
      if (window.innerWidth < 1024 && phoneRef.current) {
        // On mobile, scroll directly to the phone with a small top offset
        const yOffset = -80;
        const y = phoneRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else if (phoneRef.current) {
        // On desktop, ensure phone is fully visible
        phoneRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-gradient">Projects</h2>
            <div className="w-16 h-1 bg-gradient-primary rounded-full" />
          </div>

          <div className="flex bg-card/50 backdrop-blur-sm border border-border/50 p-1 rounded-lg w-fit shrink-0">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-md flex items-center justify-center transition-all duration-300 ${viewMode === 'list' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
              title="List View"
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md flex items-center justify-center transition-all duration-300 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
              title="Grid View"
            >
              <LayoutGrid size={18} />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Project cards */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className={`w-full ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 items-start content-start' : 'space-y-4'}`}>
              {displayedProjects.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  onClick={() => openAndScrollToApp(proj.url)}
                  className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] hover:border-primary/40 transition-all duration-500 group cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{proj.desc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded border border-border/50 bg-secondary/50 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                      {proj.tags.length > 3 && (
                        <span className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded border border-border/50 bg-secondary/50 text-muted-foreground">
                          +{proj.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                      {proj.github && proj.github !== "#" && proj.github !== "" && (
                        <a href={proj.github} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300">
                          <Github size={14} /> Source
                        </a>
                      )}
                      {proj.web && proj.web !== "#" && proj.web !== "" && (
                        <a target="_blank" rel="noopener noreferrer" href={proj.web} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300">
                          <Globe size={14} /> Web
                        </a>
                      )}
                      {proj.playStore && proj.playStore !== "#" && proj.playStore !== "" && (
                        <a target="_blank" rel="noopener noreferrer" href={proj.playStore} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300">
                          <Smartphone size={14} /> Play Store
                        </a>
                      )}
                      {proj.appStore && proj.appStore !== "#" && proj.appStore !== "" && (
                        <a target="_blank" rel="noopener noreferrer" href={proj.appStore} onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300">
                          <Apple size={14} /> App Store
                        </a>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); openAndScrollToApp(proj.url); }}
                        className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(var(--primary),0.3)] transition-all duration-300 ml-auto"
                      >
                        <Play size={14} className="fill-current" /> Run
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showAll && projects.length > (viewMode === 'list' ? 3 : 4) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-6"
              >
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm"
                >
                  Show More Projects
                </button>
              </motion.div>
            )}
          </div>

          {/* Sticky phone */}
          <div ref={phoneRef} className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-32 lg:self-start h-fit" style={{ perspective: "1200px" }}>
            <motion.div
              style={
                isLocked
                  ? { rotateX: 0, scale: 1, y: 0 }
                  : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }
              }
              className="w-[90vw] max-w-[320px] md:max-w-[360px] lg:max-w-[380px] relative"
            >
              <PhoneFrame interactive={isLocked} isLocked={isLocked} glowIntensity={isLocked ? 1 : 0.5}>
                <IPhoneContainer
                  shouldUnlock={isLocked}
                  activeAppUrl={activeAppUrl}
                  onAppOpen={setActiveAppUrl}
                  onAppClose={() => setActiveAppUrl(null)}
                  apps={projects}
                />
              </PhoneFrame>

              {/* External Floating Navigation Pill (Ultra Modern iOS Style) */}
              {isLocked && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute -bottom-14 left-0 right-0 mx-auto w-fit px-2.5 h-[52px] bg-black/70 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)] z-50 pointer-events-auto"
                >
                  <button
                    onClick={() => {
                      try {
                        const iframe = document.querySelector('iframe');
                        if (iframe && iframe.contentWindow) {
                          try {
                            iframe.contentWindow.history.back();
                          } catch (err) {
                            iframe.contentWindow.postMessage('goBack', '*');
                          }
                        }
                      } catch (e) {
                        console.log("Cannot go back in cross-origin iframe", e);
                      }
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90"
                    title="Go Back"
                  >
                    <ChevronLeft size={22} className="stroke-current mr-0.5" strokeWidth={2.5} />
                  </button>

                  <div className="w-[1px] h-4 bg-white/10 mx-2" />

                  <button
                    onClick={() => setActiveAppUrl(null)}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90 group"
                    title="Home Screen"
                  >
                    <div className="w-[18px] h-[18px] border-[2.5px] border-current rounded-[6px] group-hover:scale-95 transition-transform" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
