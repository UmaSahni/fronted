import React from "react";

const Button = ({ text, width }) => {
  return (
    <div
      className={`w-48 text-black text-center py-1 px-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 button-shadow`}
    >
      <div className="py-2 px-4 rounded-full border border-white border-2">
        <b>{text}</b>
      </div>
    </div>
  );
};

export default Button;
