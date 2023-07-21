// import React, { useEffect } from "react";

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
          <Card>
            <CardHeader>Website</CardHeader>
          </Card>
          <Card>
            <CardHeader>RestFulApi</CardHeader>
          </Card>
          <Card>
            <CardHeader>React Native</CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectScreen;
