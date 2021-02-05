import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-styled-components";
import Home from "../components/scenes/Home/Home";

configure({ adapter: new Adapter() });

const Props = {
  isLoadingCities: false,
  getCitiesSuccess: undefined,
  getCitiesError: undefined,
  cities: [],

  isLoadingCitiesSearch: false,
  getCitiesSearchSuccess: undefined,
  getCitiesSearchError: undefined,
  citiesSearch: [],

  canPaginate: true,

  GetCities: () => {},
  GetCitiesSearch: () => {},
};

test("CityCard Component", () => {
  const home = shallow(<Home {...Props} />);

  it("Width Icon Props", () => {
    expect(home).toHaveStyle("width: 30px");
  });
});
