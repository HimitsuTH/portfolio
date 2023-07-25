// import React from "react";

const Education = () => {
  return (
    <div className="hidden md:flex items-center flex-col  transition-all justify-center dark:md:text-brown2">
      <div className="timeline">
        <div className="timeline-item bg-white p-4 select-none rounded-xl dark:bg-beige">
          <span className="  font-bold md:block  ">
            2018 - 2020
          </span>
          <h3 className="title">High School</h3>
          <p className="description font-semibold">Tepleela School</p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            excepturi ducimus ab possimus animi totam nesciunt corporis fugiat
            voluptatum reprehenderit.
          </p>
        </div>
        <div className="timeline-item bg-white p-4 select-none rounded-xl dark:bg-beige">
          <span className="  font-bold md:block  ">2020 - Now</span>
          <h3 className="title">Academy</h3>
          <p className="description font-semibold">Thai-Nichi institute of technology</p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            excepturi ducimus ab possimus animi totam nesciunt corporis fugiat
            voluptatum reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
