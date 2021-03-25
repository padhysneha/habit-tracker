import React, { useState, useEffect } from "react";
import Header from "..//Header";
import Form from "../Form";
import { useDispatch } from "react-redux";
import { getHabits } from "../../actions/habits";
import Habits from "../Habits";

function Home() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getHabits());
  }, [dispatch, currentId]);

  return (
    <div>
      <Header />
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Habits setCurrentId={setCurrentId} />
    </div>
  );
}

export default Home;
