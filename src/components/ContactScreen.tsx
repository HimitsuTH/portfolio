// import React from "react";
import GithubIcon from "../assets/code.png";

import linkedinIcon from "../assets/linkedin.png";

const ContactScreen = () => {
  return (
    <div className=" place-items-center grid overflow-hidden bg-white">
      <div className=" m-5">
        <div className="flex flex-row gap-5">
          <a href="https://github.com/HimitsuTH" target="_black">
            <img src={GithubIcon} alt="github" className=" w-10 h-10 hover:scale-90 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/chinnawich-ampai-064353284/" target="_black">
            <img src={linkedinIcon} alt="linkedin" className=" w-10 h-10 hover:scale-90 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
