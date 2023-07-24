import GithubIcon from "./components/GithubIcon";
import Navbar from "./components/Navbar";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";

import "./App.css";

function App() {
 

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar/>
        <GithubIcon />
        <HomePage />
        <AboutPage />
        <ProjectPage />
      </div>
    </>
  );
}

export default App;
