import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  user: null,
};

export const userReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: payload.data,
      };
    case ActionTypes.GET_USER_FAIL:
      return {
        ...state,
        user: null,
        errmess: payload.errmess,
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        errmess: null,
      };
    case ActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        errmess: payload.errmess,
      };
    default:
      return state;
  }
};
