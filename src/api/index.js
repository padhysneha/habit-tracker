import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});
export const fetchHabits = () => API.get("/habits");

export const createHabit = (newHabit) => API.post("/habits", newHabit);

export const updateHabit = (id, updatedHabit) =>
  API.patch(`/habits/${id}`, updatedHabit);

export const deleteHabit = (id) => API.delete(`/habits/${id}`);

export const signin = (formData) => API.post("/users/signin", formData);

export const signup = (formData) => API.post("/users/signup", formData);

export const subscribe = (subscription) => API.post("/subscribe", subscription);
