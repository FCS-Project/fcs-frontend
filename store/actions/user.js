import instance from "../../axios";
import { GET_USER, UPDATE_USER } from "../../constants";
import * as ActionTypes from "../ActionTypes";

export const getUser = () => {
  return async (dispatch) => {
    try {
      const response = await instance.post(GET_USER);
      if (response.success) {
        dispatch({
          type: ActionTypes.GET_USER_SUCCESS,
          data: response.data.data,
        });
      }
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

export const updateUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await instance.post(UPDATE_USER + "/" + id);
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
