import React, { useState } from "react";

import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Account from "./img/Account.png";

import styles from "./style.module.scss";

const Chart = ({ title, subtitle }) => {
  const [user, loading, error] = useAuthState(auth);

  const Letter = () => {
    const letter = user.displayName
      ? user.displayName.charAt(0)
      : user.email.charAt(0);

    return (
      <div>
        <p>{letter}</p>
      </div>
    );
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={9} className={styles["title"]}>
          <h2>{title}</h2>
          {subtitle && <h6>{subtitle}</h6>}
        </Col>
        <Col xs={3} className={styles["icons"]}>
          <Link to="/account" className={styles["photo-link"]}>
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Account"
                className={styles["photo"]}
              />
            ) : (
              <Letter />
            )}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Chart;
