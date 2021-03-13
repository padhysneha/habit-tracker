import React from "react";
import Habit from "./Habit";
import { useSelector } from "react-redux";

function Habits({ setCurrentId }) {
  const habits = useSelector((state) => state.habits);

  return (
    <div className="todo-container">
      {habits.map((habit) => (
        <div key={habit._id}>
          <Habit habit={habit} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
}

export default Habits;
