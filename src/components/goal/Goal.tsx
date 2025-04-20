import { FaCircleCheck } from "react-icons/fa6";
import StoreBadges from "./StoreBadges";
import { useRef } from "react";
import { useGsapEffect } from "../../hooks/useGsapEffect";
import { blurReveal } from "../../animations/shared/blurReveal";
import { goalAnimation } from "../../animations/goal/goalAnimation";

export default function Goal() {
    const phoneRef = useRef<HTMLImageElement>(null);
    const goalContainerRef = useRef<HTMLDivElement>(null);
    const goalSlateRef = useRef<HTMLDivElement>(null);

    useGsapEffect(() => {
        blurReveal(phoneRef);
        goalAnimation(goalContainerRef, goalSlateRef);
    });

    return (
        <div
            ref={goalContainerRef}
            className='w-screen h-screen min-h-screen bg-white px-6 sm:px-10 lg:px-20 py-10 lg:py-0 flex flex-col lg:flex-row justify-between items-center relative overflow-clip select-none'>

            <PopItems />

            {/* Left Section */}
            <LeftGoalSection />

            {/* Right Section */}
            <img ref={phoneRef} src="/phones.png" alt="Phone mockup preview" className="h-[80%] object-cover 2xl:h-[90%] z-10 self-end lg:self-auto" />

            {/* Slate */}
            <div ref={goalSlateRef} className="absolute inset-0 w-full h-full opacity-0 bg-pool-primary "></div>

            {/* Gold Coin */}
            <img src="/gold-rupee-coin.png" alt="BillBot Image" className="w-16 sm:w-24 h-16 sm:h-24 animate-bounce absolute bottom-10 right-10" />
        </div>
    )
};

const PopItems = () => {
    return (
        <>
            <img src="/circle.png" alt="Circle" className="absolute bottom-0 transform scale-y-[-1] lg:hidden lg:top-0 right-0 h-1/3 lg:h-1/2 2xl:h-3/4 blur-xs" />
            <img src="/circle.png" alt="Circle" className="absolute bottom-0 transform hidden lg:block lg:top-0 right-0 h-1/3 lg:h-1/2 2xl:h-3/4 blur-xs" />
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-b from-pool-primary/0 to-pool-primary blur-lg opacity-50 shadow-lg rotate-45 "></div>
        </>
    )
}

const LeftGoalSection = () => {
    const infoRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);
    useGsapEffect(() => {
        blurReveal(infoRef);
        blurReveal(titleRef);
        blurReveal(subTextRef);
    })
    return (
        <div className="w-full lg:w-[80%] xl:w-1/2 flex justify-start items-start flex-col space-y-4">

            {/* Info */}
            <div ref={infoRef} className="flex justify-start items-center space-x-2">
                <FaCircleCheck className="text-pool-primary" />
                <p className="text-black font-semibold">Trusted by 5K+ users</p>
            </div>

            {/* Title */}
            <p ref={titleRef} className="text-pool-primary text-4xl mobile-md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-14 mobile-md:leading-12 xl:leading-20 text-nowrap">Set Goal &<br />Get upto <span className="">10% off</span></p>
            {/* <p ref={titleRef} className="text-pool-primary text-5xl mobile-md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-14 mobile-md:leading-16 xl:leading-24 text-nowrap">Plan. Save. <br />Earn Rewards.</p> */}

            {/* Subtext */}
            <p ref={subTextRef} className="text-[#5F5CBF] text-xl md:text-2xl lg:text-3xl font-semibold text-wrap">Plan. Save. Earn Rewards.</p>
            {/* <p ref={subTextRef} className="text-[#5F5CBF] text-xl md:text-2xl lg:text-3xl font-semibold">Get up to <span className="text-3xl md:text-4xl font-bold">10% off</span> <br />when you save for your dreams</p> */}

            {/* PlayStore + Apple Store */}
            <StoreBadges />
        </div>
    )
}
