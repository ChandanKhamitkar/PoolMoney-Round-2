import LocomotiveScroll from 'locomotive-scroll';
import FreeCoins from './components/freeCoins/FreeCoins'
import Goal from './components/goal/Goal'
import Marquee from './components/marquee/Marquee'
import { useEffect, useRef } from 'react';
import gsap from "gsap";
import { registerGsapPlugins } from './animations/gsapConfig';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const preLoaderRef = useRef(null);
  const scrollRef = useRef(null);
  const locoScroll = useRef<any>(null);

  useEffect(() => {
    registerGsapPlugins();

    gsap.set(scrollRef.current, {
      autoAlpha: 0
    });

    const handleComplete = () => {
      const t1 = gsap.timeline();
      t1.to(preLoaderRef.current, {
        duration: 0.8,
        autoAlpha: 0,
        ease: "power2.inOut"
      }).to(scrollRef.current, {
        duration: 0.8,
        autoAlpha: 1,
        ease: "power2.inOut",
      }, "-=0.4");
    };

    if (document.readyState === "complete") {
      handleComplete();
    } else {
      window.addEventListener("load", handleComplete, { once: true });
    }

    // Initialize LocomotiveScroll
    if (scrollRef.current) {
      locoScroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
      });

      locoScroll.current.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.current.scrollTo(value, 0, 0)
            : locoScroll.current.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        // @ts-ignore
        pinType: scrollRef.current.style.transform ? "transform" : "fixed"
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.current.update());
      ScrollTrigger.refresh();
    }

    return () => {
      if (locoScroll.current) locoScroll.current.destroy();
      ScrollTrigger.addEventListener("refresh", () => locoScroll.current?.update());
    };
  }, []);


  return (
    <>
      {/* Pre-loader */}
      <div
        ref={preLoaderRef}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-pool-primary backdrop-blur-lg">
        <div className="flex flex-col items-center">
          <img src="/gold-rupee-coin.png" alt="BillBot Image" className="w-32 h-32 animate-bounce" />
          <p className={`mt-4 text-lg font-semibold text-white`}>Pooling in PoolMoney</p>
        </div>
      </div>
      <div id="main-scroll" data-scroll-container ref={scrollRef}>
        <Goal />
        <Marquee />
        <FreeCoins />
      </div>
    </>
  )
}

export default App
