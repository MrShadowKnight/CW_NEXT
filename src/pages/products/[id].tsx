import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// styles
import s from "./single.module.scss";

// functions
const getProducts = async (id: any) => {
  return await fetch(`https://fakestoreapi.com/products/1`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
const SingleProduct = () => {
  // state
  const [products, setProducts] = useState<any>();
  // router
  const router = useRouter();
  const { id } = router.query;
  // load
  useEffect(() => {
    getProducts(id).then((data) => setProducts(data));
  });
  return (
    <div>
      SingleProduct: {id}
      <div>
        {products && (
          <div>
            <h1>{products.title}</h1>
            <p>{products.description}</p>
            <p>{products.price}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
