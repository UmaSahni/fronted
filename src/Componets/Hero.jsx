import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div className=" border border-black container-md flex align-center justify-center ">
          <img
            className="border border-pink"
            src="Images/hero.png"
            alt="Hero Image"
          />
        </div>
      </div>

      <p className=" text-3xl text-white text-center border border-white">
        Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id
        velit proin <br></br> eleifend id mauris. Amet sem in id eget nunc quam
        lacus tellus augue.
      </p>
    </div>
  );
};

export default Hero;
