import React from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import CodingDate from "../../assets/animation_Coding.json";
import musicDate from "../../assets/animation_music.json";

const Introduction = () => {
  const lottieRef = React.useRef<LottieRefCurrentProps>(null);
  return (
    <div className="flex items-center flex-row  transition-all justify-center gap-20">
      <div className=" w-1/4">
        <p className=" text-xl">
         <strong className=" text-2xl"> My name is Chinnawich Ampai.</strong> <br/>Currently, studying in the 4th year from
          Thai-Nichi Institute of technology. I'm looking for an internship in
          web development.
        </p>
      </div>
      <div className="">
        <h1 className=" font-bold text-center text-2xl">Hobbies</h1>
        <div className="flex justify-center flex-row">
        <Lottie
          lottieRef={lottieRef}
          animationData={CodingDate}
          className=" h-1/2 w-64"
        />
        <Lottie
          lottieRef={lottieRef}
          animationData={musicDate}
          className=" h-1/2 w-64"
        />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
