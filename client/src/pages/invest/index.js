import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./style.module.scss";

const Invest = () => {
  const [setting, setSetting] = useState("trade");
  return (
    <Container fluid>
      <Row style={{ padding: "0" }}>
        <div className={styles["block"]}>
          <p onClick={() => setSetting("trade")}>Trade</p>
          <p onClick={() => setSetting("portfolio")}>Portfolio</p>
        </div>
        {setting === "trade" ? (
          <iframe
            src="https://ar-fantasy-stock.herokuapp.com/trade"
            style={{ height: "88vh", width: "100vw", padding: "0" }}
          />
        ) : (
          <iframe
            src="https://ar-fantasy-stock.herokuapp.com/portfolio"
            style={{ height: "88vh", width: "100vw", padding: "0" }}
          />
        )}
      </Row>
    </Container>
  );
};

export default Invest;
