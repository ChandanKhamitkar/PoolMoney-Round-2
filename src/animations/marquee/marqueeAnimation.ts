import gsap from "gsap";

export const marqueeAnimation = (
  refContainer: any,
  refTitle: any,
  scroller: HTMLElement
) => {
  const mainTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: refContainer.current,
      start: "top center",
      toggleActions: "play reverse play reverse",
      scroller: scroller,
    },
  });

  mainTimeline.fromTo(
    refTitle.current,
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
