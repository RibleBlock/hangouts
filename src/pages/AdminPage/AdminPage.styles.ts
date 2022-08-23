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
  margin: 1rem;

  &:hover > svg {
    color: #00000088;
  }
`;

export const Logo = styled.img`
    height: 8.5rem;
`;

export const Menu = styled.header`
  background-color: #2A2C2E;
  width: 100vw;
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Main = styled.main<{isOpen?: boolean}>`
  background-color: #1f1f1f;
  width: 100vw;
  height: calc(100vh - 10rem);
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: ${(props) => (props.isOpen ? '21.7rem' : '0')} 1fr;
  overflow: scroll;
`;

export const NavButton = styled.button<{isSelected: boolean}>`
width: 15rem;
color: #fff;
font-weight: bold;
border-radius: 1rem;
background-color: ${(props) => (props.isSelected ? '#525252' : 'transparent')};
`;

export const NavTables = styled.nav`
  background-color: #2A2C2E;
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  letter-spacing: .1rem;
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
  background-color: coral;
`;
