import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Flashlight, Camera, BatteryCharging, Sparkles, ShieldAlert } from "lucide-react";

interface IPhoneLockScreenProps {
  isUnlocked: boolean;
}

const IPhoneLockScreen = ({ isUnlocked }: IPhoneLockScreenProps) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Time (e.g., 9:41)
      const timeString = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).replace(/^0/, "");
      setCurrentTime(timeString);

      // Date (e.g., Friday, 25 October)
      const dateString = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      setCurrentDate(dateString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000 * 60);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatePresence>
      {!isUnlocked && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-50 w-full h-full overflow-hidden text-white font-sans flex flex-col justify-between py-6 px-4 select-none"
        >
          {/* Futuristic Opaque Dark Gradient Wallpaper */}
          <div className="absolute inset-0 z-0 bg-slate-950" />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-emerald-950 to-slate-[#020617] opacity-90" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />

          {/* Top Section: Lock Icon & Time */}
          <div className="relative z-10 flex flex-col items-center mt-6">
            {/* Lock Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-medium tracking-wide text-white/90 mb-2 shadow-sm"
            >
              <Lock size={12} className="text-primary" />
              <span>Projects Locked</span>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-semibold tracking-wider text-white/80 uppercase"
            >
              {currentDate}
            </motion.div>

            {/* Bold iOS 18 Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl sm:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 drop-shadow-lg my-1"
            >
              {currentTime}
            </motion.div>

            {/* Mini Lock Widgets */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 mt-1"
            >
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white/80">
                <BatteryCharging size={12} className="text-emerald-400" />
                <span>100%</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white/80">
                <Sparkles size={12} className="text-amber-400" />
                <span>Flutter 3.x</span>
              </div>
            </motion.div>
          </div>

          {/* Middle Section: iOS Glassmorphic Notification Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 22 }}
            className="relative z-10 w-full max-w-[260px] mx-auto"
          >
            <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/15 p-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-start gap-3">
              <div className="p-2 rounded-xl bg-primary/20 border border-primary/30 text-primary shrink-0">
                <ShieldAlert size={18} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">System Notice</span>
                  <span className="text-[9px] text-white/50 font-mono">now</span>
                </div>
                <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                  Select a project from the left to unlock interactive mobile preview.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Controls (Quick Action Buttons & Home Indicator) */}
          <div className="relative z-10 flex flex-col items-center gap-4 mb-2">
            <div className="w-full flex items-center justify-between px-4">
              <button
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 transition-all active:scale-95"
                aria-label="Flashlight"
              >
                <Flashlight size={16} />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:bg-white/20 transition-all active:scale-95"
                aria-label="Camera"
              >
                <Camera size={16} />
              </button>
            </div>

            {/* Bottom Swipe Indicator Bar */}
            <div className="w-28 h-1 bg-white/60 rounded-full shadow-md" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IPhoneLockScreen;
