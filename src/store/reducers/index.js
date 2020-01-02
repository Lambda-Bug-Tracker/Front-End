import { combineReducers } from "redux";
import { auth } from "./auth";
import { projectBugs } from "./projectBugs";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  projectBugs
});
