import gsap from "gsap";

export const freeCoinsAnimation = (
  refContainer: any,
  refLeft: any,
  refBottom: any
) => {
  return freeCoinsFun(refContainer, refLeft, refBottom);
};

const freeCoinsFun = (refContainer: any, refLeft: any, refBottom: any) => {
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: refContainer.current,
      start: "top center",
      toggleActions: "play reverse play reverse",
    },
  });

  mainTimeline.fromTo(
    [refLeft.current, refBottom.current],
    {
      opacity: 0,
      y: 50,
      scale: 0.9,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power3.out",
    }
  );

  return () => {
    mainTimeline.scrollTrigger?.kill();
    mainTimeline.kill();
  };
};
