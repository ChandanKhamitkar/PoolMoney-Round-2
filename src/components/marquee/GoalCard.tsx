import { FiMonitor, FiSmartphone } from 'react-icons/fi';
import { MdTravelExplore } from 'react-icons/md';
import { FaGem, FaGamepad } from 'react-icons/fa';

interface CardProps {
  label: string;
  icon: IconName;
}

export type IconName = 'electronics' | 'iphone' | 'travel' | 'luxury' | 'gadgets';

const iconMap= {
  electronics: <FiMonitor className="text-3xl text-pool-primary" />,
  iphone: <FiSmartphone className="text-3xl text-pool-primary" />,
  travel: <MdTravelExplore className="text-3xl text-pool-primary" />,
  luxury: <FaGem className="text-3xl text-pool-primary" />,
  gadgets: <FaGamepad className="text-3xl text-pool-primary" />,
};

export default function Card({ label, icon }: CardProps) {
  return (
    <div className="min-w-40 min-h-40 rounded-2xl bg-white/20 backdrop-blur-lg text-pool-primary flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer border border-pool-primary/30">
      <div className="mb-2">{iconMap[icon]}</div>
      <p className="text-base font-medium">{label}</p>
      <span className="text-md mt-2 bg-pool-primary/10 px-3 py-1 rounded-full text-pool-primary font-semibold tracking-wide">10% OFF</span>
    </div>
  );
}

