"use client";

import { useState } from "react";
import Image from "next/image";
import asjal from "../../../../public/home-image/pp2.jpg";
import { motion } from "framer-motion";
import Title from "./Title";
import Buttons from "./Buttons";

const HomePage = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  return (
    <main className="h-screen w-screen max-w-screen-2xl flex items-center justify-center overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">

        <motion.div className="relative flex flex-col lg:flex-row justify-between items-center w-[95%] h-[75%] mt-20 max-w-screen-2xl">

          {/* Image Div  */}
          <motion.div
            initial={{ opacity: 0, x: 400, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%] order-first lg:order-last mb-8 lg:mb-0"
            onAnimationComplete={() => setTriggerAnimation(true)}
          >
            <Image
              src={asjal}
              alt="Asjal Image"
              className="shadow-2xl rounded-full border-2 border-gray-600 hover:border-cyan-400 transition-all duration-300"
              priority
            />
          </motion.div>

          <motion.div className="flex flex-col text-center lg:text-start xs:items-center lg:items-start order-last lg:order-first">
            <Title />
            <Buttons />
          </motion.div>

        </motion.div>
    </main>
  );
};

export default HomePage;