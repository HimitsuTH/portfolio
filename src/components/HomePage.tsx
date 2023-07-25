import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import arrowData from "../assets/arrowData.json";
import GithubIcon from "../assets/code.png";
import Skill from "./Skill";
import ME from "../assets/ME.png";
// import Blob from '../assets/blob.svg'

import linkedinIcon from "../assets/linkedin.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HomePage = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <div className="h-screen place-items-center grid ">
      <div className="z-10 grid place-items-center">
        <div className="flex gap-x-20 px-10 flex-col-reverse lg:flex-row justify-center items-center">
          <div className="  flex flex-col gap-y-10 ">
            <div className="text-center md:text-start">
              <h1 className="sm:text-4xl text-3xl mb-5 select-none font-bold text-brown2 dark:text-beige">
                Hi, I am Chinnawich Ampai
              </h1>
              <h2 className="sm:text-2xl text-lg text-brown2 dark:text-beige">
                Thai-Nichi institute of technology
              </h2>
            </div>
            <div className="flex flex-row gap-5 z-10 justify-center items-center md:justify-start md:items-start ">
              <a
                href="https://github.com/HimitsuTH"
                target="_black"
                className="dark:bg-beige p-2 dark:rounded-xl"
              >
                <img
                  src={GithubIcon}
                  alt="github"
                  className=" w-10 h-10 hover:scale-90 transition-all "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/chinnawich-ampai-064353284/"
                target="_black"
                className="dark:bg-beige p-2 dark:rounded-xl"
              >
                <img
                  src={linkedinIcon}
                  alt="linkedin"
                  className=" w-10 h-10 hover:scale-90 transition-all"
                />
              </a>
            </div>
            <Skill />
          </div>
          <div className=" hidden md:flex shape bg-brown2 overflow-hidden dark:bg-beige md:justify-center md:w-96 md:mb-10">
            <img src={ME} alt="me" className=" h-64 w-auto mt-7" />
          </div>
        </div>
      </div>

      {/* Animation Icon */}
      <div className=" absolute bottom-2 dark:bg-white rounded-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a href="#about">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={arrowData}
                  className=" h-20 w-20"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>See more</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default HomePage;
