import React from "react";

import Sidebar from "../../components/sidebar";

import Dashboard from "../dashboard";
import Subportfolios from "../subportfolios";
import Learn from "../learn";
import Bots from "../bots";
import Account from "../account";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./style.module.scss";

const App = () => {
  return (
    <Router>
      <div className={styles["container"]}>
        <Sidebar />
        <div className={styles["page"]}>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/subportfolios">
              <Subportfolios />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/bots">
              <Bots />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
