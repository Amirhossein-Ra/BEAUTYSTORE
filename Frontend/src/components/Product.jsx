import React from "react";
import Rating from "@mui/material/Rating";
export default function Product({ img }) {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[30px] cursor-pointer">
      <img src={img} alt="" className="h-[400px] w-[300px] bg-cover  " />
      <h2 className="font-semibold text-[18px] w-[300px]">
        Bajaj Seed, Argan, Sweet Almond & Vitamin E
      </h2>
      <span className="text-[18px] font-semibold flex items-center justify-center">
        $100
      </span>
      <span className="flex items-center justify-center">
        <Rating readOnly value={2.5} name="read-only" size="small" />
        (1)
      </span>
    </div>
  );
}
