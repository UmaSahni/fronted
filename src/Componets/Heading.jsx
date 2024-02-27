import React from "react";

const Heading = ({ text1, text2, para }) => {
  return (
    <div>
      <h1 className="text-white text-center text-5xl py-4 relative ">
        <b>
          {text1} <span className="change-color">{text2}</span>
        </b>
        <img
          src="Images/dash-line.png"
          className=" absolute top-1/2 left-1/2 transform -translate-x-1 translate-y-6"
        />
      </h1>
      <div className="container-md">
        <p className="text-center my-5 text-white text-xl">{para}</p>
      </div>
    </div>
  );
};

export default Heading;
