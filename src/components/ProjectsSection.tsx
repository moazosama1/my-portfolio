import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Github, Play, Globe, Apple, Smartphone, ChevronLeft, LayoutGrid, List, X, Info, ListChecks, Layers, MonitorSmartphone, Gift, Store, MapPin, Dumbbell, Flower2, GraduationCap, Music, Sparkles } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import IPhoneContainer from "./IPhoneContainer";
import WebFrame from "./WebFrame";

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

const getProjectIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("reward")) return Gift;
    if (t.includes("dahab") || t.includes("store") || t.includes("sales")) return Store;
    if (t.includes("tracking") || t.includes("real-time")) return MapPin;
    if (t.includes("fitness")) return Dumbbell;
    if (t.includes("flowery")) return Flower2;
    if (t.includes("exam")) return GraduationCap;
    if (t.includes("mood") || t.includes("music")) return Music;
    return Sparkles;
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
        title: "Dahab Store – Sales Management System",
        role: "Flutter & Supabase Engineer",
        about: "A production-grade Flutter Windows desktop application for retail operations, handling multi-currency sales, inventory, suppliers, and daily cash closing with PDF/Excel reporting. Engineered the backend and data layer using Supabase (PostgreSQL, Auth, Realtime, RLS) within a Clean Architecture/MVI (Cubit) structure, ensuring real-time sync and role-based data security.",
        features: [
            "Multi-currency sales, inventory, and supplier management.",
            "Daily cash closing with automated PDF & Excel reporting.",
            "Real-time data sync and RLS role-based security via Supabase."
        ],
        tags: ["Flutter", "Windows Desktop", "Clean Architecture", "MVI", "Cubit", "Supabase", "PostgreSQL", "PDF/Excel Reports"],
        github: "https://github.com/moazosama1/Dahab-Store-Sales-Systeam",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=dahabstore",
        url: ""
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
        github: "https://github.com/mohamedna3eem/elevate_Super_Fitness",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=fitness",
        url: "https://moazosama1.github.io/Fitness-app/"
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
        github: "https://github.com/AhmedNasser1999/exam_app",
        web: "https://moazosama1.github.io/online-exam-app/",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=exam",
        url: "https://moazosama1.github.io/online-exam-app/"
    },
    {
        title: "Mood-On – AI Mood & Music Companion",
        role: "Flutter & AI Engineer",
        about: "An AI-powered Flutter app that detects the user's mood and recommends music accordingly, with AI companion chat and mood history tracking. Built with Clean Architecture/MVI (Cubit), ObjectBox for offline-first storage, GoRouter, and Firebase AI (Gemini) integration.",
        features: [
            "AI-powered mood detection and personalized music recommendation.",
            "Interactive AI companion chat for emotional support & mood tracking.",
            "Offline-first history storage powered by ObjectBox and GoRouter navigation."
        ],
        tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "Firebase AI (Gemini)", "ObjectBox", "GoRouter"],
        github: "https://github.com/youssefmdev22/mood_on_public",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=moodon",
        url: ""
    }
];

const springConfig = { stiffness: 100, damping: 30 };

type ProjectCardProps = {
    proj: Project;
    isActive: boolean;
    onCardClick: () => void;
    onOpenDetails: () => void;
};

