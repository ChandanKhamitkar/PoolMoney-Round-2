import { useEffect } from "react";
import gsap from "gsap";

export const useGsapEffect = (animationFunction : any, deps = []) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            animationFunction();  
        });
        return () => ctx.revert()
    }, deps);
}