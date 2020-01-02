import { AUTHENTICATE, SIGN_OUT } from "../actions/auth";

const initialState = {
  token: localStorage.getItem("token")
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: localStorage.getItem("token")
      };
    case SIGN_OUT:
      return {
        ...state,
        token: localStorage.getItem("token")
      };
    default:
      return state;
  }
};
