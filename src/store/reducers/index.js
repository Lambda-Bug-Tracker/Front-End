import { combineReducers } from "redux";
import { auth } from "./auth";
import { counter } from "./counter";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  counter
});
