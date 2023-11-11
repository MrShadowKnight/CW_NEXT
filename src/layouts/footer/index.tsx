import React from "react";
import Link from "next/link";
import Image from "next/image";
// import styles
import s from "./footer.module.scss";
import { Container, Row, Col } from "react-bootstrap";
// import images
import imgLogo from "@/assets/img/Logo-FFF.png";
import imgTelegram from "@/assets/img/Telegram.png";
import imgInstagram from "@/assets/img/Instagram.png";
import imgFacebook from "@/assets/img/Facebook.png";
import imgTimeCircle from "@/assets/img/Time Circle.png";
import imgMail from "@/assets/img/Message.png";
import imgCall from "@/assets/img/Call.png";

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <Container>
          <Row>
            <Col>
              <div className={s.footer__box}>
                <div className={s.footer__box_social}>
                  <nav className={s.footer__social}>
                    <ul>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgFacebook}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgInstagram}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgTelegram}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className={s.footer__box_logo}>
                  <div className={s.footer__logo}>
                    <Link href="/">
                      <Image
                        src={imgLogo}
                        width={119}
                        height={58}
                        alt=""
                      ></Image>
                    </Link>
                  </div>
                </div>
                <div className={s.footer__box_nav}>
                  <nav className={s.footer__nav}>
                    <ul>
                      <li>
                        <Link href="/products">Товари</Link>
                      </li>
                      <li>
                        <Link href="/about">Про нас</Link>
                      </li>
                      <li>
                        <Link href="/contact">Контакти</Link>
                      </li>
                      <li>
                        <Link href="#">Торгові марки</Link>
                      </li>
                    </ul>
                  </nav>
                  <nav className={s.footer__products}>
                    <ul>
                      <li>
                        <Link href="/products">Зброя</Link>
                      </li>
                      <li>
                        <Link href="/products">Техніка</Link>
                      </li>
                      <li>
                        <Link href="/products">Електросамокати</Link>
                      </li>
                      <li>
                        <Link href="/products">Популярне</Link>
                      </li>
                      <li>
                        <Link href="/products">Акції</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className={s.footer__box_contact}>
                  <nav className={s.footer__contact}>
                    <ul>
                      <li>
                        <Link href="tel:+380930052784">
                          <Image
                            src={imgCall}
                            width={27}
                            height={27}
                            style={{ marginRight: "10px" }}
                            alt=""
                          ></Image>
                          +380 93 005 27 84
                        </Link>
                      </li>
                      <li>
                        <Link href="mailto:militarystore@gmail.com">
                          <Image
                            src={imgMail}
                            width={27}
                            height={27}
                            style={{ marginRight: "10px" }}
                            alt=""
                          ></Image>
                          militarystore@gmail.com
                        </Link>
                      </li>
                      <li>
                        <Image
                          src={imgTimeCircle}
                          width={27}
                          height={27}
                          style={{ marginRight: "10px" }}
                          alt=""
                        ></Image>
                        10:00 - 22:00
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className={s.footer__box_mobail_social}>
                  <nav className={s.footer__mobail_social}>
                    <ul>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgFacebook}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgInstagram}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src={imgTelegram}
                            width={27}
                            height={27}
                            alt=""
                          ></Image>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
