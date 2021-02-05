import React from "react";
import styled from "styled-components";
import ColorType from "../../ressources/colors/ColorType";

const LabelError = styled.span`
  color: ${ColorType.redLight};
  font-size: 18px;
  margin-top: 10px;
`;

interface Props {
  errorMessage: string;
}

export default function ErrorLabel({ errorMessage }: Props) {
  return <LabelError>{errorMessage}</LabelError>;
}
