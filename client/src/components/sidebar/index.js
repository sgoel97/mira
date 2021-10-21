import React, { useState } from "react";

import { pages } from "./data";

import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const Sidebar = () => {
  const [active, setActive] = useState("/");

  return (
    <div className={styles["container"]}>
      <h1>Mira</h1>
      {pages.map(({ image, title, link }) => (
        <Link
          to={link}
          onClick={() => setActive(link)}
          className={styles["page"]}
        >
          <img src={image} alt={title} />
          <h4 style={active === link ? { color: "#53B9EA" } : null}>{title}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
