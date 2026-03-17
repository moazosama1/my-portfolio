import { useState, useEffect } from "react";
import IPhoneHomeScreen from "./IPhoneHomeScreen";
import IPhoneLockScreen from "./IPhoneLockScreen";

interface IPhoneContainerProps {
    shouldUnlock: boolean;
    activeAppUrl?: string | null;
    onAppOpen?: (url: string) => void;
    onAppClose?: () => void;
    apps?: any[];
}

const IPhoneContainer = ({ shouldUnlock, activeAppUrl, onAppOpen, onAppClose, apps }: IPhoneContainerProps) => {
    const [isUnlocked, setIsUnlocked] = useState(false);

    useEffect(() => {
        // If there's an active app URL that is valid, unlock the phone to show it.
        // Otherwise, keep it locked to show the "Projects Locked" overlay.
        if (activeAppUrl && activeAppUrl !== "" && activeAppUrl !== "#") {
            setIsUnlocked(true);
        } else {
            setIsUnlocked(false);
        }
    }, [shouldUnlock, activeAppUrl]);

    return (
        <div className="relative w-full h-full bg-black overflow-hidden font-sans rounded-[2.7rem]">
            {/* Home screen is always rendered underneath */}
            <IPhoneHomeScreen
                activeAppUrl={activeAppUrl}
                onAppOpen={onAppOpen}
                onAppClose={onAppClose}
                appsData={apps}
            />

            {/* Lock screen overlays it and animates out when unlocked */}
            <IPhoneLockScreen isUnlocked={isUnlocked} />
        </div>
    );
};

export default IPhoneContainer;
