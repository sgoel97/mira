import React, { useState, useEffect } from "react";

import { auth, logout } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "react-bootstrap/button";

import styles from "./style.module.scss";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    setName(user.displayName);
    setEmail(user.email);
  }, []);

  return (
    <div className="content">
      <h1 className={styles["header"]}>Account</h1>
      <p className={styles["info"]}>Name: {name}</p>
      <p className={styles["info"]}>Email: {email}</p>
      <Button onClick={logout} className={styles["button"]}>
        Sign out
      </Button>
    </div>
  );
};

export default Account;
