"use client";
import { motion } from "framer-motion";
import asjal2 from "../../../../public/home-image/pp2.jpg";
import React from "react";
import {
  FaAws,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDiscord,
  FaDocker,
} from "react-icons/fa6";
import { TbBrandSnowflake } from "react-icons/tb";
import {
  SiMicrosoftsqlserver,
  SiApacheairflow,
  SiVercel,
  SiApachekafka,
} from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io";
import { VscVscodeInsiders } from "react-icons/vsc";
import AnimateLayout from "./AnimateLayout";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-12 pb-12 pt-10 px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-16 2xl:px-24">
      <div className="flex flex-col gap-14 w-full max-w-screen-2xl min-h-screen items-center justify-center text-center">
        {/* Image div  */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%]"
        >
          <Image
            src={asjal2}
            alt="Asjal Image"
            className="shadow-2xl mt-0 sm:mt-10 rounded-full border-2 border-gray-600 hover:border-cyan-400 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-4xl xs:text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-[font5] tracking-wide uppercase text-cyan-400">
            Asjal Amir
          </h1>
          <p className="font-light text-gray-300 text-xs xs:text-sm sm:text-lg">
            Meet the wizard behind this portfolio
          </p>
        </motion.div>
      </div>

      {/* Architect text - Full width */}
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full max-w-screen-2xl">

        {/* Architect Section - Full Width */}
        <AnimateLayout
          className={
            "col-span-full flex flex-col items-start bg-gray-800 border border-gray-600 rounded-xl p-6"
          }
        >
          <h2 className="text-xl md:text-2xl text-left text-cyan-400 w-full capitalize tracking-wider mb-4">
            Architect of Enchantment
          </h2>

          <p className="font-light text-gray-300 text-xs xs:text-sm 2xl:text-lg tracking-wide mb-4">
            Hello! I&#39;m Asjal, a skilled Cloud Data Engineer and a Backend
            Developer with a passion for innovation and learning. My expertise
            in cloud data engineering includes AWS, Snowflake, Apache Kafka,
            Airflow SQL, Python. I excel at designing scalable data pipelines and
            creating cloud-based solutions that optimize workflows and deliver
            impactful results.
          </p>

          <p className="font-light text-gray-300 text-xs xs:text-sm 2xl:text-lg tracking-wide mb-4">
             On the backend, I specialize in building robust and scalable server-side applications using Node.js and Express.js. I focus on developing secure RESTful APIs, integrating third-party services, and managing databases efficiently. I ensure smooth performance and maintainability across applications.
          </p>

          <p className="font-light text-gray-300 text-xs xs:text-sm 2xl:text-lg tracking-wide">
            Having earned 27 certifications across cloud technologies, data
            engineering, and backend development, my dedication to mastering
            modern tools is reflected in diverse projects, from data-driven
            systems to scalable backend solutions. Always curious and motivated,
            I aim to create meaningful, innovative technology solutions.
          </p>
        </AnimateLayout>

        {/* Projects and Experience - Side by side below Architect */}
        <AnimateLayout
          className={
            "col-span-full sm:col-span-6 text-cyan-400 pointer-events-none select-none bg-gray-800 border border-gray-600 rounded-xl p-6"
          }
        >
          <p className="font-semibold w-full text-center text-3xl md:text-7xl">
            8+ <sub className="font-semibold text-xl text-gray-300">Projects</sub>
          </p>
        </AnimateLayout>

        <AnimateLayout
          className={
            "col-span-full sm:col-span-6 text-cyan-400 pointer-events-none select-none bg-gray-800 border border-gray-600 rounded-xl p-6"
          }
        >
          <div className="font-semibold w-full text-center text-3xl md:text-7xl">
            1 <sub className="font-semibold text-xl text-gray-300">Year Experience</sub>
          </div>
        </AnimateLayout>

        

        
        {/* Technologies Section */}
        <AnimateLayout className={"col-span-full bg-gray-800 border border-gray-600 rounded-xl p-6"}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-gray-700 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <FaAws className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
            </div>
            <div className="bg-gray-700 p-2 md:p-3 text-sky-500 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <TbBrandSnowflake className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 text-red-400 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <SiMicrosoftsqlserver className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 text-blue-400 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <BiLogoPostgresql className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 text-orange-400 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <GrMysql className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 text-yellow-300 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <IoLogoPython className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <SiApachekafka className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
            </div>
            <div className="bg-gray-700 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <SiApacheairflow className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
            </div>
            <div className="bg-gray-700 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <FaDocker className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
            </div>                                    
            <div className="bg-gray-700 text-yellow-400 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <IoLogoJavascript className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>            
            <div className="bg-gray-700 text-green-500 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <FaNodeJs className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 text-orange-600 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <FaGitAlt className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16" />
            </div>
            <div className="bg-gray-700 p-2 md:p-3 rounded-2xl border border-gray-600 hover:border-cyan-400 transition-all duration-300">
              <FaGithub className="w-8 h-8 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" />
            </div>                                    
          </div>
        </AnimateLayout>
      </div>
    </section>
  );
};

export default AboutDetails;