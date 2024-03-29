import { setAccessToken, setRefreshToken } from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";

const initState = {
  errmess: null,
  loading: false,
  access_token: null,
  refresh_token: null,
  otp_verified: false,
};

export const authReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        errmess: null,
        otp_verified: false,
      };
    case ActionTypes.REGISTER_SUCCESS:
      toast.success("Signed up successfully!");
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        loading: false,
        otp_verified: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.REGISTER_FAIL:
      toast.error(action.errmess.toString());
      return {
        ...state,
        loading: false,
        otp_verified: false,
        errmess: action.errmess,
      };
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        otp_verified: false,
        errmess: null,
      };
    case ActionTypes.LOGIN_SUCCESS:
      toast.success("Logged in successfully!");
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        loading: false,
        otp_verified: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.LOGIN_FAIL:
      toast.error(action.errmess.toString());
      return {
        ...state,
        errmess: action.errmess,
        otp_verified: false,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.EDIT_INFO_REQUEST:
      toast.success("OTP has been set to your email!");
      return {
        ...state,
        otp_verified: false,
        errmess: null,
      };
    case ActionTypes.EDIT_INFO_OTP_SUCCESS:
      toast.success("OTP is verified!");
      return {
        ...state,
        errmess: action.errmess,
        otp_verified: true,
      };
    case ActionTypes.EDIT_INFO_OTP_FAIL:
      toast.error(action.errmess.toString());
      return {
        ...state,
        errmess: action.errmess,
        otp_verified: false,
      };
    case ActionTypes.OTP_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        otp_verified: false,
        errmess: null,
      };
    case ActionTypes.OTP_LOGIN_SUCCESS:
      toast.success("Logged in successfully!");
      setAccessToken(action.access_token);
      setRefreshToken(action.refresh_token);
      return {
        ...state,
        errmess: null,
        loading: false,
        otp_verified: true,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.OTP_LOGIN_FAIL:
      toast.error(action.errmess.toString());
      return {
        ...state,
        loading: false,
        otp_verified: false,
        errmess: action.errmess,
      };
    case ActionTypes.SET_TOKEN_IN_STATE:
      return {
        ...state,
        loading: false,
        otp_verified: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.REMOVE_TOKEN_FROM_STATE:
      return {
        ...state,
        loading: false,
        otp_verified: false,
        access_token: null,
        refresh_token: null,
      };
    case ActionTypes.LOGOUT_SUCCESS:
      toast.success("Logged out successfully!");
      setAccessToken(null);
      setRefreshToken(null);
      return {
        ...state,
        errmess: null,
        loading: false,
        otp_verified: false,
        access_token: action.access_token,
        refresh_token: action.refresh_token,
      };
    case ActionTypes.LOGOUT_FAIL:
      toast.error(action.errmess.toString());
      return {
        ...state,
        loading: false,
        otp_verified: false,
        errmess: action.errmess,
      };
    default:
      return state;
  }
};
