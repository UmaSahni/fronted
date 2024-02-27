import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="">
      {/* A grid box on left of the screen */}
      <img
        src="Images/box.png"
        className="absolute w-36 top-9  "
      />
      {/* Main Hero Section */}
      <div>
        <div className=" hero   container-md flex align-center justify-center ">
          <img
            className="  grid-box-main"
            src="Images/hero.png"
            alt="Hero Image"
          />
        </div>
      </div>

      <p className="text-3xl text-white text-center ">
        Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id
        velit proin <br></br> eleifend id mauris. Amet sem in id eget nunc quam
        lacus tellus augue.
      </p>

      {/* Getting Started Button */}
      <div className="flex align-center justify-center  py-20">
        <Button width={32} text={"Get Started >"} />
      </div>
    </div>
  );
};

export default Hero;
