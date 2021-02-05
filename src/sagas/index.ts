import { takeLatest } from "redux-saga/effects";

import ActionTypes from "../actions/Types";
import { GetCities } from "./GetCitiesSaga";
import { GetCitiesSearch } from "./GetCitiesSearchSaga";

function* allSagas() {
  yield takeLatest(ActionTypes.GetCitiesAction.GetCitiesRequest, GetCities);
  yield takeLatest(ActionTypes.GetCitiesSearchAction.GetCitiesSearchRequest, GetCitiesSearch);
}

export default allSagas;
