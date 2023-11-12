import React from "react";
import s from "./cardAbout.module.scss";
import Image from "next/image";

// images

const Card = () => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card__content}>
          <h3>Заголовок</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla</p>
        </div>
      </div>
    </>
  );
};

export default Card;
