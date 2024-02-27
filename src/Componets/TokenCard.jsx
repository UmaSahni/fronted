import React from "react";
import Button from "./Button";


// {"_id":{"$oid":"65dd5a0627d223236a19449c"},"img":"https://i.ibb.co/v1mvzYb/4-1.png","tokenName":"AlphaToken","symbol":"ALP","decimals":{"$numberInt":"18"},"marketcap":{"$numberInt":"1000000"},"chain":"Ethereum"}

const TokenCard = ({img,tokenName,symbol,ALP,decimals,marketcap,chain}) => {
  return (
    <div className="w-72 border light-border border-yellow py-8 px-10 back-color">
      <img src={img} className="m-auto pb-10" />
      <div>
        <h3 className="text-white text-2xl font-semibold">{tokenName}</h3>
        {/* Box Content */}
        <div className="flex gap-5 my-2">
          <div className="text-white">
            <p>Symbol</p>
            <p>Decimal</p>
            <p>Market Cap</p>
            <p>Chain</p>
          </div>
          <div className="text-slate-300">
            <p>{symbol}</p>
            <p>{ALP}</p>
            <p>{decimals}</p>
            <p>{marketcap}</p>
            <p>{chain}</p>
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
