import {
  clearAuthToken,
  setAccessToken,
  setRefreshToken,
} from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  user: null,
  access_token: null,
  refresh_token: null,
};

export const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        errmess: payload.errmess,
      };
    case ActionTypes.LOGIN_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        access_token: payload.access_token,
        refresh_token: payload.refresh_token,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errmess: payload.errmess,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.LOGOUT:
      clearAuthToken();
      return {
        ...state,
        access_token: null,
        refresh_token: null,
      };
    default:
      return state;
  }
};
