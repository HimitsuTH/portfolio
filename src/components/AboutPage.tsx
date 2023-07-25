import React, { useState } from "react";

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
  };

  const handleTabActive = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setLoading(true);
    setTabActive(e.currentTarget.id);
    setProgress(13);
  };

  // console.log(loading);

  return (
    <div
      className="h-screen  p-10 grid place-items-center relative  "
      id="about"
    >
      <Accordion
        type="single"
        collapsible
        className="  w-full  min-[920px]:hidden block bg-white p-5 rounded-md z-30 "
      >
        <AccordionItem value="item-1" className=" dark:text-brown2">
          <AccordionTrigger>Introduction</AccordionTrigger>
          <AccordionContent>
            <p className=" w-10/12 ">
              My name is Chinnawich Ampai. Currently, studying in the 4th year
              from Thai-Nichi Institute of technology. I'm looking for an
              internship in web development.
            </p>
            <br />
            <strong>Hobbies</strong>
            <ul>
              <li>- Coding</li>
              <li>- Listen music</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className=" dark:text-brown2">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <ul>
              <li className=" font-semibold">- 2018-2020 Tepleela School</li>
              <p className=" ml-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                excepturi ducimus ab possimus animi totam nesciunt corporis
                fugiat voluptatum reprehenderit.
              </p>
              <li className=" font-semibold">
                - 2020-now Thai-nichi institute of technology
              </li>
              <p className=" ml-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                excepturi ducimus ab possimus animi totam nesciunt corporis
                fugiat voluptatum reprehenderit.
              </p>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ul className=" border-b absolute flex-row gap-5 top-10 left-10  hidden min-[920px]:flex z-30 border-brown2 dark:border-beige">
        <li
          id="tab1"
          onClick={(e) => handleTabActive(e)}
          className="-mb-px mr-1  cursor-pointer list-item"
        >
          <p
            className={` inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold hover:text-slate-800 border-brown2 dark:bg-beige dark:hover:bg-beige2 dark:hover:text-brown2 hover:bg-white dark:border-beige ${
              tabActive == "tab1"
                ? " text-white bg-brown2 dark:bg-white dark:text-brown2"
                : " text-brown2  dark:text-brown2 "
            }`}
          >
            Introduction
          </p>
        </li>
        <li
          className="mr-1 cursor-pointer list-item"
          id="tab2"
          onClick={(e) => handleTabActive(e)}
        >
          <p
            className={` inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold hover:text-slate-800 border-brown2 dark:bg-beige dark:hover:bg-beige2 dark:hover:text-brown2 hover:bg-white dark:border-beige ${
              tabActive == "tab2"
                ? " text-white bg-brown2 dark:bg-white dark:text-brown2"
                : " text-brown2  dark:text-brown2 "
            }`}
          >
            Education
          </p>
        </li>
      </ul>

      {loading ? (
        <Progress value={progress} className="w-[60%]" />
      ) : (
        <div className=" hidden min-[920px]:block z-20">
          {tabActive == "tab1" ? <Introduction /> : <Education />}
        </div>
      )}
    </div>
  );
};

export default AboutPage;
