import React, { useState } from "react";

import Quizzes from "./data";

import Header from "../../components/header";

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

  const Completed = () => (
    <Row>
      <Col className={styles["done"]}>
        <img src={Medal} alt="" />
        <p className={styles["congrats"]}>
          Score: {correct} / {quizData.questions.length}
        </p>
        <p className={styles["congrats"]}>Congratulations! You have mastered</p>
        <p className={styles["title"]}>{quizData.title}</p>
        <Link to="/learn">
          <Button className={styles["button"]}>Take me back</Button>
        </Link>
      </Col>
    </Row>
  );

  return (
    <Container fluid>
      <Header title={quizData.title} />
      <Row className={styles["subtitle"]}>
        <p>Learn</p>
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
    </Container>
  );
};

export default Quiz;
