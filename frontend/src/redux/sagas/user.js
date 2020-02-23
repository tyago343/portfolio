import axios from "axios";
import { call } from "redux-saga/effects";
export function* sagaCreateUser(action) {
  try {
    const newUser = yield call(axios.post("/api/user/", action.user));
    console.log(newUser);
  } catch (e) {
    console.log(e);
  }
}
