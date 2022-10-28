import instance from "../../axios";
import { GET_USER, UPDATE_USER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(GET_USER, data);
      dispatch({
        type: ActionTypes.GET_USER_SUCCESS,
        data: response.data.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.GET_USER_FAIL,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};

export const updateUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(UPDATE_USER, data);
      dispatch({
        type: ActionTypes.UPDATE_USER_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.UPDATE_USER_FAIL,
        errmess:
          e?.response?.data?.error?.message ??
          e?.response?.data?.message ??
          e?.response?.message ??
          e,
      });
    }
  };
};
