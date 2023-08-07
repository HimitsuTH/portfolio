// import React, { useEffect } from "react";
import internetIcon from "../assets/internet.png";
import apiIcon from "../assets/api.png";
import atomIcon from "../assets/atom.png";
import FrontEndIcon from "../assets/front-end.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const Project = () => {
  return (
    <div
      className="top-section md:h-screen place-items-center grid p-10 md:p-0 relative section "
      id="project"
    >
      {/* <div className="bgImage h-screen"></div> */}

      <div className=" z-20 flex justify-center items-center flex-col">
        <div className="sm:text-4xl text-3xl mb-5 select-none  text-center  ">
          <h1 className="">Project</h1>
        </div>
        <div className=" grid grid-cols-1 gap-10  min-[720px]:grid-cols-2 xl:grid-flow-col">
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-dk3 dark:text-white dark:border-dk2">
            <CardHeader>
              <CardTitle className=" text-lg">Website</CardTitle>
            </CardHeader>
            <CardContent className=" dark:bg-white flex justify-center items-center p-5 m-2 rounded-full">
              <img src={internetIcon} alt="web" />
            </CardContent>
            <CardDescription className=" dark:text-white font-semibold">
              Responsive Website
            </CardDescription>
            <CardFooter className=" flex gap-x-2">
              <a
                href="https://github.com/HimitsuTH/web_aboutMe"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://me-tni.netlify.app/"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-dk3 dark:text-white dark:border-dk2">
            <CardHeader>
              <CardTitle className=" text-lg">RestFulApi</CardTitle>
            </CardHeader>
            <CardContent className=" dark:bg-white flex justify-center items-center p-5 m-2 rounded-full">
              <img src={apiIcon} alt="api" />
            </CardContent>
            <CardDescription className=" dark:text-white font-semibold">
              Headphone Api
            </CardDescription>
            <CardFooter className=" flex gap-x-2 ">
              <a
                href="https://github.com/HimitsuTH/project_restfulApi"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://project-restful-api.cyclic.app/"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-dk3 dark:text-white dark:border-dk2">
            <CardHeader>
              <CardTitle className=" text-lg">React Native</CardTitle>
            </CardHeader>
            <CardContent className=" dark:bg-white flex justify-center items-center p-5 m-2 rounded-full">
              <img src={atomIcon} alt="react" />
            </CardContent>
            <CardDescription className=" dark:text-white font-semibold">
              crud app
            </CardDescription>
            <CardFooter>
              <a
                href="https://github.com/HimitsuTH/ReactNativeFinalProject"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                Github
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-dk3 dark:text-white dark:border-dk2">
            <CardHeader>
              <CardTitle className=" text-lg">Frontend Mentor</CardTitle>
            </CardHeader>
            <CardContent className=" dark:bg-white flex justify-center items-center p-5 m-2 rounded-full">
              <img src={FrontEndIcon} alt="react" />
            </CardContent>
            <CardDescription className=" dark:text-white font-semibold">
              Frontend Practice
            </CardDescription>
            <CardFooter>
              <a
                href="https://www.frontendmentor.io/profile/HimitsuTH"
                className=" text-sm text-slate-400 hover:text-black dark:text-slate-300 dark:hover:text-blueDark"
                target="_black"
              >
                Link
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Project;
