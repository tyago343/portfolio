import { takeEvery } from "redux-saga/effects";
import { userType } from "../types";
import { sagaCreateUser, sagaLoginUser } from "./user";

export default function* rootSaga() {
  yield takeEvery(userType.CREATE_USER, sagaCreateUser);
  yield takeEvery(userType.LOGIN_USER, sagaLoginUser);
}
