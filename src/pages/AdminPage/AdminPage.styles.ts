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
  background-color: transparent;
  border-radius: .5rem;
  cursor: pointer;
  position: absolute;
  top: .4rem;

  &:hover > svg {
    color: #00000088;
  }
`;

export const Logo = styled.img`
    height: 8.5rem;
`;

export const H1 = styled.h1``;

export const Menu = styled.header<{menuIsOpen: boolean}>`
  background-color: #2A2C2E;
  width: 100vw;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  > ${H1} {
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    width: calc(100% - 21rem);
    letter-spacing: .1rem;
    ${(props) => !props.menuIsOpen && css`
      width: 100vw;
      position: absolute;
      left: 0;
    `}
  }
`;

export const Main = styled.main<{isOpen?: boolean}>`
  background-color: #1f1f1f;
  width: 100vw;
  height: calc(100vh - 10rem);
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: ${(props) => (props.isOpen ? '21.7rem' : '0')} 1fr;
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
  background-color: #2D3033;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
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
  width: 100%;
  background-color: #fff;
  overflow-y: scroll;
  position: relative;
`;
