import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.primary};
  z-index: 1;

  position: sticky;
  top: 0;

  ul {
    list-style: none;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & a {
      text-decoration: none;
      font-size: 1.7rem;
      color: ${({ theme }) => theme.COLORS.text_secondary};
      background-color: transparent;
      transition: 600ms;
      cursor: pointer;

      > div {
        width: 13.6rem;
        height: 7rem;

        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: ${({ theme }) => theme.COLORS.primary_hover};
        }
      }
    }
  }
`;
