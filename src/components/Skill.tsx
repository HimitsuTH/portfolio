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
      <div className="min-[920px]:grid  gap-10 grid-flow-col flex flex-wrap justify-center">
        <div className=" dark:bg-white rounded-xl">
          <img
            src={htmlIcon}
            alt="html"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>

        <div className=" dark:bg-white rounded-xl">
          <img
            src={cssIcon}
            alt="css"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
        <div className=" dark:bg-white rounded-xl">
          <img
            src={jsIcon}
            alt="js"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
        <div className=" dark:bg-white rounded-xl">
          <img
            src={nodeIcon}
            alt="node"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
        <div className=" dark:bg-white rounded-xl">
          <img
            src={atomIcon}
            alt="atom"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
        <div className=" dark:bg-white rounded-xl">
          <img
            src={tailwindIcon}
            alt="tailwind"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
        <div className=" dark:bg-white rounded-xl">
          <img
            src={sassIcon}
            alt="sass"
            className=" w-14 h-14 p-2 md:p-1 hover:scale-90 transition-transform  dark:rounded-xl md:h-10 md:w-10 drop-shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;
