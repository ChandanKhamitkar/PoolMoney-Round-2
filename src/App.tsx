'use client';

import FreeCoins from './components/freeCoins/FreeCoins';
import Goal from './components/goal/Goal';
import Marquee from './components/marquee/Marquee';
import { useRef } from 'react';
import { useGsapEffect } from './hooks/useGsapEffect';
import { appAnimation } from './animations/app/appAnimation';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollContext } from './context/ScrollContext';

if (typeof window !== 'undefined') {
  console.log("Initializing gsap");
  gsap.registerPlugin(ScrollTrigger);
  console.log("plugin registered :: gsap");
}

function App() {
  const preLoaderRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const locoScroll = useRef<LocomotiveScroll | null>(null);

  useGsapEffect(() => {
    const cleanup = appAnimation(preLoaderRef, scrollRef, locoScroll);

    // Resize handler
    const handleResize = () => {
      if (locoScroll.current) {
        locoScroll.current.update();
        console.log("locomotive update is called");
        ScrollTrigger.refresh();
        console.log("scrolltrigger referesh is called");
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <ScrollContext.Provider value={{ scrollContainerRef: scrollRef }}>
      <div
        ref={preLoaderRef}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-pool-primary backdrop-blur-lg"
      >
        <div className="flex flex-col items-center">
          <img
            src="/gold-rupee-coin.png"
            alt="BillBot Image"
            className="w-32 h-32 animate-bounce"
          />
          <p className="mt-4 text-lg font-semibold text-white">Pooling in PoolMoney</p>
        </div>
      </div>

      <div id="main-scroll" data-scroll-container ref={scrollRef}>
        <FreeCoins />
        <Marquee />
        <Goal />
      </div>
    </ScrollContext.Provider>
  );
}

export default App;
