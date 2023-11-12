import React from "react";
import s from "./cardAbout.module.scss";
import Image from "next/image";

// images
import imgFile from "../../assets/img/File.png";

const Card = () => {
  return (
    <>
      <div className={s.card}>
        <Image
          src={imgFile}
          width={61}
          height={51}
          style={{ margin: "0 0 50px 0" }}
          alt=""
        ></Image>
        <h1>Сертифікована продукція</h1>
        <p>
          Lorem ipsum dolor sit amet
          <br /> consectetur. Ac faucibus mauris
          <br /> tincidunt donec amet amet elit.
        </p>
      </div>
    </>
  );
};

export default Card;
