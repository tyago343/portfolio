import { takeEvery } from "redux-saga/effects";
import { userType } from "../types";
import { sagaCreateUser } from "./user";

export default function* rootSaga() {
  yield takeEvery(userType.CREATE_USER, sagaCreateUser);
}
