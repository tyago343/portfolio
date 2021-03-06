import { userType } from "../types";

export const createUser = user => ({
  type: userType.CREATE_USER,
  payload: user
});
export const userToReducer = user => ({
  type: userType.USER_TO_REDUCER,
  payload: user
});
export const loginUser = credentials => ({
  type: userType.LOGIN_USER,
  payload: credentials
});
