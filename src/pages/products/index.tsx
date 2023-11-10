import React, { useEffect, useState } from "react";

// styles
import s from "./products.module.scss";

// modules

// components
import Cart from "@/components/productCart";

// images

// interfaces
import { Product } from "@/interfaces";

// functions
const getAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

const Products = () => {
  // state
  const [products, setProducts] = useState<Product[] | null>(null);

  // load
  useEffect(() => {
    getAllProducts().then((data: Product[]) => setProducts(data));
  }, []);
  return (
    <>
      <div className={s.products}>Products</div>
      {products ? (
        products.map((product: Product) => {
          return <Cart key={product.id} data={product} />;
        })
      ) : (
        <div>Products Loading...</div>
      )}
    </>
  );
};

export default Products;
