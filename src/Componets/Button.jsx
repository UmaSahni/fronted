import React from "react";

const Button = ({ text }) => {
  return (
    <div className="text-black text-black py-1.5 px-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 button-shadow ">
      <div className=" py-2 px-4 rounded-full  border border-white border-2">
        <b>{text}</b>
      </div>
    </div>
  );
};

export default Button;
