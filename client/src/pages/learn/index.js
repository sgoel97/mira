import React from "react";

import Header from "../../components/header";
import Badge from "../../components/badge";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Learn = () => {
  return (
    <Container fluid style={{ border: "1px solid black" }}>
      <Header title="Learn" />
      <Row>
        <Col xs={7} className={styles["journeys"]}>
          <Row className={styles["title"]}>
            <p>Lessons</p>
          </Row>

          <Row className={styles["level"]}>
            <p>Basics</p>
            <div className={styles["badges"]}>
              <Badge title="How to Invest" />
            </div>
          </Row>

          <Row className={styles["level"]}>
            <p>Fundamentals I</p>
            <div className={styles["badges"]}>
              <Badge title="Investing" />
              <Badge title="Company" />
            </div>
          </Row>

          <Row className={styles["level"]}>
            <p>Fundamentals II</p>
            <div className={styles["badges"]}>
              <Badge title="Financial" />
              <Badge title="Ratios" />
            </div>
          </Row>
        </Col>
        <Col xs={5} className={styles["stats"]}></Col>
      </Row>
    </Container>
  );
};

export default Learn;
