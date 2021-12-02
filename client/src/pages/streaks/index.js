import React, { useState, useEffect } from "react";

import { prizes } from "./data";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Checked from "./img/checked.svg";
import Unchecked from "./img/unchecked.svg";

import styles from "./style.module.scss";

const Streaks = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + user.uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });
  }, [user]);

  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  const check = (param, index) => {
    console.log(param);
    if (param) {
      return (
        <Col className={styles["check"]}>
          <img src={Checked} alt="checked" />
          <p>{index}</p>
        </Col>
      );
    } else {
      return (
        <Col className={styles["check"]}>
          <img src={Unchecked} alt="unchecked" />
          <p>{index}</p>
        </Col>
      );
    }
  };

  const score = userData.howToInvest + userData.financial;

  return (
    <Container fluid className={"content"}>
      <Row className={styles["header"]}>
        <h1>My Streaks</h1>
      </Row>

      <Row className={styles["streaks"]}>
        <Col xs={4} className={styles["days"]}>
          {score === 0 ? (
            <h4>{userData.streak}</h4>
          ) : (
            <h4>{userData.streak + 1}</h4>
          )}
          <p>day streak</p>
        </Col>
        <Col xs={8} className={styles["specifics"]}>
          <div className={styles["quizzes"]}>
            <h6>Quiz Progress</h6>
            <div className={styles["checks"]}>
              {check(userData.howToInvest, 1)}
              {check(userData.financial, 2)}
              {check(userData.ratios, 3)}
              {check(userData.company, 4)}
              {check(userData.investing, 5)}
            </div>
          </div>

          <div className={styles["quizzes"]}>
            <h6>Weekly Progress</h6>
            <div className={styles["checks"]}>
              {check(day === "Monday", "M")}
              {check(day === "Tuesday", "Tu")}
              {check(day === "Wednesday", "W")}
              {check(day === "Thursday", "Th")}
              {check(day === "Friday", "F")}
              {check(day === "Saturday", "Sa")}
              {check(day === "Sunday", "Su")}
            </div>
          </div>
        </Col>
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
