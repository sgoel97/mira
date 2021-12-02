import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Person from "./img/person.png";

import styles from "./style.module.scss";

const Leaderboard = () => {
  const [time, setTime] = useState("Daily");

  const buttons = ["Daily", "Weekly", "Monthly", "All Time"];

  const leaders = [
    { name: "test1", image: Person, gain: "9.42%" },
    { name: "test2", image: Person, gain: "8.42%" },
    { name: "test3", image: Person, gain: "7.42%" },
    { name: "test4", image: Person, gain: "6.42%" },
    { name: "test5", image: Person, gain: "5.42%" },
    { name: "test6", image: Person, gain: "4.42%" },
    { name: "test7", image: Person, gain: "3.42%" },
  ];

  const top = leaders.sort((leader) => leader.gain).slice(0, 3);

  return (
    <Container fluid>
      <Row className={styles["leaders"]}>
        <h1>Leaderboard</h1>
        {top.map(({ name, image, gain }) => (
          <Col className={styles["leader"]}>
            <img src={image} alt={name} />
            <p className={styles["name"]}>{name}</p>
            <p className={styles["gain"]}>{gain}</p>
          </Col>
        ))}
      </Row>

      <div className="content">
        <Row className={styles["time-buttons"]}>
          {buttons.map((name) => (
            <Button onClick={() => setTime(name)} className={styles["time"]}>
              <h4>{name}</h4>
            </Button>
          ))}
        </Row>

        <Row className={styles["headers"]}>
          <h4>Name</h4>
          <h4>Amount Invested</h4>
          <h4>Gains</h4>
        </Row>

        <Row className={styles["line"]}>
          <hr />
        </Row>

        <Row></Row>
      </div>
    </Container>
  );
};

export default Leaderboard;
