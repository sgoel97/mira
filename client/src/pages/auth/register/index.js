import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import styles from "../style.module.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

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

  const register = async () => {
    if (password.length < 6) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (name.length === 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!passwordError && !emailError && !nameError) {
      realRegister();
    }
  };

  const realRegister = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      updateProfile(user, {
        displayName: name,
      });
      const {
        user: { uid },
      } = userCredentials;
      console.log(`userId: ${uid}`);

      const db = getDatabase();
      set(ref(db, "users/" + uid), {
        name: name,
        email: email,
        howToInvest: false,
        financial: false,
        ratios: false,
        investing: false,
        company: false,
        streak: 0,
        gain: 0,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles["container"]}>
      <h1>Sign up</h1>
      <h6>Sign up for a Mira account.</h6>
      <Form className={styles["auth-form"]}>
        <Form.Group className="mb-4" controlId="name">
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <Form.Text className={styles["error"]}>
              Please enter a name.
            </Form.Text>
          )}
        </Form.Group>
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

        <Button onClick={register} className={styles["button"]}>
          Register
        </Button>

        {/* <Button onClick={signInWithGoogle} className={styles["button"]}>
          Register with Google
        </Button> */}

        <div className={styles["row"]}>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={styles["link"]}>
              Login now.
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Register;
