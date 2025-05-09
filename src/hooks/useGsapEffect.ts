import { useEffect } from "react";
import gsap from "gsap";

export const useGsapEffect = (animationFunction : any, deps = []) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            const cleanup = animationFunction();  
            if(typeof cleanup === "function"){
                return () => cleanup();
            }
        });
        return () => ctx.revert()
    }, deps);
}