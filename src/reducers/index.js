import { combineReducers } from "redux";
import habits from "./habits";
import auth from "./auth";
export default combineReducers({
  habits,
  auth,
});
