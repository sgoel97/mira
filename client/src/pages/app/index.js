import React, { useState, useEffect } from "react";

import Sidebar from "../../components/sidebar";

import Dashboard from "../dashboard";
import Learn from "../learn";
import Quiz from "../quiz";
import Trade from "../trade";
import Account from "../account";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./style.module.scss";

const App = () => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    photoURL: null,
  });

  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (!user) {
      history.replace("/login");
    } else {
      const { displayName, email, photoURL } = user;
      setUserData({ name: displayName, email: email, photoURL: photoURL });
    }
  }, [user, loading]);

  return (
    <Router>
      <div className={styles["container"]}>
        <Sidebar />
        <div className={styles["page"]}>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/learn">
              <Learn />
            </Route>
            <Route path="/learn">
              <Quiz />
            </Route>

            <Route path="/trade">
              <Trade />
            </Route>

            <Route path="/account">
              <Account userData={userData} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
