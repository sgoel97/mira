import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GreenChart from "./img/greenChart.png";
import RedChart from "./img/redChart.png";

import styles from "./style.module.scss";

const Holdings = ({ title, type }) => {
  const Holdingdata = [
    { name: "TSLA", up: true },
    { name: "AMZN", up: true },
    { name: "HOOD", up: true },
  ];
  const Portfoliodata = [
    { name: "Mortgage", up: true },
    { name: "Retirement", up: false },
    { name: "Jen's College", up: true },
  ];

  const data = type === "holdings" ? Holdingdata : Portfoliodata;

  return (
    <Container fluid className={styles["container"]}>
      <Row className={styles["title"]}>
        <p>{title}</p>
      </Row>
      {data.map(({ name, up }) => (
        <Row className={styles["holding"]}>
          <p>{name}</p>
          <img src={up ? GreenChart : RedChart} alt="Chart" />
        </Row>
      ))}
    </Container>
  );
};

export default Holdings;
