import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import styles from "../style.module.scss";

const Register = () => {
  const [email, setEmail] = useState("");

  const reset = async () => {
    try {
      const userCredentials = await sendPasswordResetEmail(auth, email);
      const {
        user: { uid },
      } = userCredentials;
      console.log(`userId: ${uid}`);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className={styles["container"]}>
      <h1>Reset</h1>
      <h6>Reset your account password.</h6>
      <Form className={styles["auth-form"]}>
        <Form.Group className="mb-4" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button onClick={reset} className={styles["button"]}>
          Send password reset email
        </Button>

        <div className={styles["row"]}>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className={styles["link"]}>
              Register now.
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Register;
