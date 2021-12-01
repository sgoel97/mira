import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import Form from "react-bootstrap/form";
import Button from "react-bootstrap/button";

import styles from "../style.module.scss";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/");
  }, [user, loading]);

  const register = async () => {
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
    } catch (err) {
      console.error(err);
      alert(err.message);
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
        </Form.Group>
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

        <Button onClick={register} className={styles["button"]}>
          Register
        </Button>

        <Button onClick={signInWithGoogle} className={styles["button"]}>
          Register with Google
        </Button>

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
