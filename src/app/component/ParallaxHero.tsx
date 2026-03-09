import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';

import imgSun from 'figma:asset/299cf9436ffa06d40194aa2030182ea4db624fb8.png';
import imgM1 from 'figma:asset/9f34a9d4bb3525a69b0f22bd4d9bb00c37de8410.png';
import imgM2 from 'figma:asset/f6f94a98cde8add1dc563754caf6af2813894314.png';
import imgM3 from 'figma:asset/afb6672f1fbaac7419109a28b087cf4c93680f1c.png';
import imgM4 from 'figma:asset/0da6126c11795a12a3e4f052618fe877062b08ec.png';
import imgFlamingo from 'figma:asset/15a6c17f46a8ebf3e0c4814eaf76c177b41c71ce.png';
import imgRipples from 'figma:asset/7ea7511919ae0e388b7bd5c9e1c76bae454a0dda.png';
import imgLeaves from 'figma:asset/990190fb4ac9d5046bde969e09c0af14acc7795b.png';

export function ParallaxHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const ySun = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yM1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yM2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yM3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yM4 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yFlamingo = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const yRipples = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const yLeaves = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-[#FFF8E7]">
      {/* 
        Cover container that maintains aspect ratio 1920/1037 and covers the screen.
      */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
        style={{
          width: 'max(100vw, 100vh * (1920 / 1037))',
          height: 'max(100vh, 100vw * (1037 / 1920))',
        }}
      >
        <motion.img 
          style={{ y: ySun, width: '100%', height: '99.903%', left: '0%', top: '0.096%' }} 
          src={imgSun} className="absolute z-0" alt="" 
        />
        
        {/* Text behind mountains */}
        <motion.div style={{ y: yText }} className="absolute inset-0 flex flex-col items-center justify-center z-[5] pointer-events-none pb-48">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-7xl md:text-9xl font-extrabold text-[#5A3E7A] tracking-tighter mix-blend-multiply opacity-80"
          >
            WELCOME.
          </motion.h1>
        </motion.div>

        <motion.img 
          style={{ y: yM1, width: '48.489%', height: '26.808%', left: '19.739%', top: '36.644%' }} 
          src={imgM1} className="absolute z-10" alt="" 
        />
        <motion.img 
          style={{ y: yM2, width: '47.395%', height: '29.026%', left: '28.229%', top: '41.562%' }} 
          src={imgM2} className="absolute z-20" alt="" 
        />
        <motion.img 
          style={{ y: yM3, width: '48.958%', height: '21.986%', left: '22.239%', top: '41.562%' }} 
          src={imgM3} className="absolute z-30" alt="" 
        />
        <motion.img 
          style={{ y: yM4, width: '100%', height: '64.898%', left: '0%', top: '25.940%' }} 
          src={imgM4} className="absolute z-40" alt="" 
        />
        <motion.img 
          style={{ y: yFlamingo, width: '52.916%', height: '49.662%', left: '19.739%', top: '47.540%' }} 
          src={imgFlamingo} className="absolute z-50" alt="" 
        />
        <motion.img 
          style={{ y: yRipples, width: '31.093%', height: '19.382%', left: '29.791%', top: '74.927%' }} 
          src={imgRipples} className="absolute z-60" alt="" 
        />
        <motion.img 
          style={{ y: yLeaves, width: '100%', height: '95.371%', left: '0%', top: '4.628%' }} 
          src={imgLeaves} className="absolute z-70" alt="" 
        />

      </div>

      {/* Category Buttons below the foreground elements */}
      <div className="absolute bottom-8 md:bottom-10 left-0 right-0 z-[100] flex flex-wrap justify-center gap-4 px-6">
        <Link to="/category/recipe" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#FF8C9D]/90 transition-all border border-white/20 font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1">Recipes</Link>
        <Link to="/category/formula" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-[#FFD166]/90 transition-all border border-white/20 font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 hover:text-[#1A2634]">Formulas</Link>
        <Link to="/category/note" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-purple-400/90 transition-all border border-white/20 font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1">Notes</Link>
        <Link to="/category/activity" className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-400/90 transition-all border border-white/20 font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1">Activities</Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1A2634] via-[#1A2634]/50 to-transparent z-[90] pointer-events-none" />
    </div>
  )
}
