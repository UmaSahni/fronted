import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="sticky top-0 z-50">
      <div className="mx-8 mb-8  translate-y-8">
        <div className="bars ">
          <div>
            <img src="logo.png" />
          </div>
          <div>
            <i onClick={() => setShow(!show)} className="fa-solid fa-bars"></i>
          </div>
        </div>
        {show && (
          <div className="rounded-lg rounded-lg p-4 flex justify-between navbar ">
            <div>
              <img src="logo.png" />
            </div>
            <div className="w-3/5 second-section">
              <ul className="list-none flex w-900 justify-between items-center border-2 border-sky-500 ">
                <li>About</li>
                <li>Our Products</li>
                <li>Token Utility</li>
                <li>Roadmap</li>
                <button className="rounded-lg font-medium">
                  Connect Wallet
                </button>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
