import gsap from "gsap";

export const goalAnimation = (refContainer: any, refSlate: any) => {
  return gsap.to(refSlate.current, {
    opacity: 1,
    zIndex: 100,
    duration: 0.2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: refContainer.current,
      start: "top top",
      end: "+=300px",
      scrub: 0.5,
      toggleActions: "play reverse play reverse",
      scroller: document.querySelector("[data-scroll-container]"),
    },
  });
};
