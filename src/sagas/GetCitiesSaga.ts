import { call, put } from "redux-saga/effects";
import Actions from "../actions";
import { GetCitiesActionRequestType } from "../actions/GetCitiesAction";
import { ErrorType } from "../managers/ErrorManager";
import {xhrEndpoint} from "../managers/XhrManager";

export function* GetCities(action: GetCitiesActionRequestType) {
  try {
    yield put(Actions.GetCitiesActions.GetCitiesInProgress());

    const response = yield call(
      xhrEndpoint.getAllCitiesRequest,
      "cities.json",
      action.indexPaginate
    );
    if (response.status === 200) {
      yield put(Actions.GetCitiesActions.GetCitiesSuccess(response));
    }
  } catch (error) {
    yield put(Actions.GetCitiesActions.GetCitiesFailure(ErrorType.getCities));
  }
}
