// import React from "react";
import EducationImg from "../assets/educationImg.png";

const AboutScreen = () => {
  return (
    <div className="h-screen  p-10 grid place-items-center" id="about">
      <div className="flex items-center flex-col">
        <img src={EducationImg} alt="education" />
      </div>
    </div>
  );
};

export default AboutScreen;
