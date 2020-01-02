import { combineReducers } from "redux";
import { auth } from "./auth";
import { firebaseReducer } from "react-redux-firebase";

// Using combine reducers to break up reducers into different files
export default combineReducers({
  auth,
  firestore: firebaseReducer
});
