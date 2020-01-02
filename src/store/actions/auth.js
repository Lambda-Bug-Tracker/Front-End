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
