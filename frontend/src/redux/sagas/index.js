import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import { userType } from "../types";

export function* postNewUser(action) {
  try {
    const newUser = yield call(() => axios.post("/api/user/", action.user));
    console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}
export const crearUser = user => ({
  type: userType.CREATE_USER,
  user
});

export default function* rootSaga() {
  yield takeEvery(userType.CREATE_USER, postNewUser);
}
