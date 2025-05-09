import GoalCard, { IconName } from "./GoalCard";
import { goalsList } from "../../utils/marquee/data";
import { useRef } from "react";
import { useGsapEffect } from "../../hooks/useGsapEffect";
import { marqueeAnimation } from "../../animations/marquee/marqueeAnimation";
import { useScrollContext } from "../../context/ScrollContext";

export default function Marquee() {
    const marqueeContainerRef = useRef<HTMLDivElement>(null);
    const marqueeTitleRef = useRef<HTMLParagraphElement>(null);
    const { scrollContainerRef } = useScrollContext();

    useGsapEffect(() => {
        if (!scrollContainerRef.current) return;
        marqueeAnimation(marqueeContainerRef, marqueeTitleRef, scrollContainerRef.current);
        console.log("ref received from container : marquee", scrollContainerRef.current);
    });

    return (
        <div
            ref={marqueeContainerRef}
            data-scroll-section
            className="w-screen h-screen min-h-screen bg-pool-primary relative overflow-clip select-none">

            {/* Blur Spheres*/}
            <BgGlow />

            {/* Main Content */}
            <div className="relative z-10 w-full h-full inset-0 backdrop-blur-2xl flex flex-col justify-center items-center text-center">
                <p ref={marqueeTitleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">2000+ Goals <br /> You can save for</p>
                <ScrollingGoals />
            </div>
        </div>
    );
}

const BgGlow = () => {
    return (
        <>
            <div className="absolute w-32 h-32 bg-gradient-to-t from-white to-pool-primary opacity-40 rounded-full top-[10%] left-[5%] pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] bg-gradient-to-t from-white to-pool-primary opacity-30 rounded-full -top-2 -right-4 pointer-events-none" />
            <div className="absolute w-[100px] h-[100px] bg-gradient-to-t from-white to-pool-primary opacity-20 rounded-full top-[10%] right-[4%] pointer-events-none" />
            <div className="absolute w-[50px] h-[50px] bg-white opacity-20 rounded-full bottom-[7%] left-[8%] pointer-events-none" />
            <div className="absolute w-[80px] h-[80px] bg-white opacity-20 rounded-full bottom-[12%] right-[8%] pointer-events-none" />
            <div className="absolute w-[250px] h-[250px] bg-white opacity-20 rounded-full top-1/2 -translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        </>
    )
}

const ScrollingGoals = () => {
    return (
        <div className="mt-10 space-y-6 w-full h-fit overflow-hidden py-6 relative">

            {/* Fade Left */}
            <div className="absolute left-0 top-0 h-full w-48 z-20 pointer-events-none blur-xl bg-gradient-to-r from-pool-primary via-pool-primary/40 to-transparent" />

            {/* Fade Right */}
            <div className="absolute right-0 top-0 h-full w-48 z-20 pointer-events-none blur-xl bg-gradient-to-l from-pool-primary via-pool-primary/40 to-transparent" />

            {/* Row 1 */}
            <div className="scroll-left">
                {[...goalsList, ...goalsList].map((item, index) => (
                    <GoalCard label={item.label} icon={item.iconName as IconName} key={`left-${index}`} />
                ))}
            </div>

            {/* Row 2 */}
            <div className="scroll-right">
                {[...goalsList, ...goalsList].map((item, index) => (
                    <GoalCard label={item.label} icon={item.iconName as IconName} key={`right-${index}`} />
                ))}
            </div>
        </div>
    );
};
