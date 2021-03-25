import { combineReducers } from "redux";
import habits from "./habits";
import auth from "./auth";
import notification from "./notification";
export default combineReducers({
  habits,
  auth,
  notification,
});
