import instance from "../../axios";
import { GET_USER, UPDATE_USER } from "../../constants";
import { clearAuthToken, getAccessToken } from "../../lib/auth";
import * as ActionTypes from "../ActionTypes";

export const getUser = () => {
  const jwt = getAccessToken();
  return async (dispatch) => {
    try {
      const response = await instance.get(GET_USER, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (response.data.success) {
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

export const updateUser = (id, data) => {
  const jwt = getAccessToken();
  return async (dispatch) => {
    try {
      const response = await instance.patch(UPDATE_USER + "/" + id, data, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      if (response.data.success) {
        clearAuthToken();
        dispatch({
          type: ActionTypes.UPDATE_USER_SUCCESS,
          data: response.data.data,
        });
      }
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

export const emptyUser = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.EMPTY_USER_SUCCESS,
        data: null,
      });
    } catch (e) {
      dispatch({
        type: ActionTypes.EMPTY_USER_FAIL,
        errmess: "EMPTY USER FAILED",
      });
    }
  };
};
