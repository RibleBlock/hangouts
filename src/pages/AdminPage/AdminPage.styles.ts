import { CaretLeft, CaretRight } from 'phosphor-react';
import styled, { css } from 'styled-components';

const svg = css`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
`;

export const CaretL = styled(CaretLeft)`${svg}`;
export const CaretR = styled(CaretRight)`${svg}`;

export const ButtonList = styled.button`
  padding: .2rem;
  background-color: transparent;
  border-radius: .5rem;
  position: absolute;
  cursor: pointer;

  &:hover > svg {
    color: #00000088;
  }
`;

export const Logo = styled.img`
    height: 8.5rem;
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const Menu = styled.header<{menuIsOpen: boolean}>`
  grid-area: menu;
  background-color: #2A2C2E;
  width: 100%;
  height: 10rem;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  > ${H1} {
    color: #fff;
    width: 100%;
    letter-spacing: .1rem;
  }
`;

export const Main = styled.main<{isOpen?: boolean}>`
  background-color: #1f1f1f;
  width: 100vw;
  height: 100vh;
  font-size: 2.5rem;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 10rem 1fr;
  grid-template-columns: ${(props) => (props.isOpen ? '21.7rem' : '0')} 1fr;
  grid-template-areas:
    "aside menu"
    "aside view";
`;

export const NavButton = styled.button<{isSelected: boolean}>`
  width: 15rem;
  color: #fff;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? '#3E3E3E' : 'transparent')};
  letter-spacing: .1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .6rem;
  > .icon {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    background-color: #525252;
  }
`;

export const NavTables = styled.nav`
  grid-area: aside;
  background-color: #2D3033;
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  > ${NavButton} {
    padding: 1rem 0;
    font-size: 1.7rem;
  }
`;

export const InfoBox = styled.div`
  grid-area: view;
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;
`;
