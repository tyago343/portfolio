import { userType } from "../types";

export const createUser = user => ({
  type: userType.CREATE_USER,
  user
});
