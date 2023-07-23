import React, { useState } from "react";
import EducationImg from "../assets/educationImg.png";
import Education from "./About/Education";
import Introduction from "./About/Introduction";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Progress } from "@/components/ui/progress";

const AboutPage = () => {
  const [tabActive, setTabActive] = useState<string>("tab1");
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 300);
    handleLoading();
    return () => clearTimeout(timer);
  }, [loading]);

  // console.log(EducationImg);

  const handleLoading = () => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }

  const handleTabActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setLoading(true)
    setTabActive(e.currentTarget.id);
    setProgress(13);


    
  };

  console.log(loading)

  return (
    <div
      className="h-screen  p-10 grid place-items-center relative "
      id="about"
    >
      <Accordion
        type="single"
        collapsible
        className="  w-full  min-[920px]:hidden block bg-white p-5 rounded-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Introduction</AccordionTrigger>
          <AccordionContent>
            Hi, I'm Chinnawich from Thai-nichi institute of technology 4 year.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li>- 2018-2020 Tepleela School</li>
              <li>- 2020-now Thai-nichi institute of technology</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Skill</AccordionTrigger>
          <AccordionContent>
            <p>HTML, CSS, Java Script, Java, C#, React js, Node js</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ul className=" border-b absolute flex-col gap-2 top-1/2 left-2  hidden min-[920px]:flex ">
        <li
          id="tab1"
          onClick={(e) => handleTabActive(e)}
          className="-mb-px mr-1  cursor-pointer list-item"
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab1"
                ? "text-slate-700 "
                : " text-slate-500 hover:text-slate-800"
            }`}
          >
            About
          </p>
        </li>
        <li
          className="mr-1 cursor-pointer list-item"
          id="tab2"
          onClick={(e) => handleTabActive(e)}
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab2"
                ? "text-slate-700 "
                : " text-slate-500 hover:text-slate-800"
            }`}
          >
            Education
          </p>
        </li>
        <li
          className="mr-1 cursor-pointer list-item"
          id="tab3"
          onClick={(e) => handleTabActive(e)}
        >
          <p
            className={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold   ${
              tabActive == "tab3"
                ? "text-slate-700 "
                : " text-slate-500 hover:text-slate-800"
            }`}
          >
            Skill
          </p>
        </li>
      </ul>

      {loading ? (
        <Progress value={progress} className="w-[60%]" />
      ) : (
        <div className=" hidden min-[920px]:block">
          {tabActive === "tab1" ? (
            <Introduction/>
          ) : tabActive === "tab2" ? (
            <Education image={EducationImg} />
          ) : (
            <div>#</div>
          )}
        </div>
      )}
    </div>
  );
};

export default AboutPage;
