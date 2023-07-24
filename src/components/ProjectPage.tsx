// import React, { useEffect } from "react";
import internetIcon from "../assets/internet.png";
import apiIcon from "../assets/api.png";
import atomIcon from "../assets/atom.png";
import FrontEndIcon from "../assets/front-end.png";

import iconError from "../assets/iconError.png";

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
    <div className="top-section md:h-screen place-items-center grid p-10 md:p-0 relative">
      <div className="bgImage"></div>
      <div className=" absolute w-72 h-72 left-4 bottom-3 lg:block hidden z-10">
        <img src={iconError} alt="icon" />
      </div>
      <div className=" z-20">
        <h1 className="sm:text-4xl text-3xl mb-5 select-none  text-center">
          Project
        </h1>
        <div className=" grid grid-cols-1 gap-10  min-[720px]:grid-cols-2 xl:grid-flow-col">
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">Website</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={internetIcon} alt="web" />
            </CardContent>
            <CardDescription>Responsive Website</CardDescription>
            <CardFooter className=" flex gap-x-2">
              <a
                href="https://github.com/HimitsuTH/web_aboutMe"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://me-tni.netlify.app/"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">RestFulApi</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={apiIcon} alt="api" />
            </CardContent>
            <CardDescription>Headphone Api</CardDescription>
            <CardFooter className=" flex gap-x-2">
              <a
                href="https://github.com/HimitsuTH/project_restfulApi"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                Github
              </a>
              <a
                href="https://project-restful-api.cyclic.app/"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                link
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">React Native</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={atomIcon} alt="react" />
            </CardContent>
            <CardDescription>crud app</CardDescription>
            <CardFooter>
              <a
                href="https://github.com/HimitsuTH/ReactNativeFinalProject"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                Github
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-64 h-72 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">Frontend Mentor</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={FrontEndIcon} alt="react" />
            </CardContent>
            <CardDescription>Frontend Practice</CardDescription>
            <CardFooter>
              <a
                href="https://www.frontendmentor.io/profile/HimitsuTH"
                className=" text-sm text-slate-400 hover:text-black"
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
