import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import GrowthType from "../../../models/GrowthType";
import CitiesResponse from "../../../models/CitiesResponse";
import DeviceSize from "../../../ressources/DeviceSize";
import SortType from "../../../models/SortType";
import { ErrorManager } from "../../../managers/ErrorManager";
import { HomeContainerProps } from ".";

import CityCard from "../../ui/CityCard";
import SearchBar from "../../ui/SearchBar";
import Map from "../../ui/Map";
import ShowMore from "../../ui/ShowMore";
import ErrorLabel from "../../ui/ErrorLabel";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  box-sizing: border-box;
  height: 100vh;
  flex-direction: column;

  @media ${DeviceSize.tablet} {
    flex-direction: row;
  }
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  margin-bottom: 15px;

  @media ${DeviceSize.tablet} {
    width: 22%;
    height: 100%;
    margin-bottom: 0;
  }
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60%;

  @media ${DeviceSize.tablet} {
    width: 78%;
    height: 100%;
  }
`;

const ContainerTitle = styled.div`
  height: 100%;
  margin-top: 20px;
`;

const TitleListEmpty = styled.div`
  font-size: 18px;
  weight: 400;
`;

const listAnimation = keyframes`
    0% {
        opacity: 0;
        margin-top:-30px;
    }
    50% {
      opacity: 0.5;
      margin-top:-10px;
    }
    100% {
        opacity: 1;
        margin-top:0px;
    }
`;

const ContainerCard = styled.div`
  animation: ${listAnimation} 1s linear;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px 0;
  padding-right: 15px;
  overflow: hidden;
  overflow-y: scroll;
`;

interface Props extends HomeContainerProps {}
interface State {
  cities: CitiesResponse[];
  searchValue: string;
  citySelected?: CitiesResponse;
  sortValue: SortType;
}

export default class Home extends Component<Props, State> {
  state: State = {
    cities: [],
    searchValue: "",
    sortValue: SortType.increase,
  };

  componentDidMount(): void {
    this.props.GetCities();
  }

  componentDidUpdate(prevProps: Props): void {
    if (prevProps.getCitiesSuccess !== this.props.getCitiesSuccess) {
      this.sortCities(this.props.cities);
    }
    if (
      prevProps.getCitiesSearchSuccess !== this.props.getCitiesSearchSuccess
    ) {
      this.sortCities(this.props.citiesSearch);
    }
  }

  growthIndicatorIcon = (growthNumber: number): GrowthType => {
    switch (true) {
      case growthNumber < -2:
        return GrowthType.fall;
      case growthNumber > 2:
        return GrowthType.increase;
      case growthNumber > -2 && growthNumber < 2:
        return GrowthType.equal;
      default:
        return GrowthType.equal;
    }
  };

  displayCityCard = (): JSX.Element[] => {
    let citiesCardArray: JSX.Element[] = [];
    this.state.cities.forEach((city: CitiesResponse) => {
      citiesCardArray.push(
        <ContainerCard key={city.rank}>
          <CityCard
            cityName={city.city}
            stateName={city.state}
            populationNumber={city.population}
            growthIndicator={this.growthIndicatorIcon(
              parseInt(city.growth_from_2000_to_2013)
            )}
            onClick={() => this.setState({ citySelected: city })}
          />
        </ContainerCard>
      );
    });
    if (this.props.canPaginate && !this.props.isLoadingCities) {
      citiesCardArray.push(
        <ShowMore
          key={"showMore"}
          onClickShowMore={() => this.getMoreCities()}
        />
      );
    }
    return citiesCardArray;
  };

  getMoreCities = (): void => {
    if (this.state.searchValue) {
      this.props.GetCitiesSearch(
        this.state.searchValue,
        this.state.cities.length
      );
    } else {
      this.props.GetCities(this.state.cities.length);
    }
  };

  getSearchCities = (value: string): void => {
    this.setState({ searchValue: value }, () =>
      this.props.GetCitiesSearch(this.state.searchValue)
    );
  };

  sortCities = (cities: CitiesResponse[]): void => {
    switch (this.state.sortValue) {
      case SortType.increase:
        cities.sort((a, b) => parseInt(b.population) - parseInt(a.population));
        break;
      case SortType.decrease:
        cities.sort((a, b) => parseInt(a.population) - parseInt(b.population));
        break;
      default:
        break;
    }
    this.setState({ cities: cities });
  };

  titleListeCitiesIsEmpty = (): JSX.Element => {
    return (
      <ContainerTitle>
        <TitleListEmpty>
          Aucune ville ne correpond à votre recherche
        </TitleListEmpty>
      </ContainerTitle>
    );
  };

  displayListe = (): JSX.Element | JSX.Element[] => {
    if (this.props.getCitiesError && !this.props.isLoadingCities) {
      return (
        <ErrorLabel errorMessage={ErrorManager(this.props.getCitiesError!)} />
      );
    } else if (
      this.props.getCitiesSearchError &&
      !this.props.isLoadingCitiesSearch
    ) {
      return (
        <ErrorLabel
          errorMessage={ErrorManager(this.props.getCitiesSearchError)}
        />
      );
    } else if (!this.state.cities.length && !this.props.isLoadingCities) {
      return <ContainerTitle>{this.titleListeCitiesIsEmpty()} </ContainerTitle>;
    } else {
      return this.displayCityCard();
    }
  };

  render() {
    return (
      <Container>
        <ContainerList>
          <SearchBar
            onChangeValue={(value: string) => this.getSearchCities(value)}
            onSort={() =>
              this.setState(
                {
                  sortValue:
                    this.state.sortValue === SortType.increase
                      ? SortType.decrease
                      : SortType.increase,
                },
                () => this.sortCities(this.state.cities)
              )
            }
            sortValue={this.state.sortValue}
            value={this.state.searchValue}
          />
          <List>{this.displayListe()}</List>
        </ContainerList>
        <MapContainer>
          <Map
            position={
              this.state.citySelected && [
                this.state.citySelected.latitude,
                this.state.citySelected.longitude,
              ]
            }
            cityName={this.state.citySelected?.city}
          />
        </MapContainer>
      </Container>
    );
  }
}
