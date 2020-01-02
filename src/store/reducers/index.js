import { combineReducers } from "redux";
import { auth } from "./auth";
import { projectBugs } from "./projectBugs";
import { firebaseReducer } from "react-redux-firebase";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  projectBugs,
  firestore: firebaseReducer
});
