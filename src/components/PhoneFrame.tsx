import { forwardRef } from "react";

interface PhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  interactive?: boolean;
  glowIntensity?: number;
  isLocked?: boolean;
}

const PhoneFrame = forwardRef<HTMLDivElement, PhoneFrameProps>(
  ({ children, className = "", style, interactive = true }, ref) => {
    return (
      <div ref={ref} className={`relative group ${className}`} style={style}>
        {/* Realistic 3D Floor Shadow & Ambient Color Pedestal Glow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-7 bg-black/80 rounded-[100%] blur-xl pointer-events-none transition-all duration-500 group-hover:w-[95%] group-hover:bg-black/90 group-hover:blur-2xl" />
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-5 bg-gradient-to-r from-primary/40 via-cyan-400/30 to-accent/40 rounded-[100%] blur-lg pointer-events-none opacity-80 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500" />

        {/* Outer Glow & Phone Body Bezel */}
        <div
          className="phone-bezel rounded-[3.2rem] p-[6px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/15 relative transition-all duration-500 group-hover:shadow-[0_30px_70px_-10px_rgba(var(--primary),0.35)] group-hover:border-primary/40"
          style={{ backdropFilter: "blur(12px)" }}
        >
          {/* Inner Screen Container */}
          <div className="relative rounded-[2.8rem] overflow-hidden phone-screen bg-black">
            
            {/* Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-50 w-24 h-5 bg-black/95 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-between px-2.5 pointer-events-none shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700/60 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-500/40" />
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>

            {/* Bottom Gesture Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-50 w-28 h-1 bg-white/40 rounded-full pointer-events-none" />

            {/* Screen Content — 9:19 Aspect Ratio */}
            <div className="relative w-full aspect-[9/19] overflow-hidden">
              <div
                className="w-full h-full"
                style={{ pointerEvents: interactive ? "auto" : "none" }}
              >
                {children}
              </div>
            </div>

          </div>
        </div>

        {/* Side Buttons (Metallic Finish) */}
        <div className="absolute right-[-3px] top-[18%] w-[3px] h-[8%] rounded-r-sm bg-slate-700/80 border-r border-white/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[14%] w-[3px] h-[4%] rounded-l-sm bg-slate-700/80 border-l border-white/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[21%] w-[3px] h-[7%] rounded-l-sm bg-slate-700/80 border-l border-white/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[30%] w-[3px] h-[7%] rounded-l-sm bg-slate-700/80 border-l border-white/10 pointer-events-none" />
      </div>
    );
  }
);

PhoneFrame.displayName = "PhoneFrame";

export default PhoneFrame;
