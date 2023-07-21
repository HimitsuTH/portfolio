import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import GithubIconData from "../assets/githubIcon.json";

const GithubIcon = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <div className=" fixed top-4 right-5 z-10">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a href="https://github.com/HimitsuTH/portfolio" target=" _blank">
              <Lottie
                lottieRef={lottieRef}
                animationData={GithubIconData}
                className=" h-8 w-8 hover:scale-125 transition-all"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Himitsu</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default GithubIcon;
