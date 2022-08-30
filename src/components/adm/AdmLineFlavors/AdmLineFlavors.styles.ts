import { CaretRight, Plus } from 'phosphor-react';
import styled, { css } from 'styled-components';

export const TD = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TR = styled.tr`
  white-space: nowrap;
  padding: .5rem .8rem;
  text-align: left;
  cursor: pointer;
  &:nth-of-type(2n + 1) ${TD} {
    background-color: #dcdcdc;
  }
  &:last-of-type > ${TD} {
    border-bottom: 2px solid #a5a5a5;
  }

  &:hover > ${TD} {
    font-weight: bold;
    user-select: none;
  }
  > ${TD} {
    letter-spacing: .1rem;
    border-top: 2px solid #a5a5a5;
    font-size: 1.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const svgCSS = css`
width: 2.3rem;
height: 2.3rem;
`;
export const ArrowRight = styled(CaretRight)`
${svgCSS}
color: #5e5e5e;
`;
export const PlusIcon = styled(Plus)`
${svgCSS}
color: #0C5400;
`;
