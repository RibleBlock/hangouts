import styled from 'styled-components';
import { InputFilter } from '../../../pages/Menu/Menu.styles';

export const MainBox = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const EditSecti = styled.div`
  grid-area: edit;
  width: 55%;
  height: calc(100vh - 10rem);
  padding: 3rem;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Infos = styled.div`
  grid-area: info;
  width: 45%;
  /**/
  padding: 3rem 5.5rem 0;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  td {
    padding: 1rem 2rem;
  }
`;

export const BoxList = styled.div`
  width: 100%;
  > div {
    max-height: 28rem;
    overflow: hidden scroll;
  }
  > ${InputFilter} {
    width: 35rem;
    margin-bottom: 1.3rem;
    border-radius: .8rem;
    font-size: 1.4rem;
  }
`;

export const BoxLoadind = styled.div`
  width: 100%;
  height: 25rem;
  display: grid;
  place-items: center;
`;
