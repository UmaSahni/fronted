import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const Products = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="relative">
      <img
        src="Images/flower.png"
        className="absolute w-80 right-0 -top-96  "
      />
      <Heading
        text1={"Our"}
        text2={"Products"}
        para={
          "Pellentesque habitant morbi tristique senectus et netus etPellentesque habitant morbi."
        }
      />

      <div className=" w-4/5 m-auto justify-center gap-12 flex flex-wrap ">
        <img src="Images/92.png" className="absolute left-0 bottom-10 w-96  " />
        {arr.map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Products;
