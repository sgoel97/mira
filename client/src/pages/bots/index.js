import React from "react";

import Header from "../../components/header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Bots = () => {
  return (
    <Container fluid style={{ border: "1px solid black" }}>
      <Header title="Bots" />
      <Row></Row>
    </Container>
  );
};

export default Bots;
