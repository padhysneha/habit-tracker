import * as api from "../api";

//Action creators

export const getHabits = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHabits();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createHabit = (habit) => async (dispatch) => {
  try {
    const { data } = await api.createHabit(habit);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateHabit = (id, habit) => async (dispatch) => {
  try {
    const { data } = await api.updateHabit(id, habit);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteHabit = (id) => async (dispatch) => {
  try {
    await api.deleteHabit(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
