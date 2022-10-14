import styled from 'styled-components';
import { Button } from '../../CartItem/CartItem.styles';

export const ButtonWish = styled(Button)`
  width: 95%;
  padding: 2.6rem 1.5rem;
  margin: 2rem 1rem;
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
    padding: 4rem;

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
    padding: 4rem;
  }
`;
