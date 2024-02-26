import React from "react";
import Card from "./Card";

const Products = () => {
  return (
    <div className="">
      <h1 className="text-white text-center text-5xl py-4 ">
        <b>
          Our <span className="change-color">Products</span>{" "}
        </b>
      </h1>

      <div className="container-md">
        <p className="text-center text-white text-xl">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
      </div>
      <div className=" justify-center gap-20 container-md flex flex-wrap ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Products;
