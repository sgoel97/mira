import React from "react";

import { prizes } from "./data";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Streaks = () => {
  return (
    <Container fluid className={"content"}>
      <Row className={styles["header"]}>
        <h1>My Streaks</h1>
      </Row>

      <Row className={styles["prizes-header"]}>
        <h6>Streaks Prizes</h6>
      </Row>
      <Row className={styles["prizes-row"]}>
        {prizes.slice(0, 3).map(({ image, number, description }) => (
          <Col xs={3} key={number} className={styles["prize"]}>
            <img src={image} alt={number} />
            <div className={styles["text"]}>
              <h4>{number} day</h4>
              <p>{description}</p>
            </div>
          </Col>
        ))}
      </Row>

      <Row className={styles["prizes-row"]}>
        {prizes.slice(3).map(({ image, number, description }) => (
          <Col xs={3} key={number} className={styles["prize"]}>
            <img src={image} alt={number} />
            <div className={styles["text"]}>
              <h4>{number} day</h4>
              <p>{description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Streaks;
