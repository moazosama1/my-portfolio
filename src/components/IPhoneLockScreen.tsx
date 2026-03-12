import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }).replace(/^0/, '');
            setCurrentTime(timeString);

            // Date (e.g., Friday, 25 October)
            const dateString = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
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
                    className="absolute inset-0 z-50 w-full h-full overflow-hidden text-white font-sans flex flex-col items-center justify-between py-10"
                >
                    {/* Wallpaper Image or Gradient */}
                    <div
                        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"
                    />
                    <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />

                    {/* Top Section: Time & Date */}
                    <div className="relative z-10 flex flex-col items-center mt-6">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg font-medium opacity-90 shadow-sm"
                        >
                            {currentDate}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[80px] font-bold leading-none tracking-tight -mt-2 drop-shadow-md"
                        >
                            {currentTime}
                        </motion.div>
                    </div>

                    {/* Bottom Section: Swipe indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="relative z-10 flex flex-col items-center gap-2 mb-2"
                    >
                        <span className="text-xs font-medium tracking-widest opacity-80 uppercase drop-shadow-sm">Swipe up to break into</span>
                        <div className="w-32 h-1 bg-white rounded-full shadow-lg" />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IPhoneLockScreen;
