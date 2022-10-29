import { setAccessToken, setRefreshToken } from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  loading: false,
  access_token: null,
  refresh_token: null,
};

export const authReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        errmess: null,
      };
    case ActionTypes.REGISTER_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        loading: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errmess: action.errmess,
      };
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errmess: null,
      };
    case ActionTypes.LOGIN_SUCCESS:
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        loading: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errmess: action.errmess,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.EDIT_INFO_OTP_SUCCESS:
      return {
        ...state,
        errmess: action.errmess,
        success: action.success,
      };
    case ActionTypes.EDIT_INFO_OTP_FAIL:
      return {
        ...state,
        errmess: action.errmess,
        success: action.success,
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
        errmess: action.errmess,
      };
    case ActionTypes.SET_TOKEN_IN_STATE:
      return {
        ...state,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.REMOVE_TOKEN_FROM_STATE:
      return {
        ...state,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      setAccessToken(null);
      setRefreshToken(null);
      return {
        ...state,
        errmess: null,
        success: action.success,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.LOGOUT_FAIL:
      return {
        ...state,
        errmess: action.errmess,
      };
    default:
      return state;
  }
};
