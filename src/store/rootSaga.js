import weatherSaga from "modules/weather/redux/weatherSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([weatherSaga()]);
}
