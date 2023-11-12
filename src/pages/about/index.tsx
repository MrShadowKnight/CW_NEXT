import React from "react";
import s from "./about.module.scss";
import { Container, Row, Col } from "react-bootstrap";
// components
import Hero from "../../components/heroAbout";
import Card from "../../components/cardAbout";
import Form from "../../components/questionsForm";

const about = () => {
  return (
    <>
      <main className={s.about}>
        <Hero />
        <Container>
          <Row>
            <Col>
              <div className={s.about__box}>
                <div className={s.about__title}>
                  <h1>Чому вартує обрати нас?</h1>
                </div>
                <div className={s.about__cards}>
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Form />
      </main>
    </>
  );
};

export default about;
