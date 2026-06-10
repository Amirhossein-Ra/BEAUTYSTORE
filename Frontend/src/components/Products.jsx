import React, { useEffect, useState } from "react";
import { request } from "../RequestMethods";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Products({ filters, sort, query }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;
        if (query) {
          res = await request.get(`/products?search=${query}`);
        } else {
          res = await request.get("/products");
        }
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [query]);

  useEffect(() => {
    let tempProducts = [...products];

    if (filters) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          if (!value) {
            return true;
          } else {
            return item[key].includes(value);
          }
        }),
      );
    }

    if (sort === "newest") {
      tempProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    } else if (sort === "asc") {
      tempProducts.sort((a, b) => a.originalPrice - b.originalPrice);
    } else if (sort === "desc") {
      tempProducts.sort((a, b) => b.originalPrice - a.originalPrice);
    }

    setFilteredProducts(tempProducts);
  }, [products, filters, sort]);

  return (
    <div className="flex flex-wrap mx-[40px] items-center ">
      {filteredProducts.map((product, index) => (
        <Link to={`/product/${product._id}`} key={index}>
          <Product img={product.img} title={product.title} />
        </Link>
      ))}
    </div>
  );
}

Products.PropTypes = {
  cat: PropTypes.string,
  filters: PropTypes.object,
  sort: PropTypes.string,
  query: PropTypes.string,
};
