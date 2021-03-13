import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { useDispatch } from "react-redux";
import Habits from "./components/Habits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import { getHabits } from "./actions/habits";
import { Divider } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getHabits());
  }, [dispatch, currentId]);

  return (
    <div>
      <Router>
        <Header />
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Habits setCurrentId={setCurrentId} />
        <Switch>
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
