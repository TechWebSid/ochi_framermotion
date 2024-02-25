import React from "react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
      <div className="text-struc mt-48 px-20 ">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="flex  w-fit">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "139px" }}
                    transition={{ ease: [0.12, 0, 0.39, 0],duration:1.3 }}
                    className="w-[139px] h-[6.1vw] relative -top-[1vw] mr-5 bg-red-500"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className='text-[139px] font-["Founders_Grotesk"] leading-[112px]  font-bold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-600 mt-14 flex justify-between items-center px-20 py-7 ">
        {[
          "For public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light tracking-tight leading-none">
              {item}
            </p>
          );
        })}
        <div className="start ">
          <div className="rounded-full px-5 py-2  hover:bg-black transition-all uppercase text-md border-[2px] border-zinc-600">
            {" "}
            Start the project
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
