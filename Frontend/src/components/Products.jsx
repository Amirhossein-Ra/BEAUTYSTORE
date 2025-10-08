import React from "react";

import Product from "./Product";

export default function Products() {
  return (
    <div className="flex flex-wrap mx-[40px] items-center ">
      <Product img="/lotion.jpg" />
      <Product img="/lotion1.jpg" />
      <Product img="/lotion2.jpg" />
      <Product img="/lotion3.jpg" />
      <Product img="/serum.jpg" />
      <Product img="/serum1.jpg" />
    </div>
  );
}
