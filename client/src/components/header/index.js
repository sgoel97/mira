import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gear from "./img/Gear.png";
import Bell from "./img/Bell.png";
import Account from "./img/Account.png";

import styles from "./style.module.scss";

const Chart = ({ title, subtitle }) => {
  return (
    <Container fluid className={styles["container"]}>
      <Row>
        <Col xs={9} className={styles["title"]}>
          <h2>{title}</h2>
          {subtitle && <h6>{subtitle}</h6>}
        </Col>
        <Col xs={3} className={styles["icons"]}>
          <img src={Gear} alt="settings" />
          <img src={Bell} alt="notifications" />
          <img src={Account} alt="account" />
        </Col>
      </Row>
    </Container>
  );
};

export default Chart;
