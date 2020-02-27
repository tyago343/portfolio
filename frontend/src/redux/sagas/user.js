import axios from "axios";
import { call, put } from "redux-saga/effects";
import { userToReducer } from "../actions/user";
export function* sagaCreateUser(action) {
  try {
    const response = yield call(() => axios.post("/api/user/", action.payload));
    if (response) {
      yield put(userToReducer({ ...response.data.data }));
    } else {
      console.log("sarasa");
    }
  } catch (e) {
    console.log(e);
  }
}
