import React, { useState, useEffect } from "react";

import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Reset from "./pages/auth/reset";

import Navbar from "./components/navbar";

import Learn from "./pages/learn";
import Quiz from "./pages/quiz";
import Invest from "./pages/invest";
import Account from "./pages/account";
import Leaderboard from "./pages/leaderboard";
import Streaks from "./pages/streaks";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import "./App.css";

function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Router>
      <Switch>
        {/* Landing Page */}
        <Route path="/app">
          <Landing />
        </Route>

        {/* Auth */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>

        {/* Web App */}
        {user && (
          <>
            <Navbar />

            <Route exact path="/" render={() => <Redirect to="/learn" />} />

            <Route exact path="/learn">
              <Learn />
            </Route>
            <Route path="/learn/*">
              <Quiz />
            </Route>

            <Route path="/invest">
              <Invest />
            </Route>

            <Route path="/leaderboard">
              <Leaderboard />
            </Route>

            <Route path="/streaks">
              <Streaks />
            </Route>

            <Route path="/account">
              <Account />
            </Route>
          </>
        )}

        <Route
          render={() => {
            return user ? <Redirect to="/learn" /> : <Redirect to="/login" />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
