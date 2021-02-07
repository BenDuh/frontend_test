import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Icon, { IconImage } from "../components/ui/Icon";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Population from "../ressources/assets/population.png";

configure({ adapter: new Adapter() });

const Props = {
  img: Population,
  width: 30,
  active: true,
};

describe("Icon Component", () => {
  const icon = shallow(<Icon {...Props} />);
  it("Width Icon Props", () => {
    const iconImage = icon.find(IconImage);
    expect(iconImage).toHaveStyleRule("width", "30px");
  });
});
