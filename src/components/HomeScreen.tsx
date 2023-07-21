import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import arrowData from "../assets/arrowData.json";

const HomeScreen = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <div className="top-section h-screen place-items-center grid">
      <h1 className="sm:text-4xl text-2xl mb-5 select-none ">Hi, I am Chinnawich Ampai</h1>
      <a href="#about">
      <Lottie
        lottieRef={lottieRef}
        animationData={arrowData}
        className=" h-20 w-20"
      />
      </a>
    </div>
  );
};

export default HomeScreen;
