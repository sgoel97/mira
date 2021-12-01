import React from "react";

import Header from "../../components/header";
import Badge from "../../components/badge";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Learn = () => {
  const localLeaderboardData = [
    { name: "Jen Garcia", level: "15" },
    { name: "Juan Rosales", level: "15" },
    { name: "Ani Vangala", level: "15" },
  ];

  const globalLeaderboardData = [];

  return (
    <Container fluid>
      <Header title="Learn" />
      <Row>
        <Col xs={12} className={styles["journeys"]}>
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
        {/* <Col xs={4} className={styles["stats"]}>
          <Container fluid className={styles["container"]}>
            <Row className={styles["title"]}>
              <p>Leaderboards</p>
            </Row>
            {localLeaderboardData.map(({ name }) => (
              <Row className={styles["holding"]}>
                <p>{name}</p>
              </Row>
            ))}
          </Container>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Learn;
