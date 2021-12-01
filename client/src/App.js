import Landing from "./pages/landing";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Reset from "./pages/auth/reset";
import Dashboard from "./pages/app";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
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
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
