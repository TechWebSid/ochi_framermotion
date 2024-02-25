import { motion } from "framer-motion";
import React from "react";

const Featured = () => {
    return (
      <div className='w-full py-32 '>
        <div className='w-full px-16 border-b-[1px] border-zinc-500 pb-16'>
          <h1 className='text-6xl font-["Neue_Montreal"]'>Featured Projects</h1>
        </div>
  
        <div className='px-20'>
          <div className="cards flex w-full gap-10 mt-10">
            <motion.div
              className="card-container w-1/2 h-[75vh] overflow-hidden"
              whileHover={{ scale: 0.95 }} // Decrease the scale of the card container on hover
              transition={{ ease: [0.33, 1, 0.68, 1],duration:0.8 }}
            >
              <div className='card w-full h-full rounded-xl bg-blue-400 overflow-hidden '>
                <motion.img
                  className='w-full h-full bg-cover'
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                  alt=""
                  whileHover={{ scale: 1.09 }} // Slightly increase the scale of the image on hover
                  transition={{ ease: [0.12, 0, 0.39, 0],duration:0.8 }}
                />
              </div>
            </motion.div>
            <motion.div
              className="card-container w-1/2  h-[75vh] overflow-hidden"
              whileHover={{ scale: 0.95 }} // Decrease the scale of the card container on hover
              transition={{ ease: [0.33, 1, 0.68, 1],duration:0.8 }}
            
            >
              <div className='card w-full h-full rounded-xl bg-blue-400 overflow-hidden'>
                <motion.img
                  className='w-full h-full bg-cover'
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                  alt=""
                  whileHover={{ scale: 1.09 }} // Slightly increase the scale of the image on hover
                  transition={{ease: [0.12, 0, 0.39, 0],duration:0.8}}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Featured;