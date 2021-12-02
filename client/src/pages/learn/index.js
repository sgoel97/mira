import React, { useState, useEffect } from "react";

import Badge from "../../components/badge";
import Ad from "../../components/ad";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PFP from "./img/pfp.svg";
import Checked from "./img/checked.svg";
import Unchecked from "./img/unchecked.svg";

import styles from "./style.module.scss";

const Learn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(PFP);
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
    setImage(user.photoURL);

    const db = getDatabase();
    const starCountRef = ref(db, "users/" + user.uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
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
    if (param && score !== 0) {
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

  const score =
    userData.howToInvest +
    userData.financial +
    userData.ratios +
    userData.company +
    userData.investing;

  const QuizzesComplete = () => (
    <Container
      fluid
      className={styles["container"]}
      style={{ border: "none", boxShadow: "none" }}
    >
      <Row className={styles["title"]}>
        <p>Overall Progress</p>
      </Row>
      <div className={styles["streaks"]}>
        <h6>Completed Quizzes</h6>
        <div className={styles["checks"]} style={{ marginBottom: "2rem" }}>
          {check(userData.howToInvest, 1)}
          {check(userData.financial, 2)}
          {check(userData.ratios, 3)}
          {check(userData.company, 4)}
          {check(userData.investing, 5)}
        </div>
      </div>
    </Container>
  );

  return (
    <Container fluid className="content">
      <Row>
        <Col xs={8} className={styles["journeys"]}>
          <Row className={styles["title"]}>
            <p>Lessons</p>
          </Row>

          <Row className={styles["level"]}>
            <p>Basics</p>
            <div className={styles["badges"]}>
              <Badge
                title="Introduction to Investing"
                completed={userData.howToInvest}
              />
            </div>
          </Row>

          <Row className={styles["level"]}>
            <p>Fundamentals I</p>
            <div className={styles["badges"]}>
              <Badge
                title="Intro to Financial Statements"
                completed={userData.financial}
              />
              <Badge
                title="Introduction to Ratios"
                completed={userData.ratios}
              />
            </div>
          </Row>

          <Row className={styles["level"]}>
            <p>Fundamentals II</p>
            <div className={styles["badges"]}>
              <Badge title="Investing" completed={userData.investing} />
              <Badge title="Company" completed={userData.company} />
            </div>
          </Row>
        </Col>
        <Col xs={4} className={styles["stats"]}>
          <div className={styles["info"]}>
            {image ? (
              <img src={image} alt={name} />
            ) : (
              <img src={PFP} alt={name} />
            )}

            <p>{name}</p>
          </div>
          <QuizzesComplete />
          <Container fluid className={styles["container"]}>
            <Row className={styles["title"]}>
              <p>Streaks</p>
            </Row>
            <div className={styles["streaks"]}>
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
              <p className={styles["streak"]}>
                {score === 0 ? userData.streak : userData.streak + 1} day streak
              </p>
            </div>
          </Container>

          <Ad company="Robinhood" />
        </Col>
      </Row>
    </Container>
  );
};

export default Learn;
