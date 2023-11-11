import React from "react";
import Link from "next/link";
import Image from "next/image";
import ReactDOM from "react-dom";
import $ from "jquery";
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
        <nav className={s.header__menu}>
          <ul>
            <li>
              <Link href="/products">
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

        {/* Burger menu */}

        <div className={s.navigation}>
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label className={s.navigation__button} htmlFor="navi-toggle">
            <span className={s.navigation__icon}>&nbsp;</span>
          </label>

          <div className={s.navigation__background}>&nbsp;</div>

          <nav className={s.navigation__nav}>
            <ul className={s.navigation__list}>
              <li className={s.navigation__item}>
                <Link href="/products" className={s.navigation__link}>
                  Товари
                </Link>
              </li>
              <li className={s.navigation__item}>
                <Link href="/about" className={s.navigation__link}>
                  Про нас
                </Link>
              </li>
              <li className={s.navigation__item}>
                <Link href="/contact" className={s.navigation__link}>
                  Контакти
                </Link>
              </li>
              <li className={s.navigation__item}>
                <Link href="/login" className={s.navigation__link}>
                  Вхід
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
