import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { auth, signInWithGoogle } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import Graphic from "../vector.svg";

import styles from "../style.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const login = async () => {
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!passwordError && !emailError) {
      realLogin();
    }
  };

  const realLogin = async () => {
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
      setUserError(false);
    } catch (err) {
      console.error(err);
      console.log(validateEmail(email));
      if (password.length >= 6 && !validateEmail(email)) {
        setUserError(true);
      }
    }
  };

  return (
    <div className={styles["container"]}>
      <img src={Graphic} className={styles["graphic"]} />
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
          {emailError && (
            <Form.Text className={styles["error"]}>
              Please enter a valid email.
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <Form.Text className={styles["error"]}>
              Please enter a password that is at least 6 characters long.
            </Form.Text>
          )}
        </Form.Group>

        <Button onClick={login} className={styles["button"]}>
          Login
        </Button>
        {userError && (
          <p
            className={styles["error"]}
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            This email is not registered with Mira.
          </p>
        )}

        {/* <Button onClick={signInWithGoogle} className={styles["button"]}>
          Login with Google
        </Button> */}

        {/* <div className={styles["row"]}>
          <Link to="/reset" className={styles["link"]}>
            <p>Forgot Password?</p>
          </Link>
        </div> */}

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
