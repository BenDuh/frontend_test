import { ErrorType } from "../managers/ErrorManager";

import ActionTypes from "../actions/Types";
import CitiesResponse from "../models/CitiesResponse";

export interface CitiesState {
  // Gestion de la liste des villes
  isLoadingCities: boolean;
  getCitiesSuccess?: boolean;
  getCitiesError?: ErrorType;
  cities: CitiesResponse[];

  // Gestion de la liste des villes
  isLoadingCitiesSearch: boolean;
  getCitiesSearchSuccess?: boolean;
  getCitiesSearchError?: ErrorType;
  citiesSearch: CitiesResponse[];

  canPaginate: boolean;
}

const defaultState: CitiesState = {
  // Gestion de la liste des villes
  isLoadingCities: false,
  getCitiesSuccess: undefined,
  getCitiesError: undefined,
  cities: [],

  // Gestion de la liste des villes
  isLoadingCitiesSearch: false,
  getCitiesSearchSuccess: undefined,
  getCitiesSearchError: undefined,
  citiesSearch: [],

  canPaginate: true,
};

const CitiesReducer = (
  state: CitiesState = defaultState,
  action: any
): CitiesState => {
  let tNewState: CitiesState = state;
  switch (action.type) {
    case ActionTypes.GetCitiesAction.GetCitiesRequest:
      tNewState = {
        ...state,
        isLoadingCities: false,
        getCitiesSuccess: undefined,
        getCitiesError: undefined,
      };
      break;
    case ActionTypes.GetCitiesAction.GetCitiesInProgress:
      tNewState = {
        ...state,
        isLoadingCities: true,
      };
      break;
    case ActionTypes.GetCitiesAction.GetCitiesSuccess:
      tNewState = {
        ...state,
        isLoadingCities: false,
        getCitiesSuccess: true,
        canPaginate: action.response.canPaginate,
        cities: action.response.resetArray
          ? action.response.data
          : [...state.cities, ...action.response.data],
      };
      break;
    case ActionTypes.GetCitiesAction.GetCitiesFailure:
      tNewState = {
        ...state,
        getCitiesSuccess: false,
        isLoadingCities: false,
        getCitiesError: ErrorType.getCities,
      };
      break;

    case ActionTypes.GetCitiesSearchAction.GetCitiesSearchRequest:
      tNewState = {
        ...state,
        isLoadingCitiesSearch: false,
        getCitiesSearchSuccess: undefined,
        getCitiesSearchError: undefined,
      };
      break;
    case ActionTypes.GetCitiesSearchAction.GetCitiesSearchInProgress:
      tNewState = {
        ...state,
        isLoadingCitiesSearch: true,
      };
      break;
    case ActionTypes.GetCitiesSearchAction.GetCitiesSearchSuccess:
      tNewState = {
        ...state,
        isLoadingCitiesSearch: false,
        getCitiesSearchSuccess: true,
        canPaginate: action.response.canPaginate,
        citiesSearch: action.response.isPaginate
          ? [...state.citiesSearch, ...action.response.data]
          : action.response.data,
      };
      break;
    case ActionTypes.GetCitiesSearchAction.GetCitiesSearchFailure:
      tNewState = {
        ...state,
        getCitiesSearchSuccess: false,
        isLoadingCitiesSearch: false,
        getCitiesSearchError: ErrorType.getCities,
      };
      break;

    // Default
    default:
      return tNewState;
  }
  return tNewState;
};

export default CitiesReducer;
