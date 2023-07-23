import React, { useState } from "react";
import EducationImg from "../assets/educationImg.png";
import Education from "./About/Education";

const AboutScreen = () => {
  const [tabActive, setTabActive] = useState<string>("tab1");

  console.log(EducationImg);

  const handleTabActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setTabActive(e.currentTarget.id);
  };

  return (
    <div className="h-screen  p-10 grid place-items-center" id="about">
      <ul className="flex border-b">
        <li
          id="tab1"
          onClick={(e) => handleTabActive(e)}
          className="-mb-px mr-1  cursor-pointer"
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab1"
                ? "text-blue-700 "
                : "text-blue-500 hover:text-blue-800"
            }`}
          >
            About
          </p>
        </li>
        <li
          className="mr-1 cursor-pointer"
          id="tab2"
          onClick={(e) => handleTabActive(e)}
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab2"
                ? "text-blue-700 "
                : "text-blue-500 hover:text-blue-800"
            }`}
          >
            Education
          </p>
        </li>
        <li
          className="mr-1 cursor-pointer"
          id="tab3"
          onClick={(e) => handleTabActive(e)}
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab3"
                ? "text-blue-700 "
                : "text-blue-500 hover:text-blue-800"
            }`}
          >
            Skill
          </p>
        </li>
      </ul>
      <div className=" hidden md:block">
        {tabActive === "tab1" ? (
          <div></div>
        ) : tabActive === "tab2" ? (
          <Education image={EducationImg} />
        ) : (
          <div>#</div>
        )}
      </div>
    </div>
  );
};

export default AboutScreen;
