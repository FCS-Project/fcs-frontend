import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  user: null,
  success: null,
};

export const userReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.data,
      };
    case ActionTypes.GET_USER_FAIL:
      return {
        ...state,
        user: null,
        errmess: action.errmess,
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        errmess: null,
        success: true,
      };
    case ActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        errmess: action.errmess,
      };
    default:
      return state;
  }
};
