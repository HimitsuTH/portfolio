import GithubIcon from "./components/GithubIcon";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-stone-200">
        <GithubIcon />
        <HomePage />
        <AboutPage />
        <ProjectPage/>
      </div>
    </>
  );
}

export default App;
