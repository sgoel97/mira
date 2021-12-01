import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { auth, signInWithGoogle } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import styles from "../style.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);

  const login = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
      <h1>Sign in</h1>
      <h6>Sign in to access your account.</h6>
      <Form className={styles["auth-form"]}>
        <Form.Group className="mb-4" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button onClick={login} className={styles["button"]}>
          Login
        </Button>
        <Button onClick={signInWithGoogle} className={styles["button"]}>
          Login with Google
        </Button>

        <div className={styles["row"]}>
          <Link to="/reset" className={styles["link"]}>
            <p>Forgot Password?</p>
          </Link>
        </div>
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

export default Login;
