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
        // Keep the phone locked constantly since projects are under development
        setIsUnlocked(false);
    }, [shouldUnlock, isUnlocked]);

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
