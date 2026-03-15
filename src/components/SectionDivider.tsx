import { Code2 } from "lucide-react";

const SectionDivider = () => {
    return (
        <div className="w-full flex items-center justify-center relative z-20 -my-6">
            <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-primary/60" />
            <div className="mx-4 p-3 rounded-xl bg-background border border-primary/30 text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)] backdrop-blur-md transform rotate-45 hover:rotate-90 hover:scale-110 transition-all duration-500 relative group">
                <div className="absolute inset-0 bg-primary/10 rounded-xl animate-pulse" />
                <div className="-rotate-45 relative z-10">
                    <Code2 size={20} />
                </div>
            </div>
            <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent via-primary/30 to-primary/60" />
        </div>
    );
};

export default SectionDivider;
