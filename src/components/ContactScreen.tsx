// import React from "react";
import GithubIcon from "../assets/code.png";
import EmailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

const ContactScreen = () => {
  return (
    <div className=" place-items-center grid overflow-hidden bg-white">
      <div className=" m-5">
        <div className="flex flex-row gap-5">
          <img src={EmailIcon} alt="email" className=" w-10 h-10" />
          <img src={GithubIcon} alt="github"  className=" w-10 h-10"/>
          <img src={linkedinIcon} alt="linkedin"  className=" w-10 h-10"/>

          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
