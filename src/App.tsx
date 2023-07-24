import GithubIcon from "./components/GithubIcon";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ProjectPage from "./components/ProjectPage";
// import ContactPage from "./components/ContactPage";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-stone-200">
        <GithubIcon />
        <HomePage />
        <AboutPage />
        <ProjectPage/>
        {/* <ContactPage/> */}
      </div>
    </>
  );
}

export default App;
