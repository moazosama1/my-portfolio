import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { Github, Play, Globe, Apple, Smartphone, ChevronLeft, LayoutGrid, X, Info, ListChecks, Layers, MonitorSmartphone, Gift, Store, MapPin, Dumbbell, Flower2, GraduationCap, Music, Sparkles, Truck } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import IPhoneContainer from "./IPhoneContainer";
import WebFrame from "./WebFrame";

type Project = {
    title: string;
    role: string;
    badge?: string;
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
    if (t.includes("admin") || t.includes("manager")) return Layers;
    if (t.includes("elevate") || t.includes("driver")) return Truck;
    if (t.includes("employee") || t.includes("attendance") || t.includes("tracking") || t.includes("real-time")) return MapPin;
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
        title: "Dahab Store — Sales Management System",
        role: "Flutter & Supabase Architect",
        badge: "Enterprise System • Web / Desktop Only",
        about: "A production-grade sales and inventory management system for modern retail businesses. Engineered with Clean Architecture + MVI (Cubit) and powered by Supabase (PostgreSQL, Auth, Realtime, RLS), featuring real-time multi-currency tracking (EGP, USD, EUR, SAR), cash drawer closing, vault management, and one-click PDF & Excel report exports.",
        features: [
            "Multi-currency sales & vault operations (EGP, USD, EUR, SAR) with in-vault currency exchange.",
            "Daily financial closing with live drawer balance calculation, PDF reports & historical Excel exports.",
            "Complete modules for suppliers ledger, savings groups (Gam3eya), categorized expenses & digital wallet (Visa).",
            "Role-based access control (Admin / Employee) enforced via Supabase Row-Level Security (RLS)."
        ],
        tags: ["Flutter", "Windows Desktop & Web", "Clean Architecture", "MVI / Cubit", "Supabase", "PostgreSQL (RLS)", "PDF / Excel Reports", "Realtime Sync", "GetIt / Injectable"],
        github: "https://github.com/moazosama1/Dahab-Store-Sales-Systeam",
        web: "https://joo783.github.io/dahab_store_demo/",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=dahabstore",
        url: ""
    },
    {
        title: "Tracking App – Admin & Manager Suite",
        role: "Flutter & Supabase Engineer",
        badge: "Dual-App Suite • Admin Portal (Web & Mobile)",
        about: "Part 1 of the Enterprise Tracking Suite. A centralized management dashboard (Web & Mobile) for administrators and managers to track staff attendance, manage shifts, handle leave requests, and oversee organizational hierarchy with real-time sync and Excel/PDF report exports.",
        features: [
            "Cross-platform management suite for Mobile & Web with role-based access control.",
            "Branch & department organization with real-time staff location sync.",
            "Shift planning, automated attendance logs, and leave approval workflows.",
            "Instant Excel/PDF report exports and push notifications via Firebase."
        ],
        tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "Supabase", "GoRouter", "Firebase", "Web & Mobile"],
        github: "https://github.com/youssefmdev22/tracking_app_admin_public",
        web: "https://joo783.github.io/attendence_app_manager_demo/#/login",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=trackadmin",
        url: "https://joo783.github.io/attendence_app_manager_demo/#/login"
    },
    {
        title: "Employee Tracking App",
        role: "Flutter Engineer",
        badge: "Dual-App Suite • Employee App (Mobile Only)",
        about: "Part 2 of the Enterprise Tracking Suite. A field-ready mobile application for employees to securely check in/out with background GPS tracking, shift schedule access, and leave requests, engineered with offline-first caching via ObjectBox.",
        features: [
            "Real-time Check-In / Check-Out with background location service support.",
            "Offline-first local caching using ObjectBox for seamless operation in low connectivity.",
            "Shift schedule viewing, leave request submission, and profile preferences.",
            "Multilingual support (English & Arabic) and secure Supabase database sync."
        ],
        tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "ObjectBox", "Supabase", "Google Maps", "Background Service", "Mobile Only"],
        github: "https://github.com/youssefmdev22/tracking_app_user_public",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=trackuser",
        url: "https://joo783.github.io/attendence_app_employee_demo/#/login"
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
        role: "Flutter & Clean Architecture Engineer",
        badge: "Dual-App Suite • Customer App (Mobile Only)",
        about: "Part 1 of the E-Commerce Ecosystem. An elegant mobile application for flower shopping, engineered with Clean Architecture & MVI (Cubit/Provider) across Data, Domain, Presentation, and API layers with real-time product discovery, checkout flows, online payments, and Google Maps address management.",
        features: [
            "Product discovery with categories, occasions, best sellers, and dynamic search & filters.",
            "Full cart & checkout flow with quantity adjustments, order history, and payment gateway.",
            "Multi-address management integrated with Google Maps and Geolocator GPS detection.",
            "Secure authentication, guest mode, profile management, and multi-language support."
        ],
        tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "REST APIs", "Google Maps", "Flutter Secure Storage", "Unit Testing", "Mobile Only"],
        github: "https://github.com/Bablu521/Elevate-Ecommerce-App",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=flowery",
        url: "https://joo783.github.io/ecommerce_user_app_demo/"
    },
    {
        title: "Elevate Tracking App",
        role: "Flutter & Geolocation Engineer",
        badge: "Dual-App Suite • Driver & Delivery (Mobile Only)",
        about: "Part 2 of the E-Commerce Ecosystem. A real-time delivery and route tracking mobile application built for drivers to manage order pickups, destination routes, and live location broadcasting using Google Maps, Geolocator, and Cloud Firestore with Clean Architecture & BLoC.",
        features: [
            "Real-time driver location tracking and route monitoring powered by Google Maps & Geolocator.",
            "Complete order lifecycle management with pickup/delivery location coordinates and status updates.",
            "Secure PIN authentication with Flutter Secure Storage and Cloud Firestore live sync.",
            "Modular Clean Architecture with Injectable DI, GoRouter, Retrofit, and comprehensive unit tests."
        ],
        tags: ["Flutter", "Clean Architecture", "BLoC", "Google Maps", "Geolocator", "Cloud Firestore", "Retrofit", "Injectable", "Mobile Only"],
        github: "https://github.com/Bablu521/Elevate-Tracking-App",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=elevatetracking",
        url: "https://joo783.github.io/ecommerce_driver_app_demo/"
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
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=exam",
        url: "https://moazosama1.github.io/online-exam-app/"
    },
    {
        title: "Mood-On – AI Mood & Music Companion",
        role: "Flutter & AI Engineer",
        badge: "Mobile App • AI Companion",
        about: "A sophisticated, enterprise-grade Flutter application designed to bridge emotions and music. Mood-On uses AI-driven mood analysis (Firebase Gemini) to curate personalized soundtracks, offers empathetic AI chat companion support, and tracks emotional trends with offline-first ObjectBox caching, strictly built with Clean Architecture & MVI (Cubit).",
        features: [
            "AI-powered emotional state detection & personalized music recommendations.",
            "Interactive AI companion chat for emotional processing and empathy.",
            "Offline-first mood history & trends tracking powered by high-speed ObjectBox database.",
            "Bilingual support (English & Arabic RTL) with sleek dark-themed glassmorphic UI."
        ],
        tags: ["Flutter", "Clean Architecture", "MVI / Cubit", "Firebase AI (Gemini)", "ObjectBox", "Dio / Retrofit", "GetIt / Injectable", "GoRouter", "EN / AR (RTL)", "Mobile Only"],
        github: "https://github.com/youssefmdev22/mood_on_public",
        web: "",
        playStore: "",
        appStore: "",
        icon: "https://api.dicebear.com/9.x/shapes/svg?seed=moodon",
        url: "https://joo783.github.io/mood_on_demo/#/onboarding"
    }
];

