import { Button } from "./components/ui/button";
import Lottie from "lottie-react";
import GithubData from "./assets/animation_lkc4wgpp.json";

import "./App.css";

function App() {
  return (
    <>
      <div className=" h-screen grid place-items-center">
        <header className=" fixed top-0">
          <a href="https://github.com/HimitsuTH">
            <Lottie
              animationData={GithubData}
              className=" fixed top-0 right-0 w-10 h-10 m-2"
            />
          </a>
          <p>Test</p>
        </header>
        <main>
          <h1 className=" text-2xl mb-5 select-none">
            Hi, I am Chinnawich Ampai
          </h1>
          <Button>Click me</Button>
        </main>
      </div>
    </>
  );
}

export default App;
