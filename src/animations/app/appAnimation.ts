import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const appAnimation = (refPreLoader: any, refScrollRef: any, reflocolScroll: any) => {
  return appFun(refPreLoader, refScrollRef, reflocolScroll);
};

const appFun = (refPreLoader: any, refScrollRef: any, reflocolScroll: any) => {
  // Initial setup
  gsap.set(refScrollRef.current, {
    autoAlpha: 0,
  });

  // PreLoader animation
  const handleComplete = () => {
    const t1 = gsap.timeline();
    t1.to(refPreLoader.current, {
      duration: 0.8,
      autoAlpha: 0,
      ease: "power2.inOut",
    }).to(
      refScrollRef.current,
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: "power2.inOut",
      },
      "-=0.4"
    );
  };

  // Initialize on load
  if (document.readyState === "complete") {
    handleComplete();
  } else {
    window.addEventListener("load", handleComplete, { once: true });
  }

  // Initialize LocomotiveScroll
  if (refScrollRef.current) {
    // Create new instance
    reflocolScroll.current = new LocomotiveScroll({
      el: refScrollRef.current,
      smooth: true,
      lerp: 0.1,
      getDirection: true,
      smartphone: {
        smooth: true,
      }
    });

    // Set up ScrollTrigger
    // Update ScrollTrigger when locomotive scroll updates
    reflocolScroll.current.on("scroll", ScrollTrigger.update);

    // Define scroll proxy
    ScrollTrigger.scrollerProxy(refScrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? reflocolScroll.current.scrollTo(value, 0, 0)
          : reflocolScroll.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // @ts-ignore
      pinType: refScrollRef.current.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.addEventListener("refresh", () => reflocolScroll.current.update());
    
    // Force refresh all ScrollTriggers
    ScrollTrigger.refresh();
  }

  // Return cleanup function
  return () => {
    if (reflocolScroll.current) reflocolScroll.current.destroy();
    ScrollTrigger.removeEventListener("refresh", () => reflocolScroll.current?.update());
  };
};