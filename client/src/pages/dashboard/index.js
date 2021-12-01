import React from "react";

import Chart from "../../components/chart";
import Holdings from "../../components/holdings";
import Header from "../../components/header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Dashboard = () => {
  return (
    <Container fluid>
      <Header
        title="Welcome back, Lucas."
        subtitle="Your portfolio today is +1.43%"
      />
      <Row>
        <Col xs={9}>
          <Chart />
        </Col>
        <Col xs={3}>
          <Holdings title="Your Holdings" type="holdings" />
          <Holdings title="Subportfolios" type="subportfolios" />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
