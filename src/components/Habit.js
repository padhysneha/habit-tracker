import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../actions/habits";
function Habit({ habit, setCurrentId }) {
  const dispatch = useDispatch();
  // const completeHandler = () => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };

  return (
    <div className="todo">
      <h3>
        {habit.habit}
        <button onClick={() => setCurrentId(habit._id)}>edit</button>
        <button onClick={() => dispatch(deleteHabit(habit._id))}>delete</button>
      </h3>
    </div>
  );
}

export default Habit;
