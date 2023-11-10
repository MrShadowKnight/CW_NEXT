import React from "react";
import Link from "next/link";

// interfaces
import { Product } from "@/interfaces";

interface Props {
  data: Product;
}
const Cart = ({ data }: Props) => {
  const { description, id, price, title } = data;
  return (
    <>
      <div style={{ padding: 10, border: "2px solid red" }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>{price}</div>
        <Link href={`/products/${id}`}>Детальніше</Link>
      </div>
    </>
  );
};

export default Cart;
