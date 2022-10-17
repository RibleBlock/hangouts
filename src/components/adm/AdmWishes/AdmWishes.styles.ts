import styled from 'styled-components';
import { Button } from '../../CartItem/CartItem.styles';
import { H1 as Title } from '../../../pages/AdminPage/AdminPage.styles';

export const ButtonWish = styled(Button)`
  width: 95%;
  max-width: 50rem;
  padding: 2.6rem 1.5rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.7rem;
  transition: 200ms;
  z-index: -1;
  &:hover {
    transform: scale(1.02);
  }
`;

export const H1 = styled(Title)`
`;

export const Box = styled.div`
  width: 100%;
  border-radius: .5rem;
`;

export const MainBox = styled.main`
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr 62%;
  grid-template-areas:
    'wishesList selectedWish';

  #wishesList {
    grid-area: wishesList;
    background-color: #fff;
    width: 100%;
    padding: 2.5rem 4rem;

    > ul {
      overflow: hidden scroll;
      padding: 0;
      max-height: 75vh;
    }
  }
  #selectedWish {
    grid-area: selectedWish;
    background-color: #d9d9d9;
    width: 100%;
    padding: 4.5rem 4rem;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: .3rem;
      font-size: 1.6rem;
      > ${H1} {
        color: #000;
        text-align: left;
        font-size: 2rem;
      }
    }
    > ${Box} {
      background-color: #fff;
      padding: 1.5rem;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      border: .1rem solid #b3b3b3; // 1px ou 2px
      > ${Box} {
        width: auto;
        background-color: #d9d9d9;
        padding: .1rem .8rem;
        border-radius: 1rem;
        font-size: 1.4rem;
        font-weight: 700;
        white-space: nowrap;
      }
    }
  }
`;
