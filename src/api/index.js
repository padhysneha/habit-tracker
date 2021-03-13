import axios from "axios";

const url = "http://localhost:4000/habits";

export const fetchHabits = () => axios.get(url);

export const createHabit = (newHabit) => axios.post(url, newHabit);

export const updateHabit = (id, updatedHabit) =>
  axios.patch(`${url}/${id}`, updatedHabit);

export const deleteHabit = (id) => axios.delete(`${url}/${id}`);