const springConfig = { stiffness: 100, damping: 30 };

type ProjectCardProps = {
    proj: Project;
    isActive: boolean;
    compact?: boolean;
    onCardClick: () => void;
    onOpenDetails: () => void;
};

const ProjectCard = ({ proj, isActive, compact = false, onCardClick, onOpenDetails }: ProjectCardProps) => {
    const IconComponent = getProjectIcon(proj.title);

    const maxTags = compact ? 3 : proj.tags.length;
    const visibleTags = proj.tags.slice(0, maxTags);
    const hiddenTagCount = Math.max(proj.tags.length - visibleTags.length, 0);

    const secondaryLinkClass = compact
        ? "flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-lg bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
        : "flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-xl bg-secondary/80 border border-border/50 text-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200";

    const runButtonClass = compact
        ? `flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all duration-300 ml-auto shadow-sm ${isActive
            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-primary/30"
            : "bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"}`
        : `flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-xl transition-all duration-300 ml-auto shadow-sm ${isActive
            ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-primary/30"
            : "bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"}`;

    return (
        <div
            onClick={onCardClick}
            className={`group relative bg-card/60 backdrop-blur-xl rounded-2xl border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between overflow-hidden shadow-md ${compact ? "p-4" : "p-6"} ${isActive
                ? "border-primary ring-2 ring-primary/30 shadow-[0_12px_35px_rgba(var(--primary),0.25)] bg-card/80"
                : "border-border/60 hover:border-primary/50 hover:shadow-[0_12px_35px_rgba(var(--primary),0.18)] hover:-translate-y-1"
                }`}
        >
            {/* Background Ambient Glow */}
            <div className={`absolute -top-12 -right-12 ${compact ? "w-24 h-24" : "w-32 h-32"} bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all duration-500 pointer-events-none`} />

            <div className="flex flex-col h-full relative z-10">
                {/* Top Header: Icon, Titles & Active Indicator */}
                <div className={`flex items-start justify-between gap-3 ${compact ? "mb-2" : "mb-3"}`}>
                    <div className="flex items-start gap-2.5 min-w-0 flex-1">
                        <div className={`${compact ? "p-2 rounded-lg" : "p-2.5 rounded-xl"} bg-primary/10 border border-primary/20 text-primary shadow-xs shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-0.5`}>
                            <IconComponent size={compact ? 18 : 22} />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className={`font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300 leading-snug ${compact ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"}`}>
                                {proj.title}
                            </h3>
                            {proj.role && (
                                <span className={`font-mono text-muted-foreground block mt-0.5 ${compact ? "text-[10px]" : "text-[11px]"}`}>
                                    {proj.role}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Active / Running Indicator Badge */}
                    {isActive && (
                        <span className={`flex items-center gap-1.5 font-bold font-mono rounded-full bg-primary/15 border border-primary/30 text-primary shadow-xs shrink-0 ${compact ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2.5 py-1"}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Active
                        </span>
                    )}
                </div>

                {/* Optional Suite Badge */}
                {proj.badge && (
                    <div className={`${compact ? "mb-2" : "mb-3"}`}>
                        <span className={`inline-flex items-center gap-1 font-mono font-medium rounded-md border ${proj.badge.includes("Web")
                                ? "bg-primary/10 border-primary/30 text-primary"
                                : "bg-amber-500/10 border-amber-500/30 text-amber-500 dark:text-amber-400"
                            } ${compact ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2.5 py-1"}`}>
                            {proj.badge}
                        </span>
                    </div>
                )}

                {/* About Description */}
                <p className={`text-muted-foreground leading-relaxed font-sans ${compact ? "text-[11px] mb-3 line-clamp-2" : "text-xs sm:text-sm mb-5 line-clamp-3"}`}>
                    {proj.about}
                </p>

                {/* Tech Tags */}
                <div className={`flex flex-wrap ${compact ? "gap-1 mb-3" : "gap-1.5 mb-6"}`}>
                    {visibleTags.map((tag, idx) => (
                        <span
                            key={tag}
                            className={`font-mono font-medium border transition-colors ${compact ? "text-[10px] px-1.5 py-0.5 rounded-md" : "text-[10px] sm:text-xs px-2.5 py-1 rounded-lg"} ${idx === 0
                                ? "bg-primary/10 border-primary/20 text-primary"
                                : "bg-secondary/60 border-border/50 text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {tag}
                        </span>
                    ))}
                    {compact && hiddenTagCount > 0 && (
                        <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-md border bg-secondary/60 border-border/50 text-muted-foreground">
                            +{hiddenTagCount}
                        </span>
                    )}
                </div>

                {/* Bottom Actions Row */}
                <div className={`flex flex-wrap items-center mt-auto border-t border-border/40 ${compact ? "gap-1.5 pt-2.5" : "gap-2 pt-4"}`}>
                    {proj.github && proj.github !== "#" && proj.github !== "" && (
                        <a
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={secondaryLinkClass}
                            title="Source"
                        >
                            <Github size={compact ? 12 : 14} /> {!compact && "Source"}
                        </a>
                    )}
                    {proj.web && proj.web !== "#" && proj.web !== "" && proj.title !== "Online Exam Platform" && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={proj.web}
                            onClick={(e) => e.stopPropagation()}
                            className={secondaryLinkClass}
                            title="Web"
                        >
                            <Globe size={compact ? 12 : 14} /> {!compact && "Web"}
                        </a>
                    )}
                    {proj.playStore && proj.playStore !== "#" && proj.playStore !== "" && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={proj.playStore}
                            onClick={(e) => e.stopPropagation()}
                            className={secondaryLinkClass}
                            title="Play Store"
                        >
                            <Smartphone size={compact ? 12 : 14} /> {!compact && "Play"}
                        </a>
                    )}
                    {proj.appStore && proj.appStore !== "#" && proj.appStore !== "" && (
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={proj.appStore}
                            onClick={(e) => e.stopPropagation()}
                            className={secondaryLinkClass}
                            title="App Store"
                        >
                            <Apple size={compact ? 12 : 14} /> {!compact && "App Store"}
                        </a>
                    )}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpenDetails();
                        }}
                        className={secondaryLinkClass}
                        title="Details"
                    >
                        <Info size={compact ? 12 : 14} /> {!compact && "Details"}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onCardClick();
                        }}
                        className={runButtonClass}
                    >
                        <Play size={compact ? 11 : 13} className="fill-current" /> {isActive ? "Running" : "Run"}
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
    const webEnabledProjects = projects.filter(
        (project) => project.web && project.web !== "#" && project.web !== ""
    );
    const [activeMobileAppUrl, setActiveMobileAppUrl] = useState<string | null>(null);
    const [activeWebAppUrl, setActiveWebAppUrl] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'grid' | 'web'>('grid');
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const sortedGridProjects = [...projects].sort((a, b) => {
        const aHasPreview = Boolean(a.url || a.web);
        const bHasPreview = Boolean(b.url || b.web);
        return Number(bHasPreview) - Number(aHasPreview);
    });

    const displayedProjects = showAll
        ? sortedGridProjects
        : sortedGridProjects.slice(0, 4);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const appParam = params.get("app");

        if (appParam) {
            const targetApp = projects.find(
                (p) => p.title.toLowerCase().replace(/\s+/g, '-') === appParam.toLowerCase()
            );

            if (targetApp) {
                setTimeout(() => {
                    if (targetApp.url) {
                        openMobileApp(targetApp.url);
                    } else if (targetApp.web) {
                        setViewMode('web');
                        openWebApp(targetApp.web);
                    }
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

    const scrollToPreview = () => {
        setTimeout(() => {
            if (window.innerWidth < 1024 && phoneRef.current) {
                const yOffset = -80;
                const y = phoneRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            } else if (phoneRef.current) {
                phoneRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else if (sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    const openMobileApp = (url: string) => {
        setActiveMobileAppUrl(url);
        setIsLocked(true);
        scrollToPreview();
    };

    const openWebApp = (url: string) => {
        setActiveWebAppUrl(url);
        scrollToPreview();
    };

    const handleProjectClick = (proj: Project) => {
        if (viewMode === 'web') {
            if (proj.web) {
                openWebApp(proj.web);
            }
        } else {
            // In Grid view
            if (proj.url) {
                openMobileApp(proj.url);
            } else if (proj.web) {
                // If it's a web/desktop only project (like Dahab Store)
                setViewMode('web');
                openWebApp(proj.web);
            }
        }
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
                            onClick={() => setViewMode('grid')}
                            className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                            title="Grid View"
                        >
                            <LayoutGrid size={16} /> Grid
                        </button>
                        {webEnabledProjects.length > 0 && (
                            <button
                                onClick={() => {
                                    setViewMode('web');
                                    setActiveWebAppUrl(null);
                                }}
                                className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-mono font-medium transition-all duration-300 ${viewMode === 'web' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`}
                                title="Web View"
                            >
                                <MonitorSmartphone size={16} /> Web
                            </button>
                        )}
                    </div>
                </motion.div>

                {viewMode === 'web' ? (
                    /* ===== WEB VIEW: Full-width WebFrame on top, compact cards row below ===== */
                    <div className="flex flex-col gap-8">
                        {/* WebFrame — Full Width */}
                        <div ref={phoneRef} className="w-full" style={{ perspective: "1200px" }}>
                            <motion.div
                                style={isLocked ? { rotateX: 0, scale: 1, y: 0 } : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }}
                                className="w-full"
                            >
                                <WebFrame
                                    activeUrl={activeWebAppUrl}
                                    onReload={() => setActiveWebAppUrl((url) => (url ? `${url}${url.includes('?') ? '&' : '?'}r=${Date.now()}` : url))}
                                    onClose={() => setActiveWebAppUrl(null)}
                                />
                            </motion.div>
                        </div>

                        {/* Project Cards — Horizontal Row of the 3 Web Projects Only */}
                        <div className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {webEnabledProjects.map((proj, i) => (
                                    <motion.div
                                        key={`web-${proj.title}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.08 }}
                                    >
                                        <ProjectCard
                                            proj={proj}
                                            isActive={activeWebAppUrl === proj.web}
                                            compact
                                            onCardClick={() => handleProjectClick(proj)}
                                            onOpenDetails={() => setSelectedProject(proj)}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ===== GRID VIEW ===== */
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
                        <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {displayedProjects.map((proj, i) => (
                                    <motion.div
                                        key={`grid-${proj.title}`}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                    >
                                        <ProjectCard
                                            proj={proj}
                                            isActive={proj.url ? activeMobileAppUrl === proj.url : activeWebAppUrl === proj.web}
                                            compact
                                            onCardClick={() => handleProjectClick(proj)}
                                            onOpenDetails={() => setSelectedProject(proj)}
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {sortedGridProjects.length > 4 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
                                    <button onClick={() => setShowAll(!showAll)} className="px-6 py-2.5 rounded-full bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 text-sm font-medium backdrop-blur-sm">
                                        {showAll ? 'Show Less' : 'Show More Projects'}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        <div ref={phoneRef} className="w-full lg:w-1/2 lg:sticky lg:top-28 lg:self-start flex justify-center h-fit order-1 lg:order-2 pb-14 lg:pb-0" style={{ perspective: "1200px" }}>
                            <motion.div
                                style={isLocked ? { rotateX: 0, scale: 1, y: 0 } : { rotateX: phoneRotateX, scale: phoneScale, y: phoneY }}
                                className="w-[90vw] max-w-[320px] md:max-w-[360px] lg:max-w-[380px] relative"
                            >
                                <PhoneFrame interactive={isLocked} isLocked={isLocked} glowIntensity={isLocked ? 1 : 0.5}>
                                    <IPhoneContainer
                                        shouldUnlock={isLocked}
                                        activeAppUrl={activeMobileAppUrl}
                                        onAppOpen={setActiveMobileAppUrl}
                                        onAppClose={() => setActiveMobileAppUrl(null)}
                                        apps={projects.filter(p => p.url && p.url !== "")}
                                    />
                                </PhoneFrame>
                                {isLocked && (
                                    <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="absolute -bottom-14 left-0 right-0 mx-auto w-fit px-2.5 h-[52px] bg-black/70 backdrop-blur-2xl rounded-full border border-white/10 flex items-center justify-center shadow-[0_15px_40px_-5px_rgba(0,0,0,0.8)] z-50 pointer-events-auto">
                                        <button onClick={() => { try { const iframe = document.querySelector('iframe'); if (iframe && iframe.contentWindow) { try { iframe.contentWindow.history.back(); } catch (err) { iframe.contentWindow.postMessage('goBack', '*'); } } } catch (e) { console.log("Cannot go back", e); } }} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90" title="Go Back"><ChevronLeft size={22} strokeWidth={2.5} /></button>
                                        <div className="w-[1px] h-4 bg-white/10 mx-2" />
                                        <button onClick={() => setActiveMobileAppUrl(null)} className="w-10 h-10 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all active:scale-90 group" title="Home Screen"><div className="w-[18px] h-[18px] border-[2.5px] border-current rounded-[6px] group-hover:scale-95 transition-transform" /></button>
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
                                        {selectedProject.badge && (
                                            <span className={`inline-flex items-center gap-1 font-mono text-xs font-semibold px-2.5 py-0.5 mt-2 rounded-md border ${selectedProject.badge.includes("Web")
                                                    ? "bg-primary/15 border-primary/30 text-primary"
                                                    : "bg-amber-500/15 border-amber-500/30 text-amber-500 dark:text-amber-400"
                                                }`}>
                                                {selectedProject.badge}
                                            </span>
                                        )}
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
