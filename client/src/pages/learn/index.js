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

  const localLeaderboardData = [
    { name: "Jen Garcia", level: "15" },
    { name: "Juan Rosales", level: "15" },
    { name: "Ani Vangala", level: "15" },
  ];

  const globalLeaderboardData = [];

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
          {/* <Container fluid className={styles["container"]}>
            <Row className={styles["title"]}>
              <p>Leaderboards</p>
            </Row>
            {localLeaderboardData.map(({ name }) => (
              <Row className={styles["holding"]}>
                <p>{name}</p>
              </Row>
            ))}
          </Container> */}
          <Ad company="Robinhood" />
        </Col>
      </Row>
    </Container>
  );
};

export default Learn;
