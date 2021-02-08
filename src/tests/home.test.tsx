import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-styled-components";
import Home from "../components/scenes/Home/Home";
import { HomeContainerProps } from "../components/scenes/Home";
import { ErrorType } from "../managers/ErrorManager";
import ErrorLabel from "../components/ui/ErrorLabel";

configure({ adapter: new Adapter() });

const Props: HomeContainerProps = {
  isLoadingCities: false,
  getCitiesSuccess: undefined,
  getCitiesError: undefined,
  cities: [
    {
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
    },
    {
      city: "Los Angeles",
      growth_from_2000_to_2013: "4.8%",
      latitude: 34.0522342,
      longitude: -118.2436849,
      population: "3884307",
      rank: "2",
      state: "California",
    },
  ],

  isLoadingCitiesSearch: false,
  getCitiesSearchSuccess: undefined,
  getCitiesSearchError: undefined,
  citiesSearch: [
    {
      city: "New York",
      growth_from_2000_to_2013: "4.8%",
      latitude: 40.7127837,
      longitude: -74.0059413,
      population: "8405837",
      rank: "1",
      state: "New York",
    },
  ],

  canPaginate: true,

  GetCities: () => {},
  GetCitiesSearch: () => {},
};

describe("Home Scene Paginate", () => {
  const home: any = shallow(<Home {...Props} />);
  Props.getCitiesSuccess = true;
  home.instance().componentDidUpdate(Props);
  it("resultDisplayCityCard Components length is 3 with paginate", () => {
    const resultDisplayCityCard = home.instance().displayCityCard();
    expect(resultDisplayCityCard.length).toEqual(3);
  });
});

Props.canPaginate = false;

describe("Home Scene No Paginate", () => {
  const home: any = shallow(<Home {...Props} />);
  Props.getCitiesSuccess = undefined;
  home.instance().componentDidUpdate(Props);

  it("resultDisplayCityCard Components length is 2 without paginate", () => {
    const resultDisplayCityCard = home.instance().displayCityCard();
    expect(home.instance().props.canPaginate).toEqual(false);
    expect(resultDisplayCityCard.length).toEqual(2);
  });
});

Props.getCitiesError = ErrorType.getCities;

describe("Home Scene Error", () => {
  const home: any = shallow(<Home {...Props} />);
  Props.getCitiesSuccess = true;
  home.instance().componentDidUpdate(Props);

  it("displayList with an error", () => {
    const displayList = home.instance().displayList();
    expect(displayList).toEqual(
      <ErrorLabel errorMessage="Nous n'arrivons pas à afficher le resultat de votre recherche. Veuillez ressayer ulterieurement." />
    );
  });
});
