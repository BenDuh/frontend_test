import ActionTypes from "./Types";
import * as CommonRequestTypes from "./CommonRequestTypes";

import CitiesResponse from "../models/CitiesResponse";
import { ErrorType } from "../managers/ErrorManager";
import SortType from "../models/SortType";

export interface GetCitiesSearchActionRequestType {
  type: string
  searchValue: string
  sortType: SortType
  indexPaginate?: number
}

const GetCitiesSearchRequest = (
  searchValue: string,
  sortType: SortType,
  indexPaginate?: number
): GetCitiesSearchActionRequestType => {
  return {
    type: ActionTypes.GetCitiesSearchAction.GetCitiesSearchRequest,
    searchValue: searchValue,
    sortType: sortType,
    indexPaginate: indexPaginate,
  };
};

const GetCitiesSearchInProgress = (): CommonRequestTypes.ActionInProgressType => {
  return {
    type: ActionTypes.GetCitiesSearchAction.GetCitiesSearchInProgress,
  };
};

const GetCitiesSearchSuccess = (
  response: CitiesResponse
): CommonRequestTypes.ActionSuccessResponseType<CitiesResponse> => {
  return {
    type: ActionTypes.GetCitiesSearchAction.GetCitiesSearchSuccess,
    response,
  };
};

const GetCitiesSearchFailure = (
  error: ErrorType
): CommonRequestTypes.ActionFailureType => {
  return {
    type: ActionTypes.GetCitiesSearchAction.GetCitiesSearchFailure,
    error,
  };
};

const GetCitiesSearchActions = {
  GetCitiesSearchRequest,
  GetCitiesSearchInProgress,
  GetCitiesSearchSuccess,
  GetCitiesSearchFailure,
};

export default GetCitiesSearchActions;
