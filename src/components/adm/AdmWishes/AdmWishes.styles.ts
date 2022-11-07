import styled, { css } from 'styled-components';
import { Button } from '../../CartItem/CartItem.styles';
import { H1 as Title } from '../../../pages/AdminPage/AdminPage.styles';
import { BoxLoadind } from '../AdmTableUsers/AdmTableUsers.styles';
import { Section } from '../../../pages/User/steps/MyData/MyData.styles';
import { Status } from '../../changeOption/ChangeOption.styles';

export const StatusWish = styled(Status)``;
export const ButtonWish = styled(Button)<{isSelected: boolean}>`
  width: 90%;
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
  ${({ isSelected }) => isSelected && css`
    transform: scale(1.05);
  `}
  &:hover {
    transform: scale(1.03);
  }
`;

export const H1 = styled(Title)`
`;

export const Box = styled.div`
  width: 100%;
  border-radius: .5rem;
  `;

export const BoxItem = styled(Section)`
  background-color: #fff;
  max-width: 100%;
  flex-direction: row;
  padding: 0;
  margin-top: 1.5rem;
  box-shadow: none;
  border: .1rem solid #b3b3b3; // 1px ou 2px
`;

export const MainBox = styled.main`
  overflow: hidden;
  max-width: 100%;
  height: 100%;
  display: grid;
  grid-template: 1fr / 1fr 60%;
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
    overflow-y: scroll;
    > p {
      margin-top: 1rem;
      font-size: 1.6rem;
    }
    > div {
      margin-top: 1.5rem;
      > h3 {
        font-size: 2rem;
        text-align: left;
      }
      > ${StatusWish} {
        font-weight: bold;
      }
    }
    > textarea {
      margin-top: 2rem;
      height: calc(100% - 20rem);
    }
    > .botoes {
      width: 40rem;
      float: right;
      margin-top: 2rem;
      > button {
        margin: 0;
      }
    }
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
    > ${BoxItem} {
      > ${H1} {
        font-size: 1.6rem;
      }
      > .flex {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 2rem;
      }
      > *:not(hr) {
        padding: 1.5rem 0;
        margin-left: 2rem;
        margin-right: 2rem;
        letter-spacing: .1rem;
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

export const TextArea = styled.textarea`
  background-color: #fff;
  resize: none;
  width: 100%;
  padding: 1rem;
  font-size: 1.8rem;
  border-radius: .5rem;
`;

export const Boxx = styled(BoxLoadind)`
  flex-direction: column;
  justify-content: center !important;
  color: #4e4e4e;
  > ${H1} {
    color: #4e4e4e !important;
  }
`;
