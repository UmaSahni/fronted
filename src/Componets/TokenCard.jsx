import React from "react";
import Button from "./Button";

const TokenCard = () => {
  return (
    <div className="w-72 border border-yellow py-8 px-10 back-color">
      <img src="Images/bitcoin.png" className="m-auto pb-10" />
      <div>
        <h3 className="text-white text-2xl font-semibold">Bitcoin</h3>
        {/* Box Content */}
        <div className="flex gap-5 my-2">
          <div className="text-white">
            <p>Symbol</p>
            <p>Decimal</p>
            <p>Market Cap</p>
            <p>Chain</p>
          </div>
          <div className="text-slate-300">
            <p>BTC</p>
            <p>18</p>
            <p>$100000</p>
            <p>Bitcoin</p>
          </div>
        </div>
        <div className="my-3">
          <Button width={20} text={"Details >"} />
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
