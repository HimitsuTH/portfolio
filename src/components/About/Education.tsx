// import React from "react";

const Education = () => {
  return (
    <div className="hidden md:flex items-center flex-col  transition-all justify-center dark:md:text-dk">
      <div className="timeline">
        <div className="timeline-item bg-white p-4 select-none rounded-xl ">
          <span className="  font-bold md:block  ">2018 - 2020</span>
          <h3 className="title">High School</h3>
          <p className="description font-semibold">Tepleela School</p>
          <p className="">
            I studied at the Tepleela School from middle school to high school.
          </p>
        </div>
        <div className="timeline-item bg-white p-4 select-none rounded-xl ">
          <span className="  font-bold md:block  ">2020 - Now</span>
          <h3 className="title">Academy</h3>
          <p className="description font-semibold">
            Thai-Nichi institute of technology
          </p>
          <p className="">
            I wanted to study Japanese so I chose to enter this university. I'm
            not good at math, so I choose to apply in IT field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
