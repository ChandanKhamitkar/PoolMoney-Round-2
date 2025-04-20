import gsap from "gsap";

export const appAnimation = (
  refPreLoader: any,
  refScrollRef: any,
) => {
  return appFun(refPreLoader, refScrollRef);
};

const appFun = (refPreLoader: any, refScrollRef: any) => {
  gsap.set(refScrollRef.current, {
    autoAlpha: 0,
  });

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

  if (document.readyState === "complete") {
    handleComplete();
  } else {
    window.addEventListener("load", handleComplete, { once: true });
  }

  return () => window.removeEventListener("load", handleComplete);
};
