import React from "react";
import Habit from "./Habit";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
function Habits({ setCurrentId }) {
  const habits = useSelector((state) => state.habits);

  return !habits.length ? (
    <CircularProgress />
  ) : (
    <div className="todo-container">
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>
            <Habit habit={habit} setCurrentId={setCurrentId} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Habits;
