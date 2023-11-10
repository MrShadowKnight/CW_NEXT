import React from "react";
import Link from "next/link";
// styles
import s from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <h1>Header</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
