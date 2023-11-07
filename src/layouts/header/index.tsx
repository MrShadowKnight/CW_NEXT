import React from "react";
import Link from "next/link";
import Image from "next/image";
// import image
import imgHeart from "../../assets/img/Heart.png";
import imgBuy from "../../assets/img/Buy.png";
// import styles
import s from "./header.module.scss";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <Link href="/">Logo</Link>
        <div className={s.header__search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <ellipse
              cx="9.86616"
              cy="9.76663"
              rx="9.01674"
              ry="8.98856"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.1375 16.4851L19.6725 20"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" />
        </div>
        <nav>
          <ul className={s.header__menu}>
            <li>
              <Link href="#">
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="/about">Про нас</Link>
            </li>
            <li>
              <Link href="#">Контакти</Link>
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
        <nav>
          <ul className={s.header__cart}>
            <li>
              <Link href="#">
                <Image src={imgHeart} width={18} height={18} alt=""></Image>
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image src={imgBuy} width={18} height={18} alt=""></Image>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.header__login}>
          <Link href="#">Вхід</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
