import { call, put } from "redux-saga/effects";
import Actions from "../actions";
import { GetCitiesSearchActionRequestType } from "../actions/GetCitiesSearchAction";
import { ErrorType } from "../managers/ErrorManager";
import { xhrEndpoint } from "../managers/XhrManager";

export function* GetCitiesSearch(action: GetCitiesSearchActionRequestType) {
  try {
    yield put(Actions.GetCitiesSearchActions.GetCitiesSearchInProgress());

    const response = yield call(
      xhrEndpoint.getAllCitiesSearchRequest,
      "cities.json",
      action.searchValue,
      action.sortType,
      action.indexPaginate
    );
    if (response.status === 200) {
      if (action.indexPaginate) {
        response.isPaginate = true
      }
      yield put(
        Actions.GetCitiesSearchActions.GetCitiesSearchSuccess(response)
      );
    }
  } catch (error) {
    yield put(
      Actions.GetCitiesSearchActions.GetCitiesSearchFailure(ErrorType.getCities)
    );
  }
}
