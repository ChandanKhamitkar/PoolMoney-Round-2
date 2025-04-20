import FreeCoins from './components/freeCoins/FreeCoins'
import Goal from './components/goal/Goal'
import Marquee from './components/marquee/Marquee'
import { useRef } from 'react';
import { useGsapEffect } from './hooks/useGsapEffect';
import { appAnimation } from './animations/app/appAnimation';

function App() {
  const preLoaderRef = useRef(null);
  const scrollRef = useRef(null);
  const locoScroll = useRef<any>(null);

  useGsapEffect(() => {
    appAnimation(preLoaderRef, scrollRef, locoScroll);
  });

  return (
    <>
      {/* Pre-loader */}
      <div
        ref={preLoaderRef}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-pool-primary backdrop-blur-lg">
        <div className="flex flex-col items-center">
          <img src="/gold-rupee-coin.png" alt="BillBot Image" className="w-32 h-32 animate-bounce" />
          <p className={`mt-4 text-lg font-semibold text-white`}>Pooling in PoolMoney</p>
        </div>
      </div>
      
      <div id="main-scroll" data-scroll-container ref={scrollRef}>
        <Goal />
        <Marquee />
        <FreeCoins />
      </div>
    </>
  )
}

export default App
