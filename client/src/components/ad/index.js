import React from "react";

import data from "./data";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Ad = ({ company }) => {
  const adData = data.filter((ad) => ad.name === company)[0];

  console.log(adData);

  return (
    <Container fluid className={styles["container"]}>
      <Row className={styles["title"]}>
        <p>Advertisement</p>
      </Row>
      <Row className={styles["image"]}>
        <img src={adData.image} alt={company} />
      </Row>

      <Row className={styles["description"]}>
        <p>{adData.description}</p>
      </Row>
    </Container>
  );
};

export default Ad;
