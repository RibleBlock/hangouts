import styled, { css } from 'styled-components';
import { Position } from '.';

export const Header = styled.header<Position>`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.primary};

  ${(props) => props.fixed && css`
    position: fixed;
    top: 0;
  `}

  > nav {
    height: 100%;
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
  }
`;
