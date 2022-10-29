import instance from "../../axios";
import { LOGOUT, SIGNIN, SIGNUP, VERIFY_OTP } from "../../constants";
import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";

export const signup = (dto) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(SIGNUP, dto);
      if (response.data) {
        dispatch({
          type: ActionTypes.REGISTER_SUCCESS,
          errmess: null,
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.REGISTER_FAIL,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const signin = (dto) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST });
    try {
      const response = await instance.post(SIGNIN, dto);
      if (response.data) {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          errmess: null,
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.LOGIN_FAIL,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const logout = () => {
  const jwt = getAccessToken();
  return async (dispatch) => {
    try {
      const response = await instance.post(
        LOGOUT,
        {},
        {
          headers: { Authorization: `Bearer ${jwt}` },
        }
      );
      if (response.data.success) {
        removeTokenFromState();
        dispatch({
          type: ActionTypes.LOGOUT_SUCCESS,
          errmess: null,
          access_token: null,
          refresh_token: null,
        });
      }
    } catch (e) {
      dispatch({
        type: ActionTypes.LOGOUT_FAIL,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const verifyOtp = (dto) => {
  return async (dispatch) => {
    try {
      if (dto.editInfo) {
        const response = await instance.post(VERIFY_OTP, dto);
        if (response) {
          dispatch({
            type: ActionTypes.EDIT_INFO_OTP_SUCCESS,
          });
        }
      } else {
        const response = await instance.post(VERIFY_OTP, dto);
        if (response) {
          dispatch({
            type: ActionTypes.OTP_LOGIN_SUCCESS,
            errmess: null,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
          });
        }
      }
    } catch (e) {
      if (dto.editInfo) {
        dispatch({
          type: ActionTypes.EDIT_INFO_OTP_FAIL,
          errmess:
            e?.response?.data?.error?.message ??
            e?.response?.data?.message ??
            e?.response?.message ??
            e,
        });
      } else {
        dispatch({
          type: ActionTypes.LOGIN_FAIL,
          errmess:
            e?.response?.data?.error?.message ??
            e?.response?.data?.message ??
            e?.response?.message ??
            e,
        });
      }
    }
  };
};

export const setTokensInState = (access_token, refresh_token) => (dispatch) => {
  return dispatch({
    type: ActionTypes.SET_TOKEN_IN_STATE,
    access_token: access_token,
    refresh_token: refresh_token,
  });
};

export const removeTokenFromState = () => (dispatch) => {
  // axios.defaults.headers["Cookie"] = null;
  setAccessToken(null);
  setRefreshToken(null);
  // clearAuthToken();
  return dispatch({
    type: ActionTypes.REMOVE_TOKEN_FROM_STATE,
  });
};
