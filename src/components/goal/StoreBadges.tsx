import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import { registerGsapPlugins } from "../../animations/gsapConfig";
import { blurReveal } from "../../animations/shared/blurReveal";
import { useGsapEffect } from "../../hooks/useGsapEffect";

if (typeof window !== "undefined") {
    registerGsapPlugins();
}
export default function StoreBadges() {
    const badgesRef = useRef(null);
    useGsapEffect(() => {
        blurReveal(badgesRef);

    })
    return (
        <div
            ref={badgesRef}
            className="w-max md:w-auto flex flex-col md:flex-row justify-start items-start md:items-center mt-4 space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            {/* PlayStore */}
            <div className="bg-black px-2 py-1 rounded-md sm:rounded-lg flex space-x-3 cursor-pointer">
                <img src="/playstore.png" alt="Playstore Icon" className="w-5 sm:w-7 object-contain" />
                <p className="flex flex-col justify-start items-start text-white">
                    <span className="flex justify-center items-center text-xs sm:text-xs font-semibold mb-0">
                        4.8
                        <FaStar className="ml-2 size-3" />
                    </span>
                    <span className="text-sm sm:text-base font-medium">
                        Google Play
                    </span>
                </p>
            </div>

            {/* Apple Store */}
            <div className="w-full md:w-fit bg-black px-2 py-1 rounded-md sm:rounded-lg flex space-x-3 justify-start items-center cursor-pointer">
                <img src="/appstore.png" alt="Playstore Icon" className="w-5 sm:w-7 object-contain" />
                <p className="flex flex-col justify-start items-start text-white">
                    <span className="text-xs mb-0">
                        Get it on
                    </span>
                    <span className="text-sm sm:text-base font-medium tracking-wide">
                        App Store
                    </span>
                </p>
            </div>
        </div>
    );
};
