import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const registerGsapPlugins = () => {
  gsap.registerPlugin(ScrollTrigger);
};
