import { userType } from "../types";

export default (initialState = {}, action) => {
  switch (action.type) {
    case userType.USER_TO_REDUCER:
      return Object.assign({}, initialState, action.payload);
    default:
      return initialState;
  }
};
