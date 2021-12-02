import React, { useState, useEffect } from "react";

import Quizzes from "./data";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";

import { Link, useLocation } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Medal from "./img/medal.png";

import styles from "./style.module.scss";

const Quiz = () => {
  const location = useLocation();
  const [active, updateActive] = useState(0);
  const [correct, updateCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState(null);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (
      active === quizData.questions.length &&
      correct >= quizData.questions.length - 1
    ) {
      console.log("check");
      const db = getDatabase();

      const starCountRef = ref(db, "users/" + user.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();

        console.log(data);

        const update = data;
        update[quizData.db] = true;

        console.log(update);
        set(ref(db, "users/" + user.uid), update);
      });
    }
  }, [active]);

  const quizData = Quizzes.filter(
    (quiz) => quiz.link === location.pathname.slice(7)
  )[0];

  const nextQuestion = () => {
    if (selected !== null) {
      setRevealed(true);
      if (selected === quizData.questions[active].correct) {
        updateCorrect(correct + 1);
      }
      setTimeout(() => {
        updateActive(active + 1);
        setSelected(null);
        setError(false);
        setRevealed(false);
      }, 1000);
    } else {
      setError(true);
    }
  };

  const skip = () => {
    updateActive(active + 1);
    setSelected(null);
    setError(false);
    setRevealed(false);
  };

  const choose = (i) => {
    if (!revealed) {
      setSelected(i);
    }
  };

  const checkColor = (i) => {
    if (!revealed) {
      return selected === i ? "#ECECEC" : "white";
    } else {
      if (i !== selected) {
        return "white";
      }
      return selected === quizData.questions[active].correct
        ? "#2BB596"
        : "#E3507A";
    }
  };

  const Question = ({ question }) => (
    <>
      <Row className={styles["question"]}>
        <p>{question.question}</p>
      </Row>
      {error && (
        <Row className={styles["error"]}>
          <p>Please Select an Answer</p>
        </Row>
      )}
      {question.answers.map((answer, i) => (
        <Row
          className={styles["answer"]}
          onClick={() => choose(i)}
          style={{ background: checkColor(i) }}
        >
          <p>{answer}</p>
        </Row>
      ))}
      <Row className={styles["buttons"]}>
        <div onClick={skip} className={styles["button"]}>
          <p>Skip</p>
        </div>
        <div onClick={nextQuestion} className={styles["button"]}>
          <p>Next</p>
        </div>
      </Row>
    </>
  );

  const Completed = () => {
    if (correct >= quizData.questions.length - 1) {
      return (
        <Row>
          <Col className={styles["done"]}>
            <img src={Medal} alt="" />
            <p className={styles["congrats"]}>
              Score: {correct} / {quizData.questions.length}
            </p>
            <p className={styles["congrats"]}>
              Congratulations! You have mastered
            </p>
            <p className={styles["title"]}>{quizData.title}</p>
            <Link to="/learn">
              <Button className={styles["button"]}>Take me back</Button>
            </Link>
          </Col>
        </Row>
      );
    } else {
      return (
        <Row>
          <Col className={styles["done"]}>
            <p className={styles["congrats"]}>
              Score: {correct} / {quizData.questions.length}
            </p>
            <p className={styles["congrats"]}>
              Sorry! Unfortunatly, you must get {quizData.questions.length - 1}{" "}
              questions correct to pass.
            </p>
            <p className={styles["title"]}></p>
            <Link to="/learn">
              <Button className={styles["button"]}>Take me back</Button>
            </Link>
          </Col>
        </Row>
      );
    }
  };

  return (
    <Container fluid className="content">
      <Row className={styles["subtitle"]}>
        <h2>{quizData.title}</h2>
      </Row>
      <Row className={styles["header"]}>
        <Col xs={1} className={styles["correct"]}>
          <p>Score:</p>
          <p>
            {correct} / {quizData.questions.length}
          </p>
        </Col>
        <Col xs={11} className={styles["progress"]}>
          <div className={styles["outer"]}>
            <div
              className={styles["inner"]}
              style={{
                width: `${(active / quizData.questions.length) * 100}%`,
              }}
            ></div>
          </div>
        </Col>
      </Row>
      {active < quizData.questions.length ? (
        <Question question={quizData.questions[active]} />
      ) : (
        <Completed />
      )}
      <div style={{ marginBottom: "4rem" }} />
    </Container>
  );
};

export default Quiz;
