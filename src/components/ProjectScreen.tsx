// import React, { useEffect } from "react";
import internetIcon from "../assets/internet.png";
import apiIcon from "../assets/api.png";
import atomIcon from "../assets/atom.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const ProjectScreen = () => {
  return (
    <div className="top-section sm:h-screen place-items-center grid p-10 sm:p-0">
      <div>
        <h1 className="sm:text-4xl text-2xl mb-5 select-none ">Project</h1>
        <div className=" flex flex-col md:flex-row gap-5 flex-wrap items-center justify-center">
          <Card className=" w-56 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">Website</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={internetIcon} alt="web" />
            </CardContent>
            <CardDescription>Web introduce myself</CardDescription>
            <CardFooter>
              <a
                href="https://github.com/HimitsuTH/web_aboutMe"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                Github
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-56 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">RestFulApi</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={apiIcon} alt="api" />
            </CardContent>
            <CardDescription>Headphone Api</CardDescription>
            <CardFooter>
              <a
                href="https://github.com/HimitsuTH/project_restfulApi"
                className=" text-sm text-slate-400 hover:text-black"
                target="_black"
              >
                Github
              </a>
            </CardFooter>
          </Card>
          <Card className=" w-56 p-4 flex justify-center flex-col items-center select-none">
            <CardHeader>
              <CardTitle className=" text-lg">React Native</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={atomIcon} alt="react" />
            </CardContent>
            <CardDescription>Travel App</CardDescription>
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
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
