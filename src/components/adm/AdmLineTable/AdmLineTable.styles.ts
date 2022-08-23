import styled from 'styled-components';

export const TD = styled.td`
  white-space: nowrap;
  padding: .5rem .8rem;
`;

export const TR = styled.tr`
  width: 100%;
  background-color: aqua;

  > ${TD} {
    width: max(auto, 1rem);
  }
`;
