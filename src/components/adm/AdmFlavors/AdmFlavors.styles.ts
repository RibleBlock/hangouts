import styled from 'styled-components';
import { InputFilter } from '../../../pages/Menu/Menu.styles';

export const MainBox = styled.main`
  width: 100%;
  height: calc(100vh - 10rem);
  display: flex;
  flex-direction: row;
`;

export const EditBox = styled.div`
  background-color: #fff;
  width: 60rem;
  height: 60rem;
  padding: 2rem 2.5rem;
  border-radius: .7rem;
  font-size: 1.7rem;
`;

export const EditSecti = styled.div`
  grid-area: edit;
  width: 55%;
  /**/
  padding: 3rem 5rem;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Infos = styled.div`
  grid-area: info;
  width: 45%;
  /**/
  padding: 3rem 5.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  max-height: 2rem;
  td {
    padding: 1rem 2.5rem;
  }
`;

export const BoxList = styled.div`
  width: 100%;
  > div {
    max-height: 28rem;
    overflow: scroll;
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
