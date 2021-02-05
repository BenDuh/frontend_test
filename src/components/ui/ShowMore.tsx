import React from "react";
import styled from "styled-components";

const ContainerShowMore = styled.div`
    cursor: pointer
`;

const TitleShowMore = styled.p`
    &:hover{
        text-decoration: underline
    }
`;

interface Props {
  onClickShowMore: () => void;
}

export default function ShowMore({ onClickShowMore }: Props) {
  return (
    <ContainerShowMore onClick={onClickShowMore}>
      <TitleShowMore>Voir plus</TitleShowMore>
    </ContainerShowMore>
  );
}
