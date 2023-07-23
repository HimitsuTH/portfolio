import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import arrowData from "../assets/arrowData.json";
import iconThink from "../assets/iconThink.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const HomePage = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <div className="top-section h-screen place-items-center grid">
      <div className="text-center">
        <h1 className="sm:text-5xl text-3xl mb-5 select-none ">
          Hi, I am Chinnawich Ampai
        </h1>
        <h2 className="sm:text-2xl text-lg">Thai-nichi institute of technology</h2>
      </div>
      <div className=" absolute w-60 h-60 right-20 md:block hidden">
        <img src={iconThink} alt="icon" />
      </div>

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
  );
};

export default HomePage;
