import axios from "axios";
import firebase from "../../config/firebase";
import { backendURL } from "../../config/backendURL.js";

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const LOGOUT_START = "LOGOUT_START",
  LOGOUT_SUCCESS = "LOGOUT_SUCCESS",
  LOGOUT_ERROR = "LOGOUT_ERROR",
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  REGISTER_START = "REGISTER_START",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_ERROR = "REGISTER_ERROR",
  GOOGLE_LOGIN_START = "GOOGLE_LOGIN_START",
  GOOGLE_LOGIN_SUCCESS = "GOOGLE_LOGIN_SUCCESS",
  GOOGLE_LOGIN_FAILURE = "GOOGLE_LOGIN_FAILURE",
  GOOGLE_REGISTER_START = "GOOGLE_REGISTER_START",
  GOOGLE_REGISTER_SUCCESS = "GOOGLE_REGISTER_SUCCESS",
  GOOGLE_REGISTER_FAILURE = "GOOGLE_REGISTER_FAILURE";

/* LOGOUT ACTION */
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT_START });
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: LOGOUT_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: LOGOUT_ERROR, payload: err.message });
      alert(err.message);
    });
};

/* EMAIL LOGIN ACTION */
export const login = data => dispatch => {
  dispatch({ type: LOGIN_START });
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      console.log("Login response:", res);
    })
    .catch(err => {
      dispatch({ type: LOGIN_ERROR, payload: err.message });
      alert(err.message);
    });
};

/* EMAIL REGISTER ACTION */
export const register = data => dispatch => {
  dispatch({ type: REGISTER_START });
  firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      const newUser = {
        firebase_id: res.user.uid,
        email: res.user.email,
        displayName: `${data.first_name} ${data.last_name}`
      };
      // a commit
      console.log("New user info:", newUser);
      axios
        .post(`${backendURL}/auth/register`, newUser) // { headers: auth }
        .then(response => console.log("Response:", response))
        .catch(err => console.log("Error:", err));
    })
    .then(() => {
      dispatch({ type: REGISTER_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: REGISTER_ERROR, payload: err.message });
      alert(err.message);
    });
};

/* GOOGLE LOGIN ACTION */
export const googleLogin = () => dispatch => {
  dispatch({ type: GOOGLE_LOGIN_START });
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      // google login response
      console.log("Google response:", res);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = res.credential.accessToken;

      console.log("Token:", token);

      // The signed-in user info.
      const user = res.user.displayName;
      const userPicture = res.additionalUserInfo.profile.picture;

      console.log("User:", user);
      console.log("Picture:", userPicture);

      // ...
      dispatch({ type: GOOGLE_LOGIN_SUCCESS });
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("Error code:", errorCode);

      const errorMessage = error.message;
      console.log("Error message:", errorMessage);

      // The email of the user's account used.
      const email = error.email;
      console.log("email:", email);

      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("Credential:", credential);

      // ...
      dispatch({ type: GOOGLE_LOGIN_FAILURE });
    });
};

/* GOOGLE REGISTER ACTION */
export const googleRegister = () => dispatch => {
  dispatch({ type: GOOGLE_REGISTER_START });
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      // google login response
      console.log("Google response:", res);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = res.credential.accessToken;
      console.log("Token:", token);
      // const auth = { Authorization: `Bearer: ${token}` };
      const newUser = {
        firebase_id: res.user.uid,
        email: res.user.email,
        displayName: res.user.displayName
      };
      // a commit
      console.log("New user info:", newUser);
      axios
        .post(`${backendURL}/auth/register`, newUser) // { headers: auth }
        .then(response => console.log("Response:", response))
        .catch(err => console.log("Error:", err));
      // The signed-in user info.
      const user = res.user.displayName;
      const userPicture = res.additionalUserInfo.profile.picture;
      console.log("User:", user);
      console.log("Picture:", userPicture);
      // ...
      dispatch({ type: GOOGLE_REGISTER_SUCCESS });
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("Error code:", errorCode);
      const errorMessage = error.message;
      console.log("Error message:", errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log("email:", email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("Credential:", credential);
      // ...
      dispatch({ type: GOOGLE_REGISTER_FAILURE });
    });
};

/* old code */

export const AUTHENTICATE = "AUTHENTICATE",
  SIGN_OUT = "SIGN_OUT";

export const authenticate = () => dispatch => {
  localStorage.setItem("token", true);
  dispatch({ type: AUTHENTICATE });
};

export const signOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};
