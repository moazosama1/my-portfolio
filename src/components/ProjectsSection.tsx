import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Github, Play, Globe, Apple, Smartphone, ChevronLeft, LayoutGrid, List, X, Info, ListChecks, Layers } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import IPhoneContainer from "./IPhoneContainer";

type Project = {
  title: string;
  role: string;
  about: string;
  features: string[];
  tags: string[];
  github: string;
  web: string;
  playStore: string;
  appStore: string;
  icon: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "Easy Reward Platform",
    role: "Freelance Flutter Developer",
    about: "An end-to-end, production-ready rewards ecosystem designed to boost user engagement with an interactive mobile app and a comprehensive web admin dashboard.",
    features: [
      "Cross-platform mobile app for users and responsive web dashboard for admins.",
      "Automated earn and redeem reward flows with real-time synchronization.",
      "Published and maintained on Google Play with active user management."
    ],
    tags: ["Flutter", "Clean Architecture", "BLoC/Cubit", "REST APIs"],
    github: "",
    web: "https://zlunix.com",
    playStore: "https://play.google.com/store/apps/details?id=com.zlu.nix",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=rp",
    url: "https://zlunix.com"
  },
  {
    title: "Enterprise Real-Time Tracking System",
    role: "Freelance Flutter Developer",
    about: "A robust workforce management solution with dual applications for employees and managers to handle attendance, shifts, and real-time tracking even in low-connectivity environments.",
    features: [
      "Dual-app ecosystem: employee mobile app and manager dashboard.",
      "Background location tracking with Google Maps integration.",
      "Offline-first check in/out with automatic sync when online.",
      "Shift planning, leave requests, and hierarchy management."
    ],
    tags: ["Flutter", "Clean Architecture", "MVI", "BLoC/Cubit", "Supabase", "ObjectBox", "Google Maps API"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=rtts",
    url: ""
  },
  {
    title: "Super Fitness App",
    role: "Flutter Developer",
    about: "A next-generation fitness companion app with an AI coach that generates personalized training plans and responds to health and workout questions in real time.",
    features: [
      "Gemini AI powered virtual fitness coach for tailored plans.",
      "Offline access to workout plans and progress logging.",
      "Comprehensive unit and widget testing with CI/CD automation."
    ],
    tags: ["Flutter", "Clean Architecture", "BLoC", "Gemini AI API", "Retrofit", "ObjectBox", "GitHub Actions"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=fitness",
    url: ""
  },
  {
    title: "Flowery E-Commerce App",
    role: "Flutter Developer",
    about: "A complete e-commerce mobile experience handling browsing, secure authentication, checkout, and real-time order tracking from a single app flow.",
    features: [
      "Secure sign in and registration flows.",
      "Order tracking with map-based location updates.",
      "Stable cart and session state management."
    ],
    tags: ["Flutter", "Clean Architecture", "Cubit/Provider", "REST APIs", "Google Maps"],
    github: "",
    web: "",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=flowery",
    url: ""
  },
  {
    title: "Online Exam Platform",
    role: "Flutter Developer",
    about: "A scalable educational platform for secure timed assessments, auto submission, and instant result breakdowns while preserving data integrity during unstable connections.",
    features: [
      "Precision timers with auto-submit behavior.",
      "Automated grading with detailed scoring breakdown.",
      "Secure local cache to prevent exam data loss offline."
    ],
    tags: ["Flutter", "Clean Architecture", "MVVM", "Cubit", "Dio", "Hive"],
    github: "",
    web: "https://moazosama1.github.io/online-exam-app/",
    playStore: "",
    appStore: "",
    icon: "https://api.dicebear.com/9.x/shapes/svg?seed=exam",
    url: "https://moazosama1.github.io/online-exam-app/"
  }
];

const springConfig = { stiffness: 100, damping: 30 };

type ProjectCardProps = {
  proj: Project;
  isActive: boolean;
  onCardClick: () => void;
  onOpenDetails: () => void;
};

const ProjectCard = ({ proj, isActive, onCardClick, onOpenDetails }: ProjectCardProps) => (
  <div
    onClick={onCardClick}
    className={`bg-card/40 backdrop-blur-md border ${isActive ? 'border-primary ring-1 ring-primary/20 shadow-[0_0_25px_rgba(var(--primary),0.1)]' : 'border-border/50'} rounded-xl p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] hover:border-primary/40 transition-all duration-500 group cursor-pointer h-full`}
  >
    <div className="flex flex-col h-full">
      <h3 className="text-lg md:text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">{proj.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">{proj.about}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {proj.tags.map((tag) => (
          <span key={tag} className="text-[10px] md:text-xs font-mono px-2 py-0.5 rounded border border-border/50 bg-secondary/50 text-muted-foreground">{tag}</span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
        {proj.github && proj.github !== "#" && proj.github !== "" && (
          <a
            href={proj.github}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
          >
            <Github size={14} /> Source
          </a>
        )}
        {proj.web && proj.web !== "#" && proj.web !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={proj.web}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
          >
            <Globe size={14} /> Web
          </a>
        )}
        {proj.playStore && proj.playStore !== "#" && proj.playStore !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={proj.playStore}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
          >
            <Smartphone size={14} /> Play
          </a>
        )}
        {proj.appStore && proj.appStore !== "#" && proj.appStore !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={proj.appStore}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
          >
            <Apple size={14} /> App Store
          </a>
        )}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails();
          }}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
        >
          Details
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCardClick();
          }}
          className="flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:shadow-[0_0_10px_rgba(var(--primary),0.3)] transition-all duration-300 ml-auto"
        >
          <Play size={14} className="fill-current" /> Run
        </button>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [activeAppUrl, setActiveAppUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'list' | 'grid' | 'mobile'>('list');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, viewMode === 'list' ? 3 : 4);
  const leftProjects = displayedProjects.filter((_, i) => i % 2 === 0);
  const rightProjects = displayedProjects.filter((_, i) => i % 2 !== 0);

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

  useEffect(() => {
    if (!selectedProject) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [selectedProject]);

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
            <button
              onClick={() => setViewMode('mobile')}
              className={`p-2 rounded-md flex items-center justify-center transition-all duration-300 ${viewMode === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
              title="Mobile Split View"
            >
              <Smartphone size={18} />
            </button>
          </div>
        </motion.div>

        {viewMode === 'mobile' ? (
          /* ===== MOBILE SPLIT VIEW: Phone center, cards left & right ===== */
          <div className="flex flex-col items-center">
            <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-12 xl:gap-10 w-full">
              {/* Left Column */}
              <div className="hidden xl:flex flex-col gap-4 w-full max-w-[420px]">
                {leftProjects.map((proj, i) => (
                  <motion.div
                    key={`left-${proj.title}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ProjectCard
                      proj={proj}
                      isActive={activeAppUrl === proj.url}
                      onCardClick={() => openAndScrollToApp(proj.url)}
                      onOpenDetails={() => setSelectedProject(proj)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Central Phone */}
              <div ref={phoneRef} className="relative z-20 flex-shrink-0" style={{ perspective: "1200px" }}>
                <motion.div
                  style={isLocked ? { rotateX: 0, scale: 1, y: 0 } : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }}
                  className="w-[90vw] max-w-[320px] md:max-w-[360px] lg:max-w-[380px] relative"
                >
                  <PhoneFrame interactive={isLocked} isLocked={isLocked} glowIntensity={isLocked ? 1 : 0.5}>
                    <IPhoneContainer shouldUnlock={isLocked} activeAppUrl={activeAppUrl} onAppOpen={setActiveAppUrl} onAppClose={() => setActiveAppUrl(null)} apps={projects} />
                  </PhoneFrame>
                  {isLocked && (
                    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute -bottom-14 left-0 right-0 mx-auto w-fit px-2.5 h-[52px] bg-black/70 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)] z-50 pointer-events-auto">
                      <button onClick={() => { try { const iframe = document.querySelector('iframe'); if (iframe && iframe.contentWindow) { try { iframe.contentWindow.history.back(); } catch (err) { iframe.contentWindow.postMessage('goBack', '*'); } } } catch (e) { console.log("Cannot go back", e); } }} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90" title="Go Back"><ChevronLeft size={22} strokeWidth={2.5} /></button>
                      <div className="w-[1px] h-4 bg-white/10 mx-2" />
                      <button onClick={() => setActiveAppUrl(null)} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90 group" title="Home Screen"><div className="w-[18px] h-[18px] border-[2.5px] border-current rounded-[6px] group-hover:scale-95 transition-transform" /></button>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="hidden xl:flex flex-col gap-4 w-full max-w-[420px]">
                {rightProjects.map((proj, i) => (
                  <motion.div
                    key={`right-${proj.title}`}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ProjectCard
                      proj={proj}
                      isActive={activeAppUrl === proj.url}
                      onCardClick={() => openAndScrollToApp(proj.url)}
                      onOpenDetails={() => setSelectedProject(proj)}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Cards for smaller screens (below xl) in mobile mode — standard grid */}
              <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {displayedProjects.map((proj, i) => (
                  <motion.div
                    key={`mobile-sm-${proj.title}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ProjectCard
                      proj={proj}
                      isActive={activeAppUrl === proj.url}
                      onCardClick={() => openAndScrollToApp(proj.url)}
                      onOpenDetails={() => setSelectedProject(proj)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Load More / Show Less — bottom center */}
            {projects.length > 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full flex justify-center mt-16">
                <button onClick={() => setShowAll(!showAll)} className="px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm">
                  {showAll ? 'Show Less' : 'Show More Projects'}
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          /* ===== LIST / GRID VIEW ===== */
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
              <div className={`w-full ${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 items-start content-start' : 'space-y-4'}`}>
                {displayedProjects.map((proj, i) => (
                  <motion.div
                    key={`${viewMode}-${proj.title}`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <ProjectCard
                      proj={proj}
                      isActive={activeAppUrl === proj.url}
                      onCardClick={() => openAndScrollToApp(proj.url)}
                      onOpenDetails={() => setSelectedProject(proj)}
                    />
                  </motion.div>
                ))}
              </div>

              {projects.length > (viewMode === 'list' ? 3 : 4) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
                  <button onClick={() => setShowAll(!showAll)} className="px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm">
                    {showAll ? 'Show Less' : 'Show More Projects'}
                  </button>
                </motion.div>
              )}
            </div>

            <div ref={phoneRef} className="w-full lg:w-1/2 lg:sticky lg:top-32 lg:self-start flex justify-center h-fit order-1 lg:order-2" style={{ perspective: "1200px" }}>
              <motion.div
                style={isLocked ? { rotateX: 0, scale: 1, y: 0 } : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }}
                className="w-[90vw] max-w-[320px] md:max-w-[360px] lg:max-w-[380px] relative"
              >
                <PhoneFrame interactive={isLocked} isLocked={isLocked} glowIntensity={isLocked ? 1 : 0.5}>
                  <IPhoneContainer shouldUnlock={isLocked} activeAppUrl={activeAppUrl} onAppOpen={setActiveAppUrl} onAppClose={() => setActiveAppUrl(null)} apps={projects} />
                </PhoneFrame>
                {isLocked && (
                  <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute -bottom-14 left-0 right-0 mx-auto w-fit px-2.5 h-[52px] bg-black/70 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)] z-50 pointer-events-auto">
                    <button onClick={() => { try { const iframe = document.querySelector('iframe'); if (iframe && iframe.contentWindow) { try { iframe.contentWindow.history.back(); } catch (err) { iframe.contentWindow.postMessage('goBack', '*'); } } } catch (e) { console.log("Cannot go back", e); } }} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90" title="Go Back"><ChevronLeft size={22} strokeWidth={2.5} /></button>
                    <div className="w-[1px] h-4 bg-white/10 mx-2" />
                    <button onClick={() => setActiveAppUrl(null)} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90 group" title="Home Screen"><div className="w-[18px] h-[18px] border-[2.5px] border-current rounded-[6px] group-hover:scale-95 transition-transform" /></button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        )}

        {selectedProject && (
          <div
            className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm px-4 py-8 md:px-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="h-full w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl max-h-[86vh] overflow-y-auto rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >
                <div className="relative p-6 md:p-7 border-b border-border/50 bg-gradient-to-r from-primary/15 via-primary/5 to-transparent">
                  <div className="pr-12">
                    <p className="text-[11px] tracking-[0.14em] uppercase text-primary/90 mb-2">Project Details</p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground leading-tight">{selectedProject.title}</h3>
                    <p className="text-sm text-foreground/80 mt-2">{selectedProject.role}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-5 right-5 h-9 w-9 rounded-full border border-border/50 bg-card/70 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-card transition-all duration-200 flex items-center justify-center"
                    title="Close"
                  >
                    <X size={16} />
                  </button>
                </div>

                <div className="p-6 md:p-7 space-y-5">
                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Info size={15} className="text-primary" />
                      About Project
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{selectedProject.about}</p>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <ListChecks size={15} className="text-primary" />
                      Key Features
                    </p>
                    <ul className="list-disc pl-5 text-sm leading-relaxed text-muted-foreground space-y-1.5">
                      {selectedProject.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Layers size={15} className="text-primary" />
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2 py-1 rounded border border-border/50 bg-secondary/50 text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border/50 bg-secondary/20 p-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Project Links</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.github && selectedProject.github !== "#" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
                        >
                          <Github size={14} /> Source
                        </a>
                      )}
                      {selectedProject.web && selectedProject.web !== "#" && (
                        <a
                          href={selectedProject.web}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
                        >
                          <Globe size={14} /> Web
                        </a>
                      )}
                      {selectedProject.playStore && selectedProject.playStore !== "#" && (
                        <a
                          href={selectedProject.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
                        >
                          <Smartphone size={14} /> Play Store
                        </a>
                      )}
                      {selectedProject.appStore && selectedProject.appStore !== "#" && (
                        <a
                          href={selectedProject.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:text-primary transition-all duration-300"
                        >
                          <Apple size={14} /> App Store
                        </a>
                      )}
                      {!selectedProject.github && !selectedProject.web && !selectedProject.playStore && !selectedProject.appStore && (
                        <p className="text-sm text-muted-foreground">No public links available for this project.</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
