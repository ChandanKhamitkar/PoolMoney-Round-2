import { FaCircleCheck } from "react-icons/fa6";
import StoreBadges from "./StoreBadges";

export default function Goal() {
    return (
        <div className='w-screen h-screen min-h-screen bg-white px-20 flex justify-between items-center relative overflow-clip'>

            <PopItems/>
            
            {/* Left Section */}
            <LeftGoalSection />

            {/* Right Section */}
            <img src="/phones.png" alt="Phone mockup preview" className="h-[90%] z-10" />
        </div>
    )
};

const PopItems = () => {
    return (
        <>
            <img src="/circle.png" alt="Circle" className="absolute top-0 right-0 h-3/4 blur-xs" />
            <div className="absolute bottom-0 left-0 transform translate-y-1/2 w-[300px] h-[300px] rounded-full bg-gradient-to-b from-[#4C42FD 00] to-[#4C42FD] blur-lg opacity-40 shadow-lg rotate-45 "></div>
        </>
    )
}

const LeftGoalSection = () => {
    return (
        <div className="w-1/2 flex justify-center items-start flex-col space-y-4">

            {/* Info */}
            <div className="flex justify-start items-center space-x-2">
                <FaCircleCheck className="text-[#4C42FD]" />
                <p className="text-black font-semibold">Trusted by 5K+ users</p>
            </div>

            {/* Title */}
            <p className="text-[#4C42FD] text-8xl font-bold leading-24">Plan. Save. <br />Earn Rewards.</p>

            {/* Subtext */}
            <p className="text-[#5F5CBF] text-3xl font-semibold">Get up to <span className="text-4xl font-bold">10% off</span> <br />when you save for your dreams</p>

            {/* PlayStore + Apple Store */}
            <StoreBadges />
        </div>
    )
}
