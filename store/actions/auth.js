import instance from "../../axios";
import { SIGNIN, SIGNUP } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const signup = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(SIGNUP, data);
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
        data: response.data,
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

export const signin = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(SIGNIN, data);
      if (response) {
        console.log(response);
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
