import React from "react";
import s from "./questionsForm.module.scss";
import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
  return (
    <>
      <section className={s.form}>
        <Container>
          <Row>
            <Col>
              <div className={s.form__box}>
                <div className={s.form__title}>
                  <h1>Виникли запитання?</h1>
                  <input type="text" placeholder="Ваше ім'я" />
                  <input type="text" placeholder="Номер телефону" />
                </div>
                <div className={s.form__text}>
                  <h1>Залиште заявку і ми Вам передзвонимо</h1>
                  <input type="submit" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Form;
