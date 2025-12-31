// Buttons.tsx
import Button from "@/app/components/Button";
import Link from "next/link";
import { ChevronDown, Github, Linkedin, Notebook } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Buttons = ({ triggerAnimation }) => {

  let [isHovered, setIsHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <>
      {/* Buttons Section */}
      <motion.div
        initial={{opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className={`flex flex-col gap-5 mt-12 sm:mt-16 md:mt-8 lg:mt-12 xl:mt-24 2xl:mt-16 max-w-screen-2xl ${
          triggerAnimation ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        <div className="flex gap-3 md:gap-4 lg:gap-5">
          <Link
          href={"https://www.linkedin.com/in/asjal-amir"}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider bg-gray-800 text-gray-100 border border-gray-600 hover:bg-gray-700 hover:border-cyan-500 hover:text-white transition-all duration-300">
              <Linkedin className="w-4 sm:w-6" />
              Linkedin
            </Button>
          </Link>

          <Link
          href={"https://github.com/mohdasjal1"}
          target="_blank"
          rel="noopener noreferrer"
          >
            <Button className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider bg-gray-800 text-gray-100 border border-gray-600 hover:bg-gray-700 hover:border-cyan-500 hover:text-white transition-all duration-300">
              <Github className="w-4  sm:w-6" />
              Github
            </Button>
          </Link>

          {/* Resume Dropdown */}
          <div
            className="relative group lg:hover:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button
              onClick={toggleDropdown}
              className="text-xs sm:text-base flex justify-center items-center gap-1 sm:gap-2 rounded-xl xs:rounded-[0.50rem] sm:rounded-xl py-1 sm:py-2 px-1 xs:px-2 sm:px-4 tracking-wider mb-2 bg-gray-800 text-gray-100 border border-gray-600 hover:bg-gray-700 hover:border-cyan-500 hover:text-white transition-all duration-300"
            >
              <Notebook className="w-4 sm:w-6" />
              Resume
              <ChevronDown className="w-4 sm:w-6" />
            </Button>

            {(isHovered || isDropdownOpen) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 sm:right-auto flex flex-col bg-gray-800 shadow-2xl border border-gray-600 rounded-xl py-2 px-2 sm:px-3 z-10"
              >
                <Link
                  href="/resumes/data-engineer-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-xs lg:text-sm hover:text-cyan-400 text-gray-200 bg-gray-800 border-b border-gray-600 pb-1 py-2 rounded-xl w-[32vw] sm:w-[25vw] md:w-[23vw] lg:w-[18vw] xl:w-[14vw] 2xl:w-[10vw] transition-colors duration-300 hover:bg-gray-700">
                    Data Engineering CV
                  </button>
                </Link>
                <Link
                  href="/resumes/my_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-xs lg:text-sm hover:text-cyan-400 text-gray-200 bg-gray-800 py-2 rounded-xl w-[32vw] sm:w-[25vw] md:w-[23vw] lg:w-[18vw] xl:w-[14vw] 2xl:w-[10vw] transition-colors duration-300 hover:bg-gray-700">
                    Backend CV
                  </button>
                </Link>
              </motion.div>
            )}
          </div>

        </div>

        <Link href={"/about"}>
          <motion.button
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="tracking-wider bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 2xl:py-3 px-5 rounded-xl shadow-lg transition-all duration-300"
          >
            Who I Am
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
};

export default Buttons;