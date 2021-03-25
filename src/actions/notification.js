import * as api from "../api";

export const subscribe = (subscription) => async (dispatch) => {
  try {
    const { data } = await api.subscribe(subscription);
    console.log(data, "action");
    dispatch({ type: "PUSH", data });
  } catch (error) {
    console.log(error);
  }
};
