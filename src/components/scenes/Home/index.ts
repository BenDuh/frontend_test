import { connect } from "react-redux";
import { Dispatch } from "react";
import { AnyAction } from "redux";

import actions from "../../../actions";
import { RootReducerState } from "../../../reducers";
import { ErrorType } from "../../../managers/ErrorManager";
import CitiesResponse from "../../../models/CitiesResponse";

import Home from "./Home";
import SortType from "../../../models/SortType";

export interface HomeContainerProps {
  // CitiesList
  isLoadingCities: boolean;
  getCitiesSuccess?: boolean;
  getCitiesError?: ErrorType;
  cities: CitiesResponse[];
  canPaginate: boolean;

  // CitiesListSearch
  isLoadingCitiesSearch: boolean;
  getCitiesSearchSuccess?: boolean;
  getCitiesSearchError?: ErrorType;
  citiesSearch: CitiesResponse[];

  GetCities: (sortType: SortType, indexPaginate?: number) => void;
  GetCitiesSearch: (
    searchValue: string,
    sortType: SortType,
    indexPaginate?: number
  ) => void;
}

const mapStateToProps = (state: RootReducerState) => {
  return {
    isLoadingCities: state.Cities.isLoadingCities,
    getCitiesSuccess: state.Cities.getCitiesSuccess,
    getCitiesError: state.Cities.getCitiesError,
    cities: state.Cities.cities,

    isLoadingCitiesSearch: state.Cities.isLoadingCitiesSearch,
    getCitiesSearchSuccess: state.Cities.getCitiesSearchSuccess,
    getCitiesSearchError: state.Cities.getCitiesSearchError,
    citiesSearch: state.Cities.citiesSearch,

    canPaginate: state.Cities.canPaginate,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    GetCities: (sortType: SortType, indexPaginate?: number) =>
      dispatch(
        actions.GetCitiesActions.GetCitiesRequest(sortType, indexPaginate)
      ),
    GetCitiesSearch: (
      searchValue: string,
      sortType: SortType,
      indexPaginate?: number
    ) =>
      dispatch(
        actions.GetCitiesSearchActions.GetCitiesSearchRequest(
          searchValue,
          sortType,
          indexPaginate
        )
      ),
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
