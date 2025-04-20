import gsap from "gsap";

export const blurReveal = (refCom: any) => {
  return gsap.fromTo(
    refCom.current,
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
};
