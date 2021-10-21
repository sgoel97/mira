import React from "react";

import Chart from "../../components/chart";
import Holdings from "../../components/holdings";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Gear from "./img/Gear.png";
import Bell from "./img/Bell.png";
import Account from "./img/Account.png";

import styles from "./style.module.scss";

const Dashboard = () => {
  return (
    <Container fluid style={{ border: "1px solid black" }}>
      <Row>
        <Col xs={10}>
          <h2>Welcome back, Lucas.</h2>
          <h6>Your portfolio today is +1.43%</h6>
        </Col>
        <Col xs={2}>
          <img src={Gear} alt="settings" />
          <img src={Bell} alt="notifications" />
          <img src={Account} alt="account" />
        </Col>
      </Row>

      <Row>
        <Col xs={9}>
          <Chart />
        </Col>
        <Col xs={3}></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
