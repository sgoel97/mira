import React from "react";

import { Link } from "react-router-dom";

import HowToInvest from "./img/how-to-invest.png";
import Investing from "./img/investing.png";
import Company from "./img/company.png";
import Financial from "./img/financial.png";
import Ratios from "./img/ratios.png";

import styles from "./style.module.scss";

const Badge = ({ title }) => {
  const data = [
    {
      title: "How to Invest",
      image: HowToInvest,
      link: "/learn/how-to-invest",
    },
    { title: "Investing", image: Investing, link: "/learn/investing" },
    { title: "Company", image: Company, link: "/learn/company" },
    { title: "Financial", image: Financial, link: "/learn/financial" },
    { title: "Ratios", image: Ratios, link: "/learn/ratios" },
  ];

  const badge = data.filter((journey) => journey.title === title)[0];

  return (
    <Link to={badge.link} style={{ textDecoration: "none" }}>
      <div className={styles["badge"]}>
        <img src={badge.image} alt={title} />
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default Badge;
