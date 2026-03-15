import { useState, useEffect } from "react";
import { ChevronLeft, Lock } from "lucide-react";

interface AppData {
    id?: string;
    title?: string;
    name?: string;
    icon?: string;
    url: string;
}

interface IPhoneHomeScreenProps {
    activeAppUrl?: string | null;
    onAppOpen?: (url: string) => void;
    onAppClose?: () => void;
    appsData?: any[];
}

const IPhoneHomeScreen = ({ activeAppUrl: externalAppUrl, onAppOpen, onAppClose, appsData: externalAppsData }: IPhoneHomeScreenProps) => {
    const [internalAppUrl, setInternalAppUrl] = useState<string | null>(null);
    const activeAppUrl = externalAppUrl !== undefined ? externalAppUrl : internalAppUrl;

    const [currentTime, setCurrentTime] = useState("");
    const apps: AppData[] = externalAppsData || [];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            // Format as H:MM (e.g., 9:41) without leading zero for single digit hours
            const formattedTime = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/^0/, '');
            setCurrentTime(formattedTime);
        };

        updateTime(); // Initial call
        const intervalId = setInterval(updateTime, 1000 * 60); // Update every minute

        return () => clearInterval(intervalId); // Cleanup
    }, []);

    const handleAppClick = (url: string) => {
        if (onAppOpen) onAppOpen(url);
        else setInternalAppUrl(url);
    };

    const closeApp = () => {
        if (onAppClose) onAppClose();
        else setInternalAppUrl(null);
    };

    return (
        <div className="relative w-full h-full bg-slate-900 overflow-hidden font-sans select-none">
            {/* Wallpaper */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800"
                style={{ zIndex: 0 }}
            />

            {/* Home Screen UI */}
            <div
                className={`absolute inset-0 z-10 transition-transform duration-300 ease-in-out ${activeAppUrl != null ? 'scale-[0.9] opacity-0 pointer-events-none' : 'scale-100 opacity-100'
                    }`}
            >
                {/* Status Bar Pseudo */}
                <div className="h-8 w-full flex justify-between px-6 pt-3 text-white text-[10px] font-medium tracking-wide">
                    <span>{currentTime}</span>
                    <div className="flex gap-1 items-center">
                        {/* Signal */}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                            <rect y="6" width="3" height="4" rx="1" />
                            <rect x="4" y="4" width="3" height="6" rx="1" />
                            <rect x="8" y="2" width="3" height="8" rx="1" />
                            <rect x="12" width="3" height="10" rx="1" />
                        </svg>
                        {/* Wifi */}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                            <path d="M7 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM3 6a5.61 5.61 0 0 1 8 0M1 3a8.6 8.6 0 0 1 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {/* Battery */}
                        <div className="w-[18px] h-[9px] border border-white/50 rounded-[3px] p-[1px] relative ml-1">
                            <div className="bg-white h-full w-[80%] rounded-[1px]" />
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-[2px] h-1 bg-white/50 rounded-r-sm" />
                        </div>
                    </div>
                </div>

                {/* App Grid */}
                <div className="grid grid-cols-4 gap-x-2 gap-y-6 px-4 pt-8">
                    {apps.map((app, index) => (
                        <div
                            key={app.id || app.title || index}
                            className="flex flex-col items-center gap-1 cursor-pointer group"
                            onClick={() => handleAppClick(app.url)}
                        >
                            <div className="w-[52px] h-[52px] bg-white rounded-xl overflow-hidden shadow-sm group-active:scale-95 transition-transform flex items-center justify-center p-1">
                                <img
                                    src={app.icon}
                                    alt={app.name || app.title}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                            </div>
                            <span className="text-white text-[10px] font-medium drop-shadow-md truncate w-14 text-center">
                                {app.name || app.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* App Viewer (overlay) */}
            <div
                className={`absolute inset-0 z-20 bg-background transition-transform duration-300 ease-in-out flex flex-col ${activeAppUrl != null ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {activeAppUrl != null && (
                    <div className="flex-1 w-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
                        {/* Background subtle elements */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0" />
                        
                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(var(--primary),0.3)] backdrop-blur-sm">
                                <Lock className="w-8 h-8 text-white/80" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Authentication Required</h3>
                            <p className="text-sm text-white/60 leading-relaxed mb-8 px-4">
                                This project is currently under active development. Live preview will be available soon.
                            </p>
                            
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-2/3 animate-[pulse_2s_ease-in-out_infinite]" />
                            </div>
                            <span className="text-[10px] text-white/40 mt-3 uppercase tracking-widest">Work in Progress</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default IPhoneHomeScreen;
