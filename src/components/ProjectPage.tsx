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

const ProjectPage = () => {
  return (
    <div
      className="top-section md:h-screen place-items-center grid p-10 md:p-0 relative "
      id="project"
    >
      {/* <div className="bgImage h-screen"></div> */}

      <div className=" z-20 flex justify-center items-center flex-col">
        <div className="sm:text-4xl text-3xl mb-5 select-none  text-center  ">
          <h1 className="">Project</h1>
        </div>
        <div className=" grid grid-cols-1 gap-10  min-[720px]:grid-cols-2 xl:grid-flow-col">
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-beige dark:text-brown2">
            <CardHeader>
              <CardTitle className=" text-lg">Website</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={internetIcon} alt="web" />
            </CardContent>
            <CardDescription className=" dark:text-brown font-semibold">Responsive Website</CardDescription>
            <CardFooter className=" flex gap-x-2">
              <a
                href="https://github.com/HimitsuTH/web_aboutMe"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://me-tni.netlify.app/"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-beige dark:text-brown2">
            <CardHeader>
              <CardTitle className=" text-lg">RestFulApi</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={apiIcon} alt="api" />
            </CardContent>
            <CardDescription className=" dark:text-brown font-semibold">Headphone Api</CardDescription>
            <CardFooter className=" flex gap-x-2 ">
              <a
                href="https://github.com/HimitsuTH/project_restfulApi"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://project-restful-api.cyclic.app/"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-beige dark:text-brown2">
            <CardHeader>
              <CardTitle className=" text-lg">React Native</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={atomIcon} alt="react" />
            </CardContent>
            <CardDescription className=" dark:text-brown font-semibold">crud app</CardDescription>
            <CardFooter>
              <a
                href="https://github.com/HimitsuTH/ReactNativeFinalProject"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
                target="_black"
              >
                Github
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none dark:bg-beige dark:text-brown2">
            <CardHeader>
              <CardTitle className=" text-lg">Frontend Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={FrontEndIcon} alt="react" />
            </CardContent>
            <CardDescription className=" dark:text-brown font-semibold">Frontend Practice</CardDescription>
            <CardFooter>
              <a
                href="https://www.frontendmentor.io/profile/HimitsuTH"
                className=" text-sm text-slate-400 hover:text-black dark:text-brown dark:hover:text-brown2"
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

export default ProjectPage;
