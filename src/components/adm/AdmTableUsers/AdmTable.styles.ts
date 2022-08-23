import styled from 'styled-components';

export const Th = styled.th`
`;

export const Table = styled.table`
  width: calc(100% - 8rem);
  margin: 2rem auto;
  border-collapse: collapse;
  border: 2px solid #000;

  & * {
    border: 2px solid #000;
  }
`;

export const THead = styled.thead`

  > ${Th} {
    padding: .5rem 1rem;
  }
`;

export const TBody = styled.tbody`
`;
