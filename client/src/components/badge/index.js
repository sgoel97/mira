import React from "react";

import { Link } from "react-router-dom";

import HowToInvest from "./img/how-to-invest.png";
import Investing from "./img/investing.png";
import Company from "./img/company.png";
import Financial from "./img/financial.png";
import Ratios from "./img/ratios.png";

import styles from "./style.module.scss";

const Badge = ({ title, completed }) => {
  const data = [
    {
      title: "Introduction to Investing",
      image: HowToInvest,
      link: "/learn/how-to-invest",
    },
    { title: "Investing", image: Investing, link: "/learn/investing" },
    { title: "Company", image: Company, link: "/learn/company" },
    {
      title: "Intro to Financial Statements",
      image: Financial,
      link: "/learn/financial",
    },
    { title: "Introduction to Ratios", image: Ratios, link: "/learn/ratios" },
  ];

  const badge = data.filter((journey) => journey.title === title)[0];

  return (
    <Link to={badge.link} style={{ textDecoration: "none" }}>
      <div className={styles["badge"]}>
        <div className={completed && styles["completed"]}>
          <img src={badge.image} alt={title} />
        </div>
        <p>
          {title} ({completed ? "complete" : "incomplete"})
        </p>
      </div>
    </Link>
  );
};

export default Badge;
