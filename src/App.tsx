import { useState, useEffect } from "react";

import GithubIcon from "./components/GithubIcon";
import Navbar from "./components/Navbar";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";

import { Switch } from "@/components/ui/switch";

import "./App.css";

function App() {

  // localStorage.setItem("theme","light");
  const [theme ,setTheme] = useState<string>(String(localStorage.getItem("theme")) || "light");

  // console.log(theme)

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },[theme]);

  const handleThemeSwitch = (e:boolean) => {

    
    e ? setTheme("dark") : setTheme("light")
   
    // setTheme(theme == "light"? "dark" : "light")

    console.log(e)
    console.log(theme)
  };
  localStorage.setItem("theme",theme );
  return (
    <>
      <div className=" bg-beige transition-colors dark:bg-brown2">
        <Switch
          id="airplane-mode"
          className=" z-50 fixed top-5 left-5 shadow-md" checked={ theme == "dark"? true : false}
          onCheckedChange={(e)=> handleThemeSwitch(e)}
        />
        <Navbar />
        <GithubIcon />
        <HomePage />
        <AboutPage />
        <ProjectPage />
      </div>
    </>
  );
}

export default App;
