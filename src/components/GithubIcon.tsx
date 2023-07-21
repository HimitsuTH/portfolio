import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import GithubIconData from "../assets/githubIcon.json";

const GithubIcon = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <div className=" fixed top-3 right-3 z-10">
      <a href="https://github.com/HimitsuTH" target=" _blank">
        <Lottie
          lottieRef={lottieRef}
          animationData={GithubIconData}
          className=" h-8 w-8 hover:scale-125 transition-all"
        />
      </a>
    </div>
  );
};

export default GithubIcon;
