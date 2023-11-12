import React from "react";
import s from "./heroAbout.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <section className={s.hero}>
        <Container>
          <Row>
            <Col>
              <div className={s.hero__content}>
                <h1>Наша історія</h1>
                <h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus numquam odit consectetur totam ipsam! Veritatis
                  iusto eligendi cum dolorem perferendis dolores possimus non
                  neque tempora. Delectus accusantium sint corporis consectetur?
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Labore praesentium maiores numquam inventore saepe repellendus
                  alias architecto, sunt, sed ipsam velit. Laborum reiciendis
                  doloribus nobis asperiores est tempora quos illo?
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
