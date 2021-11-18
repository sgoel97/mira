import React from "react";

import { pages } from "./data";

import { Link, useLocation } from "react-router-dom";

import styles from "./style.module.scss";

const Sidebar = () => {
  const location = useLocation();

  const routeCheck = (link) => {
    console.log(link);
    if (location.pathname !== "/") {
      if (link === "/") {
        return false;
      }
      return location.pathname.includes(link);
    } else {
      return link === "/";
    }
  };

  return (
    <div className={styles["container"]}>
      <h1>Mira</h1>
      {pages.map(({ image, title, link }) => (
        <Link to={link} className={styles["page"]}>
          <img src={image} alt={title} />
          <h4 style={routeCheck(link) ? { color: "#53B9EA" } : null}>
            {title}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
