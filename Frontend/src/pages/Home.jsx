import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
    </div>
  );
}
