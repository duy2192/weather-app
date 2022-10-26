import { call, put, takeLatest } from "redux-saga/effects";
import { weatherApi } from "services/api";
import { weatherActions } from "./weatherSlice";

function* handleFetchWeather(action) {
  try {
    const response = yield call(weatherApi.fetchWeather, action.payload);
    yield put(weatherActions.fetchWeatherSuccess(response));
  } catch (error) {
    console.log(error);
  }
}
export default function* weatherSaga() {
  yield takeLatest(weatherActions.fetchWeather, handleFetchWeather);
}
