import { FaStar } from "react-icons/fa";

export default function StoreBadges() {
    return(
        <div className="flex justify-start items-center mt-4 space-x-4">
                    {/* PlayStore */}
                    <div className="bg-black px-2 py-1 rounded-lg flex space-x-3 cursor-pointer">
                        <img src="/playstore.png" alt="Playstore Icon" className="w-7 object-contain" />
                        <p className="flex flex-col justify-start items-start text-white">
                            <span className="flex justify-center items-center text-xs font-semibold mb-0">
                                4.8
                                <FaStar className="ml-2 size-3" />
                            </span>
                            <span className="text-base font-medium">
                                Google Play
                            </span>
                        </p>
                    </div>

                    {/* Apple Store */}
                    <div className="bg-black px-2 py-1 rounded-lg flex space-x-3 justify-center items-center cursor-pointer">
                    <img src="/appstore.png" alt="Playstore Icon" className="w-7 object-contain" />
                        <p className="flex flex-col justify-start items-start text-white">
                            <span className="text-xs mb-0">
                                Get it on
                            </span>
                            <span className="text-base font-medium">
                                App Store
                            </span>
                        </p>
                    </div>
                </div>
    );
};
