import { List } from 'phosphor-react';
import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.COLORS.primary};
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;

  > button, > img {
    background-color: transparent;
    cursor: pointer;
    display: none;
  }

  > a > img {
    cursor: pointer;
    display: none;
    height: 5.5rem;
    transition: transform 500ms;
    &:hover {
      transform: scale(1.1);
    }
  }

  ul {
    list-style: none;
    height: 100%;
    background-color: inherit;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 856px) {
  justify-content: space-between;
  & > button, & > a > img {
    margin: 0 .8rem;
    display: block;
  }
  & > ul {
    display: none;
  }
}
`;

export const ListIcon = styled(List)`
  width: 4rem;
  height: 4rem;
  color: ${({ theme }) => theme.COLORS.text_secondary};
`;
