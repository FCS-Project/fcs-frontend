import instance from "../../axios";
import { OTPSIGNIN, SIGNIN, SIGNUP, VERIFY_OTP } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const signup = (dto) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(SIGNUP, dto);
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      });
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
    try {
      const response = await instance.post(SIGNIN, dto);
      if (response) {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          data: response.data,
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

export const verifyOtp = (dto) => {
  return async (dispatch) => {
    try {
      if (dto.editInfo) {
        const response = await instance.post(VERIFY_OTP, dto);
        if (response) {
          dispatch({
            type: ActionTypes.EDIT_INFO_OTP_SUCCESS,
            success: response.data.success,
          });
        }
      } else {
        const response = await instance.post(VERIFY_OTP, dto);
        if (response) {
          dispatch({
            type: ActionTypes.OTP_LOGIN_SUCCESS,
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