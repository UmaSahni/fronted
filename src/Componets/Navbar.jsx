import React from "react";

const Navbar = () => {
  return (
    <div className="mx-8 mb-8 translate-y-8">
      <div className="rounded-lg border border-gray-300 rounded-lg p-4 flex justify-between navbar ">
        <div>
          <img src="logo.png" />
        </div>
        <div className="w-3/5">
          <ul className="list-none flex w-900 justify-between items-center border-2 border-sky-500 ">
            <li>About</li>
            <li>Our Products</li>
            <li>Token Utility</li>
            <li>Roadmap</li>
            <button className="rounded-lg font-medium">Connect Wallet</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
