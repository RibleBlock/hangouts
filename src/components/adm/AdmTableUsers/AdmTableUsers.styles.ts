import styled from 'styled-components';
import { InputFilter } from '../../../pages/Menu/Menu.styles';

export const BoxLoadind = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Th = styled.th`
`;

export const Table = styled.table`
  width: 100%;
  border-radius: 1rem;
  border-collapse: collapse;
  `;

export const MainUser = styled.main`
  width: calc(100% - 8rem);
  margin: 5rem auto;
  > ${InputFilter} {
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
`;

export const THead = styled.thead`
  height: 4rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
`;

export const TBody = styled.tbody`
`;
