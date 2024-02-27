import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import TokenCard from "./TokenCard";
import axios from "axios";

const Token = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://matrix-2usj.onrender.com/tokens").then((res) => {
      setdata(res.data.tokens);
    });
  }, []);
  return (
    <div className="relative" >
      <Heading
        text1={"Our"}
        text2={"Tokens"}
        para={
          "Pellentesque habitant morbi tristique senectus et netus etPellentesque habitant morbi."
        }
      />

      <div className="flex flex-wrap gap-10 justify-center w-4/5 m-auto">
        {data?.map((el) => (
          <TokenCard key={el._id} {...el} />
        ))}
      </div>

      {/* Glob png */}
      <div>
        <img className="w-96 absolute z-1 " src="Images/glob.png" alt="glob" />
      </div>
    </div>
  );
};

export default Token;
