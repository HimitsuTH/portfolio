import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import arrowData from "../assets/arrowData.json";
import GithubIcon from "../assets/code.png";

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
      <div className="bgImage"></div>
      <div className=" z-10 flex flex-col justify-center items-center gap-y-10 mb-10">
        <div className="text-center">
          <h1 className="sm:text-5xl text-4xl mb-5 select-none font-bold text-brown ">
            Hi, I am Chinnawich Ampai
          </h1>
          <h2 className="sm:text-2xl text-lg text-brown">
            Thai-nichi institute of technology
          </h2>
        </div>
        <div className="flex flex-row gap-5 z-10">
          <a href="https://github.com/HimitsuTH" target="_black">
            <img
              src={GithubIcon}
              alt="github"
              className=" w-10 h-10 hover:scale-90 transition-all"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/chinnawich-ampai-064353284/"
            target="_black"
          >
            <img
              src={linkedinIcon}
              alt="linkedin"
              className=" w-10 h-10 hover:scale-90 transition-all"
            />
          </a>
        </div>
      </div>
  

      <div className=" absolute bottom-6">
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
