import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const appAnimation = (
  refPreLoader: any,
  refScrollRef: any,
  reflocolScroll: any
) => {
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
        onComplete: initLocomotiveScroll, // Initialize after reveal animation
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

  // Function to properly initialize Locomotive and ScrollTrigger
  function initLocomotiveScroll() {
    if (!refScrollRef.current) return;

    // Kill any existing instances first
    if (reflocolScroll.current) {
      reflocolScroll.current.destroy();
    }

    // Create new instance
    reflocolScroll.current = new LocomotiveScroll({
      el: refScrollRef.current,
      smooth: true,
      lerp: 0.1,
    });

    // Set up ScrollTrigger
    ScrollTrigger.defaults({ scroller: refScrollRef.current });

    // Update ScrollTrigger when locomotive scroll updates
    reflocolScroll.current.on("scroll", ScrollTrigger.update);

    // Define scroll proxy
    ScrollTrigger.scrollerProxy(refScrollRef.current, {
      scrollTop(value) {
        if (reflocolScroll.current) {
          return arguments.length
            ? reflocolScroll.current.scrollTo(value, {
                duration: 0,
                disableLerp: true,
              })
            : reflocolScroll.current.scroll.instance.scroll.y;
        }
        return 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: refScrollRef.current.style.transform ? "transform" : "fixed",
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.addEventListener("refresh", () => {
      if (reflocolScroll.current) reflocolScroll.current.update();
    });

    // Force refresh all ScrollTriggers
    ScrollTrigger.refresh();
  }

  // Return cleanup function
  return () => {
    if (reflocolScroll.current) {
      reflocolScroll.current.destroy();
    }
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearScrollMemory();
    ScrollTrigger.removeEventListener("refresh", () => {
      if (reflocolScroll.current) reflocolScroll.current.update();
    });
  };
};
