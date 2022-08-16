import { CaretLeft, List } from 'phosphor-react';
import styled, { css } from 'styled-components';

const svg = css`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
`;

export const Caret = styled(CaretLeft)`${svg}`;
export const ListIcon = styled(List)`${svg}`;

export const ButtonList = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin: 1rem;
  `;

export const Logo = styled.img`
    height: 8.5rem;
`;

export const Menu = styled.header`
  background-color: #2A2C2E;
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
`;

export const Main = styled.main<{isOpen: boolean}>`
  background-color: #1f1f1f;
  height: 100vh;
  display: grid;
  grid-template-columns: ${(props) => (props.isOpen ? '25rem' : '0')} 1fr;
  transition: 400ms;
`;

export const NavTables = styled.nav`
  background-color: #36393D;
  width: 100%;
  height: 100%;

  & > h1 {
    color: #fff;
    width: 100%;
    padding: 1rem 0;
    font-size: 1.5rem;
    text-align: center;

  }
`;

export const InfoBox = styled.div`
  width: 100%;
  background-color: coral;
`;
