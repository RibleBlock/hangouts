import styled, { css } from 'styled-components';
import { InputFilter } from '../../../pages/Menu/Menu.styles';

export const BoxLoadind = styled.div`
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
  > div:has(button) {
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
      gap: 2rem;
    button {
      max-height: 3.5rem;
      margin: 0;
      display: flex;
      gap: .7rem;
    }
  }
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
