import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const appAnimation = (
  refPreLoader: any,
  refScrollRef: any,
  reflocolScroll: any
) => {
  return appFun(refPreLoader, refScrollRef, reflocolScroll);
};

const appFun = (
  refPreLoader: any,
  refScrollRef: any,
  reflocolScroll: any
) => {
  // Set main scroll container invisible initially
  gsap.set(refScrollRef.current, {
    autoAlpha: 0,
  });

  // PreLoader GSAP animation
  const t1 = gsap.timeline();
  const handleComplete = () => {
    console.log('Running handleComplete to site content');
    t1.to(refPreLoader.current, {
      duration: 0.8,
      autoAlpha: 0,
      ease: 'power2.inOut',
    }).to(
      refScrollRef.current,
      {
        duration: 0.8,
        autoAlpha: 1,
        ease: 'power2.inOut',
      },
      '-=0.4'
    );
  };

  if (document.readyState === 'complete') {
    console.log('site state : COMPLETE');
    handleComplete();
  } else {
    window.addEventListener('load', handleComplete, { once: true });
  }

  // Initialize LocomotiveScroll
  if (refScrollRef.current) {
    const scroll = new LocomotiveScroll({
      el: refScrollRef.current,
      smooth: true,
      lerp: 0.1,
      getDirection: true,
      smartphone: {
        smooth: true,
      },
    });

    // Assign instance to ref
    reflocolScroll.current = scroll;

    // Update ScrollTrigger on LocomotiveScroll scroll
    scroll.on('scroll', ScrollTrigger.update);

    // ScrollTrigger proxy setup
    ScrollTrigger.scrollerProxy(refScrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? reflocolScroll.current?.scrollTo(value, 0, 0)
          : reflocolScroll.current?.scroll.instance.scroll.y || 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: refScrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    // ScrollTrigger refresh event
    const onRefresh = () => reflocolScroll.current?.update();
    ScrollTrigger.addEventListener('refresh', onRefresh);

    // Force a refresh
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      t1.kill();
      scroll.destroy();
      ScrollTrigger.removeEventListener('refresh', onRefresh);
    };
  }

  // Fallback cleanup if scroll not initialized
  return () => {
    t1.kill();
  };
};
