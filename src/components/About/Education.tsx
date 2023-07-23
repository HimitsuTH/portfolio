// import React from "react";

const Education = ({ image }: any) => {

  console.log(image)
  return (
    <div className="flex items-center flex-col  transition-all justify-center">
      <img src={image} alt="education" />
    </div>
  );
};

export default Education;
