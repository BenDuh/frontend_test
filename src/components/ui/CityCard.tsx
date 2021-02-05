import React from "react";
import styled from "styled-components";
import GrowthType from "../../models/GrowthType";

import Population from "../../ressources/assets/population.png";
import State from "../../ressources/assets/state.png";

import Down from "../../ressources/assets/down.png";
import Up from "../../ressources/assets/up.png";
import Stable from "../../ressources/assets/stable.png";
import Icon from "./Icon";

interface Props {
  cityName: string;
  stateName: string;
  populationNumber: string;
  growthIndicator: GrowthType;
  onClick: () => void;
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: -12px 13px 34px -17px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: -12px 13px 34px -17px rgba(0, 0, 0, 0.37);
    box-shadow: -12px 13px 34px -17px rgba(0, 0, 0, 0.37);
  }
`;

const CityName = styled.h2`
  font-size: 25px;
  margin: 7px 0;
  font-weight: 600;
`;

const DescriptionText = styled.span`
  font-size: 21px;
  font-weight: 300;
  padding-right: 15px;
`;

const IconContainer = styled.div`
  padding-right: 15px;
`;

const DescriptionCityContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
`;

export default function CityCard({
  cityName,
  stateName,
  populationNumber,
  growthIndicator,
  onClick,
}: Props) {
  const growthIndicatorIcon = (): JSX.Element => {
    let srcIcon: string;
    switch (growthIndicator) {
      case GrowthType.increase:
        srcIcon = Up;
        break;
      case GrowthType.fall:
        srcIcon = Down;
        break;
      case GrowthType.equal:
        srcIcon = Stable;
        break;
      default:
        srcIcon = Stable;
    }
    return <Icon img={srcIcon} width={20} />;
  };
  return (
    <Card onClick={onClick}>
      <CityName>{cityName}</CityName>
      <DescriptionCityContainer>
        <IconContainer>
          <Icon img={State} width={20} />
        </IconContainer>
        <DescriptionText>{stateName}</DescriptionText>
      </DescriptionCityContainer>
      <DescriptionCityContainer>
        <IconContainer>
          <Icon img={Population} width={20} />
        </IconContainer>
        <DescriptionText>{populationNumber}</DescriptionText>
        {growthIndicatorIcon()}
      </DescriptionCityContainer>
    </Card>
  );
}
