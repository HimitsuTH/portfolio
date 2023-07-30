import GithubIcon from "./components/GithubIcon";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-beige transition-colors dark:bg-dk2">
        <Navbar />
        <GithubIcon />
        <Home />
        <About />
        <Project />
        <Contact/>
      </div>
    </>
  );
}

export default App;
