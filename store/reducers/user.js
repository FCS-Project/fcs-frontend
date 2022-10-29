import * as ActionTypes from "../ActionTypes";

const initState = {
  errmess: null,
  loading: false,
  data: null,
};

export const userReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        errmess: null,
        data: action.data,
      };
    case ActionTypes.GET_USER_FAIL:
      return {
        ...state,
        data: null,
        errmess: action.errmess,
      };
    case ActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        errmess: null,
        data: action.data,
      };
    case ActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        errmess: action.errmess,
      };
    case ActionTypes.EMPTY_USER_SUCCESS:
      return {
        ...state,
        errmess: action.errmess,
        data: action.data,
      };
    case ActionTypes.EMPTY_USER_FAIL:
      return {
        ...state,
        errmess: action.errmess,
      };
    default:
      return state;
  }
};
