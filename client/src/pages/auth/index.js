import React from "react";

import { Link } from "react-router-dom";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import styles from "./style.module.scss";

const Auth = () => {
  return (
    <div className={styles["container"]}>
      <h1>Sign in</h1>
      <h6>Sign in to access your account.</h6>

      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className={styles["row"]}>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>

          <a className={styles["forgot"]}>
            <p>Forgot Password?</p>
          </a>
        </div>

        <Link to="/">
          <Button className={styles["submit"]}>Login</Button>
        </Link>
      </Form>
    </div>
  );
};

export default Auth;
