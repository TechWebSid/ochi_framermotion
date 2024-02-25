import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl  rounded-tr-3xl bg-[#004D43]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap gap-10'>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-16'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-16'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 10 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk"] font-semibold pt-10 -mb-16'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
