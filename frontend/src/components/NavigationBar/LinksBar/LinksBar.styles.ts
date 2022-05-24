import styled from 'styled-components';
import { LinksBarProps } from '.';

export const List = styled.ul<LinksBarProps>`
  display: ${(props) => (!props.isOpen ? 'none' : 'flex')};

  list-style: none;
  color: ${({ theme }) => theme.COLORS.text_secondary};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.primary};

  & a {
    text-decoration: none;
    font-size: 1.7rem;
    color: ${({ theme }) => theme.COLORS.text_secondary};
    background-color: transparent;
    transition: 600ms;
    cursor: pointer;

    > div {
      width: 13.6rem;;
      height: 7rem;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.primary_hover};
      }
    }
    @media (max-width: 860px){
      > div {
        width: 100vw;
      }
    }
  }
`;
