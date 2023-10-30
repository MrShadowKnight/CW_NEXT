import React from "react";
import Link from "next/link";
// import components
import Card from "@/components/card";

const news = () => {
  return (
    <div>
      <h1>News</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Card />
    </div>
  );
};

export default news;
