import React from "react";
import s from "./about.module.scss";
import { Container, Row, Col } from "react-bootstrap";
// components
import Hero from "../../components/heroAbout";

const about = () => {
  return (
    <>
      <main>
        <Hero />
        <Container>
          <Row>
            <Col>
              <div className={s.title}>
                <h1>Чому вартує обрати нас?</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
};

export default about;
