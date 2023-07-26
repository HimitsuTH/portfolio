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
    <div className=" fixed bottom-5 right-5 z-40 ">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a href="https://github.com/HimitsuTH/portfolio" target=" _blank">
              <Lottie
                lottieRef={lottieRef}
                animationData={GithubIconData}
                className=" h-12 w-12 hover:scale-125 transition-all bg-white  rounded-lg p-2 shadow-xl border border-slate-200"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Project</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default GithubIcon;
