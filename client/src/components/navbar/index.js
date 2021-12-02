import React from "react";

import { pages } from "./data";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useLocation } from "react-router-dom";

import PFP from "./img/pfp.svg";

import styles from "./style.module.scss";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();

  const routeCheck = (link) => {
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
      <div className={styles["links"]}>
        {pages.map(({ image, title, link }) => (
          <Link to={link} className={styles["page"]}>
            <img src={image} alt={title} />
            <h4 style={routeCheck(link) ? { fontWeight: "600" } : null}>
              {title}
            </h4>
          </Link>
        ))}
      </div>

      <div className={styles["account"]}>
        <Link to="/account" className={styles["photo-link"]}>
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Account"
              className={styles["photo"]}
            />
          ) : (
            <img src={PFP} alt="Account" className={styles["photo"]} />
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
