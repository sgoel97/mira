import React, { useState, useEffect } from "react";

import { auth } from "../../firebase";
import { getDatabase, ref, set, onValue } from "firebase/database";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import PFP from "./img/pfp.svg";

import styles from "./style.module.scss";

const Leaderboard = () => {
  const [time, setTime] = useState("Daily");
  const [leaders, setLeaders] = useState([]);

  const buttons = ["Daily", "Weekly", "Monthly", "All Time"];

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      const keys = Object.keys(data);

      const realData = [];
      keys.forEach((key) => realData.push(data[key]));
      console.log(realData.sort((leader) => leader.gain));
      setLeaders(realData);
    });
  }, []);

  return (
    <Container fluid>
      <Row className={styles["leaders"]}>
        <h1>Leaderboard</h1>
        {leaders
          .sort((leader1, leader2) => leader2.gain - leader1.gain)
          .slice(0, 3)
          .map(({ name, gain }) => (
            <Col className={styles["leader"]}>
              <img src={PFP} alt={name} />
              <p className={styles["name"]}>{name}</p>
              <p className={styles["gain"]}>{gain}%</p>
            </Col>
          ))}
      </Row>

      <div className="content">
        <Row className={styles["time-buttons"]}>
          {buttons.map((name) => (
            <Button
              onClick={() => setTime(name)}
              className={styles["time"]}
              style={name === time ? { backgroundColor: "#FFBB2C" } : {}}
            >
              <h4 style={name === time ? { color: "black" } : {}}>{name}</h4>
            </Button>
          ))}
        </Row>

        <Row className={styles["headers"]}>
          <h4>Name</h4>
          <h4>Gains</h4>
        </Row>

        <Row className={styles["line"]}>
          <hr />
        </Row>

        <Row>
          {leaders
            .sort((leader) => leader.gain)
            .map(({ name, gain }) => (
              <div className={styles["person"]}>
                <div className={styles["info"]}>
                  <img src={PFP} alt={name} />
                  <p className={styles["name"]}>{name}</p>
                </div>
                <div className={styles["gain"]}>
                  <p className={styles["gain"]}>{gain}%</p>
                </div>
              </div>
            ))}
        </Row>
      </div>
    </Container>
  );
};

export default Leaderboard;
