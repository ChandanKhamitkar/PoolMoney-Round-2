import { FaSortUp } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import { useRef } from "react";
import { useGsapEffect } from "../../hooks/useGsapEffect";
import { freeCoinsAnimation } from "../../animations/freecoins/freeCoinsAnimation";


export default function FreeCoins() {
    const freeCoinContainerRef = useRef<HTMLDivElement>(null);
    const leftSectionRef = useRef<HTMLDivElement>(null!);
    const bottomSectionRef = useRef<HTMLDivElement>(null!);

    useGsapEffect(() => {
        freeCoinsAnimation(freeCoinContainerRef, leftSectionRef, bottomSectionRef);
    });

    return (
        <div
            ref={freeCoinContainerRef}
            data-scroll-section
            className="w-screen h-screen min-h-screen flex flex-col lg:flex-row justify-between items-center bg-pool-primary relative overflow-hidden px-10 lg:px-20 py-24 lg:py-0 select-none">

            {/* Navbar */}
            <Navbar />

            {/* Left Section */}
            <LeftSectionCoins leftSectionRef={leftSectionRef} />
            {/* Right Circle + Phone */}
            <BottomCircleSection bottomSectionRef={bottomSectionRef} />
        </div>
    );
}

interface SectionProps {
    leftSectionRef?: React.RefObject<HTMLDivElement>;
    bottomSectionRef?: React.RefObject<HTMLDivElement>;
}

const LeftSectionCoins = ({ leftSectionRef }: SectionProps) => {

    return (
        <div
            ref={leftSectionRef}
            className="w-full lg:max-w-[50%] flex flex-col justify-center space-y-8 z-10">

            {/* Title */}
            <h1 className="text-white text-4xl mobile-sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Get ₹200 coins every month on Pooling Money
            </h1>

            {/* Subtext */}
            <p className="text-gray-200 text-sm mobile-sm:text-lg font-light leading-relaxed tracking-wide">
                For easy money management and to reach your financial goals — start pooling in PoolMoney now.
            </p>

            {/* Users Section */}
            <div className="flex flex-col space-y-3 text-white">
                <div className="flex items-center space-x-6">
                    <img src="/public-avatars.png" alt="User Avatars" className="h-8 mobile-sm:h-10" />

                    <div className="flex items-center space-x-3">
                        <FaSortUp className="text-white size-4" />
                        <p className="text-2xl mobile-sm:text-3xl font-semibold">5,000+</p>
                    </div>
                </div>
                <p className="text-xs mobile-sm:text-sm font-light text-gray-100 max-w-xs">
                    Trusted by thousands of users — PoolMoney is changing lives, one coin at a time.
                </p>
            </div>
        </div>
    )
}

const BottomCircleSection = ({ bottomSectionRef }: SectionProps) => {
    return (
        <div ref={bottomSectionRef}
            className="absolute bottom-0 right-1/2 lg:right-0 translate-x-1/2 lg:translate-x-0 w-[90vw] max-w-[760px] aspect-square z-0">

            {/* Radial glow behind the circle */}
            <div className="absolute w-[150%] h-[150%] left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 bg-white opacity-5 blur-[200px] rounded-full z-[-1] pointer-events-none"></div>

            {/* Filled circle */}
            <div className="absolute w-[92%] h-[92%] bg-white rounded-full left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 shadow-xl blur-[1px]"></div>

            {/* Outer circles */}
            <div className="absolute w-[96%] h-[96%] border border-white/70 rounded-full left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2"></div>
            <div className="absolute w-full h-full border border-white/50 rounded-full left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2"></div>

            {/* Phone */}
            <img
                src="/iPhone.png"
                alt="Preview Phone Mockup"
                className="absolute h-[70%] left-1/2 bottom-0 translate-x-[-50%] translate-y-[10%] drop-shadow-xl"
            />
        </div>
    );
}

