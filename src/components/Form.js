import React, { useState, useEffect } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { createHabit, updateHabit } from "../actions/habits";

function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const habit = useSelector((state) =>
    currentId ? state.habits.find((p) => p._id == currentId) : null
  );
  const [habits, setHabits] = useState({
    habit: "",
    completed: false,
  });

  useEffect(() => {
    if (habit) {
      setHabits(habit);
    }
  }, [habit]);

  const inputTextHandler = (e) => {
    setHabits({ ...habits, habit: e.target.value }); //since useState is an object
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateHabit(currentId, habits));
    }
    if (habits.habit !== "") {
      dispatch(createHabit(habits));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setHabits({ habit: "", completed: false });
  };

  return (
    <div>
      <form action="">
        <input
          value={habits.habit}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitTodoHandler}> + </button>
      </form>
    </div>
  );
}

export default Form;
