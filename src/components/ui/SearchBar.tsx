import React from "react";
import styled from "styled-components";

import SortType from "../../models/SortType";
import Icon from "./Icon";

import Increase from "../../ressources/assets/increase.png";
import Decrease from "../../ressources/assets/decrease.png";


const ContainerInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerIcon = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 15%;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-right: 15px;
`;

interface Props {
  onChangeValue: (value: string) => void;
  onSort: () => void;
  sortValue: SortType;
  value: string;
}

export default function SearchBar({
  onChangeValue,
  onSort,
  value,
  sortValue,
}: Props) {
  return (
    <ContainerInput>
      <Input
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        placeholder="search"
      />
      <ContainerIcon onClick={() => onSort()}>
        <Icon
          img={sortValue === SortType.increase ? Increase : Decrease}
          width={35}
          active={true}
        />
      </ContainerIcon>
    </ContainerInput>
  );
}
