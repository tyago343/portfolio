import axios from "axios";
import { call, put } from "redux-saga/effects";
import { userToReducer } from "../actions/user";

export function* sagaCreateUser(action) {
  try {
    const response = yield call(() => axios.post("/api/user/", action.payload));
    if (response) {
      yield put(userToReducer({ ...response.data }));
    } else {
      return () => console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
}
export function* sagaLoginUser(action) {
  try {
    const response = yield call(() =>
      axios.post("/api/user/login", action.payload)
    );
    if (response) {
      yield put(userToReducer({ ...response.data }));
    } else {
      return () => console.log("El usuario y/o la contraseña son incorrectos");
    }
  } catch (e) {
    console.log(e);
  }
}
