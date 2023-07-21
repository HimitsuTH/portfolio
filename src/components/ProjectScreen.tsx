// import React, { useEffect } from "react";
import data from "../assets/projectItem.json";

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
          {data.map((data) => (
            <Card
              key={data?.id}
              className=" py-4  transition-all w-full sm:w-auto mx-10 bg-transparent shadow-none"
            >
              <CardHeader className="grid place-items-center">
                <img src={data.img} className=" w-36 h-40  overflow-x-hidden" />
              </CardHeader>
              <CardContent className=" text-center">
                <CardDescription>{data?.title}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
