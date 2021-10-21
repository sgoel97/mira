import Landing from "./pages/landing";
import Auth from "./pages/auth";
import Dashboard from "./pages/app";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app">
          <Landing />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
