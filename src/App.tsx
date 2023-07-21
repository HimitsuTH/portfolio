import GithubIcon from "./components/GithubIcon";

import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen";
import ProjectScreen from "./components/ProjectScreen";
import ContactScreen from "./components/ContactScreen";

import "./App.css";

function App() {
  return (
    <>
      <div className=" bg-stone-200">
        <GithubIcon />
        <HomeScreen />
        <AboutScreen />
        <ProjectScreen/>
        <ContactScreen/>
      </div>
    </>
  );
}

export default App;
