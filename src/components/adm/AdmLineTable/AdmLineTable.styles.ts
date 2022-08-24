import styled, { css } from 'styled-components';

const styleColumn = css`
  white-space: nowrap;
  padding: .5rem .8rem;
  text-align: left;
`;
export const TD = styled.td`${styleColumn}`;
export const TH = styled.th`
  ${styleColumn}
  background-color: #fff;
`;

export const TR = styled.tr`
  width: 100%;
  height: 4.5rem;
  font-size: 1.5rem;
  border-top: 2px solid #a5a5a5;
  border-bottom: 2px solid #a5a5a5;
  &:nth-of-type(2n + 1) {
    background-color: #dfdfdf;
  }
  &:first-of-type {
    border: none;
  }

  > ${TD} {
    width: max(auto, 1rem);
  }
`;
