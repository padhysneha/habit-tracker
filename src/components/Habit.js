import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../actions/habits";
import { Button } from "@material-ui/core";
function Habit({ habit, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  return (
    <div className="todo">
      {habit.habit}
      {(user?.result?.googleId == habit?.creator ||
        user?.result?._id == habit?.creator) && (
        <Button onClick={() => setCurrentId(habit._id)}>edit</Button>
      )}
      {(user?.result?.googleId == habit?.creator ||
        user?.result?._id == habit?.creator) && (
        <Button
          disabled={!user?.result}
          onClick={() => dispatch(deleteHabit(habit._id))}
        >
          delete
        </Button>
      )}
    </div>
  );
}

export default Habit;