const ProjectCard = ({ proj, isActive, onCardClick, onOpenDetails }: ProjectCardProps) => {
    const IconComponent = getProjectIcon(proj.title);
    return (
        <div
            onClick={onCardClick}
            className={`group relative bg-card/60 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between overflow-hidden shadow-md ${isActive
                    ? "border-primary ring-2 ring-primary/30 shadow-[0_12px_35px_rgba(var(--primary),0.25)] bg-card/80"
                    : "border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1"
                }`}
        >
            {/* Background Ambient Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none" />

            <div className="flex flex-col h-full relative z-10">
                {/* Top Header: Icon & Role Badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-xs shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <IconComponent size={22} />
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                                {proj.title}
                            </h3>
                            {proj.role && (
                                <span className="text-[11px] font-mono text-muted-foreground">
                                    {proj.role}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Active / Running Indicator Badge */}
                    {isActive && (
                        <span className="flex items-center gap-1.5 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Active
                        </span>
                    )}
                </div>

                {/* About Description */}
                <p className="text-muted-foreground text-xs sm:text-sm mb-5 leading-relaxed line-clamp-3 font-sans">
                    {proj.about}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tags.map((tag, idx) => (
                        <span
                            key={tag}
                            className={`text-[10px] sm:text-xs font-mono font-medium px-2.5 py-1 rounded-lg border transition-colors ${idx === 0
                                    ? "bg-primary/10 border-primary/20 text-primary"
                                    : "bg-secondary/60 border-border/50 text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Actions Row */}
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-4 border-t border-border/40">
                    {proj.github && proj.github !== "#" && proj.github !== "" && (
                        <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                        >
                            <Github size={14} /> Source
                        </a>
                    )}
                    {proj.web && proj.web !== "#" && proj.web !== "" && proj.title !== "Online Exam Platform" && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={proj.web}
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
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
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
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
                            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
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
                        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                    >
                        Details
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onCardClick();
                        }}
                        className={`flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-xl transition-all duration-300 ml-auto shadow-sm ${isActive
                                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-primary/30"
                                : "bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                            }`}
                    >
                        <Play size={13} className="fill-current" /> {isActive ? "Running" : "Run"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLDivElement>(null);
    const [isLocked, setIsLocked] = useState(false);
    const [activeAppUrl, setActiveAppUrl] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'list' | 'grid' | 'mobile' | 'web'>('list');
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const webEnabledProjects = projects.filter(
        (project) => project.title === "Easy Reward Platform" && project.web && project.web !== "#"
    );

    const projectsForCurrentView = viewMode === 'web' ? webEnabledProjects : projects;

    const getProjectPreviewUrl = (project: Project) => {
        if (viewMode === 'web') return project.web || "";
        return project.url || project.web || "";
    };

    const sortedProjectsForCurrentView = [...projectsForCurrentView].sort((a, b) => {
        const aHasPreview = Boolean(getProjectPreviewUrl(a));
        const bHasPreview = Boolean(getProjectPreviewUrl(b));
        return Number(bHasPreview) - Number(aHasPreview);
    });

    const displayedProjects = showAll
        ? sortedProjectsForCurrentView
        : sortedProjectsForCurrentView.slice(0, viewMode === 'list' ? 3 : 4);
    const leftProjects = displayedProjects.filter((_, i) => i % 2 === 0);
    const rightProjects = displayedProjects.filter((_, i) => i % 2 !== 0);

    useEffect(() => {
        if (viewMode !== 'web') return;

        const activeIsValidWebProject = webEnabledProjects.some((project) => project.web === activeAppUrl);
        if (!activeIsValidWebProject) {
            setActiveAppUrl(webEnabledProjects[0]?.web || null);
        }
    }, [viewMode, activeAppUrl, webEnabledProjects]);

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
        <section id="projects" ref={sectionRef} className="relative py-16 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-2xl mx-auto mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] font-semibold tracking-wider uppercase mb-3">
                        <Sparkles size={13} /> Portfolio Showcase
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 text-foreground tracking-tight">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base font-mono">
                        Production apps, enterprise desktop systems & open-source mobile solutions.
                    </p>
                </motion.div>

                {/* View Switcher Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-10"
                >
                    <div className="flex items-center justify-center bg-card/60 backdrop-blur-md border border-border/50 p-1.5 rounded-2xl w-fit shadow-sm">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'list' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                            title="List View"
                        >
                            <List size={16} /> List
                        </button>
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                            title="Grid View"
                        >
                            <LayoutGrid size={16} /> Grid
                        </button>
                        <button
                            onClick={() => setViewMode('mobile')}
                            className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                            title="Mobile Split View"
                        >
                            <Smartphone size={16} /> Split
                        </button>
                        {webEnabledProjects.length > 0 && (
                            <button
                                onClick={() => setViewMode('web')}
                                className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'web' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                                title="Web View"
                            >
                                <MonitorSmartphone size={16} /> Web
                            </button>
                        )}
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
                                            isActive={activeAppUrl === getProjectPreviewUrl(proj)}
                                            onCardClick={() => openAndScrollToApp(getProjectPreviewUrl(proj))}
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
                                            isActive={activeAppUrl === getProjectPreviewUrl(proj)}
                                            onCardClick={() => openAndScrollToApp(getProjectPreviewUrl(proj))}
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
                                            isActive={activeAppUrl === getProjectPreviewUrl(proj)}
                                            onCardClick={() => openAndScrollToApp(getProjectPreviewUrl(proj))}
                                            onOpenDetails={() => setSelectedProject(proj)}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Load More / Show Less — bottom center */}
                        {sortedProjectsForCurrentView.length > 4 && (
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
                        <div className={`w-full ${viewMode === 'web' ? 'lg:w-[40%]' : 'lg:w-1/2'} flex flex-col order-2 lg:order-1`}>
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
                                            isActive={activeAppUrl === getProjectPreviewUrl(proj)}
                                            onCardClick={() => openAndScrollToApp(getProjectPreviewUrl(proj))}
                                            onOpenDetails={() => setSelectedProject(proj)}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {sortedProjectsForCurrentView.length > (viewMode === 'list' ? 3 : 4) && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
                                    <button onClick={() => setShowAll(!showAll)} className="px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm">
                                        {showAll ? 'Show Less' : 'Show More Projects'}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div ref={phoneRef} className={`w-full ${viewMode === 'web' ? 'lg:w-[60%]' : 'lg:w-1/2'} lg:sticky lg:top-32 lg:self-start flex justify-center h-fit order-1 lg:order-2`} style={{ perspective: "1200px" }}>
                            {viewMode === 'web' ? (
                                <motion.div
                                    style={isLocked ? { rotateX: 0, scale: 1, y: 0 } : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }}
                                    className="w-full max-w-[980px]"
                                >
                                    <WebFrame
                                        activeUrl={activeAppUrl}
                                        onReload={() => setActiveAppUrl((url) => (url ? `${url}${url.includes('?') ? '&' : '?'}r=${Date.now()}` : url))}
                                    />
                                </motion.div>
                            ) : (
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
                            )}
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
