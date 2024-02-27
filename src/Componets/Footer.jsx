import React from "react";

const Footer = () => {
  return (
    <div className="mt-96">
      <div className="footer-main-div relative ">
        <div className=' rounded-3xl footer-child-div w-4/5 absolute -top-1/2 left-1/2 transform -translate-x-1/2 translate-y-24 "  '>
          {/* Content inside the Footer */}
          <div className="m-auto p-16 ">
            <div className="  text-white flex justify-between items-center border border-yellow flex-wrap ">
              <div>
                <h1>
                  Join Our <br></br>{" "}
                  <span className="change-color"> Community </span>
                </h1>
              </div>

              <div>
                <img src="Images/Founders.png" alt="" />
              </div>
            </div>
          </div>

          {/* End Logo Part */}
          <div className="absolute left-1/2 transform -translate-x-1/2  ">
            <img src="Images/last-logo.png" alt="last-logo" />

            <p className="-translate-x-6 text-white border border-yellow text-center end-text text-2xl">
              2023 all rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
