// import React, { useEffect } from "react";
import internetIcon from "../assets/internet.png";
import apiIcon from "../assets/api.png";
import atomIcon from "../assets/atom.png";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const ProjectScreen = () => {
  return (
    <div className="top-section sm:h-screen place-items-center grid ">
      <div>
        <h1 className="sm:text-4xl text-2xl mb-5 select-none ">Project</h1>
        <div className=" flex flex-row gap-5 flex-wrap items-center justify-center">
          <Card className=" p-2 flex justify-center flex-col items-center select-none">
            <CardHeader>Website</CardHeader>
            <CardContent>
              <img src={internetIcon} alt="web" />
            </CardContent>
            <CardDescription>Web introduce myself</CardDescription>
          </Card>
          <Card className=" p-2 flex justify-center flex-col items-center select-none">
            <CardHeader>RestFulApi</CardHeader>
            <CardContent>
              <img src={apiIcon} alt="api" />
            </CardContent>
            <CardDescription>Web introduce myself</CardDescription>
          </Card>
          <Card className=" p-2 flex justify-center flex-col items-center select-none">
            <CardHeader>React Native</CardHeader>
            <CardContent>
              <img src={atomIcon} alt="react" />
            </CardContent>
            <CardDescription>Web introduce myself</CardDescription>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
