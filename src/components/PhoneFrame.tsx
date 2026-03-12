import { forwardRef, useState } from "react";

interface PhoneFrameProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  interactive?: boolean;
  glowIntensity?: number;
  isLocked?: boolean;
}

const PhoneFrame = forwardRef<HTMLDivElement, PhoneFrameProps>(
  ({ children, className = "", style, interactive = true, glowIntensity = 0, isLocked = false }, ref) => {
    return (
      <div ref={ref} className={`relative ${className}`} style={style}>
        {/* Phone body — clean CSS bezel, no notch */}
        <div
          className="phone-bezel rounded-[3rem] p-[5px] shadow-2xl shadow-background/80 relative"
          style={{ backdropFilter: "blur(8px)" }}
        >
          <div className="relative rounded-[2.7rem] overflow-hidden phone-screen bg-black">
            {/* Screen — 9:19 aspect ratio (realistic smartphone) */}
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

        {/* Side buttons — percentage-based so they scale with frame */}
        <div className="absolute right-[-3px] top-[18%] w-[3px] h-[8%] rounded-r-sm bg-foreground/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[15%] w-[3px] h-[5%] rounded-l-sm bg-foreground/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[22%] w-[3px] h-[8%] rounded-l-sm bg-foreground/10 pointer-events-none" />
        <div className="absolute left-[-3px] top-[32%] w-[3px] h-[8%] rounded-l-sm bg-foreground/10 pointer-events-none" />
      </div>
    );
  }
);

PhoneFrame.displayName = "PhoneFrame";

export default PhoneFrame;
