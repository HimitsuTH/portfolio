import cssIcon from "@/assets/css-3.png";
import htmlIcon from "@/assets/html-5.png";
import atomIcon from "@/assets/atomSkill.png";
import nodeIcon from "@/assets/nodejs.png";
import tailwindIcon from "@/assets/tailwinds-mark.png";
import sassIcon from "@/assets/sass.png";
import jsIcon from "@/assets/js.png";

const Skill = () => {
  return (
    <div className="flex items-center flex-col  transition-all justify-center">
      <div className="grid  gap-20 grid-cols-4">
        <div className="flex items-center justify-center flex-col select-none">
          <img
            src={htmlIcon}
            alt="html"
            className=" w-16 h-14 hover:scale-90 transition-transform"
          />
          {/* <p>HTML</p> */}
        </div>
        <img
          src={cssIcon}
          alt="css"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
        <img
          src={jsIcon}
          alt="js"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
        <img
          src={nodeIcon}
          alt="node"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
        <img
          src={atomIcon}
          alt="atom"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
        <img
          src={tailwindIcon}
          alt="tailwind"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
        <img
          src={sassIcon}
          alt="sass"
          className=" w-16 h-14 hover:scale-90 transition-transform"
        />
      </div>
    </div>
  );
};

export default Skill;
