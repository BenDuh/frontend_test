import React from 'react'
import styled from 'styled-components';

interface Props{
    img: string;
    width: number;
    active?: boolean
}

export const IconImage = styled.img<{width: number, active?: boolean}>`
  width: ${(props) => props.width}px;

  ${({ active }) => active && `
  &:active{
      width: 30px
  }
`}
`;

export default function Icon({img, width, active}: Props) {
    return (
        <IconImage src={img} width={width} active={active}/>
    )
}
