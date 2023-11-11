import React from "react";
import Link from "next/link";
import Image from "next/image";
// import image
import imgHeart from "../../assets/img/Heart.png";
import imgBuy from "../../assets/img/Buy.png";
import imgLogo from "../../assets/img/Logo.png";
import imgSearch from "../../assets/img/Search.png";
// import styles
import s from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Link href="/">
          <Image src={imgLogo} width={74} height={36} alt=""></Image>
        </Link>
        <div className={s.header__search}>
          <Image src={imgSearch} width={24} height={24} alt=""></Image>
          <input type="text" />
        </div>
        <nav>
          <ul className={s.header__menu}>
            <li>
              <Link href="/catalog">
                Товари
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                >
                  <path
                    d="M15 1.5L8 8.5L1 1.5"
                    stroke="#200E32"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/about">Про нас</Link>
            </li>
            <li>
              <Link href="/contact">Контакти</Link>
            </li>
          </ul>
        </nav>
        <div className={s.header__lang}>
          <Link href="#">
            UA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
            >
              <path
                d="M15 1.5L8 8.5L1 1.5"
                stroke="#200E32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        <nav>
          <ul className={s.header__cart}>
            <li>
              <Link href="/favorites">
                <Image src={imgHeart} width={18} height={18} alt=""></Image>
              </Link>
            </li>
            <li>
              <Link href="/basket">
                <Image src={imgBuy} width={18} height={18} alt=""></Image>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.header__login}>
          <Link href="/login">Вхід</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
