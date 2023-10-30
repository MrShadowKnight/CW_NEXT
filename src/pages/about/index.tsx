import React from "react";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default index;
