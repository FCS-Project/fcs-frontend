import {
  clearAuthToken,
  setAccessToken,
  setRefreshToken,
} from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  success: false,
  access_token: null,
  refresh_token: null,
};

export const authReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
        errmess: action.errmess,
      };
    case ActionTypes.LOGIN_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };

    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errmess: "error",
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.EDIT_INFO_OTP_SUCCESS:
      return {
        ...state,
        errmess: null,
        success: action.success,
      };
    case ActionTypes.EDIT_INFO_OTP_FAIL:
      return {
        ...state,
        errmess: null,
        success: action.success,
      };
    case ActionTypes.LOGOUT:
      clearAuthToken();
      return {
        ...state,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.OTP_LOGIN_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.OTP_LOGIN_FAIL:
      return {
        ...state,
        errmess: "error",
        access_token: null,
        refresh_token: null,
      };
    default:
      return state;
  }
};
