import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
