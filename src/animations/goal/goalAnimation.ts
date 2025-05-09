import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export const goalAnimation = (
  refContainer: any,
  refSlate: any,
  scroller: HTMLElement
) => {
  const tween = gsap.to(refSlate.current, {
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
      scroller: scroller,
    },
  });

  return () => {
    if (tween.scrollTrigger) {
      tween.scrollTrigger.kill();
    }
    tween.kill();
  };
};
