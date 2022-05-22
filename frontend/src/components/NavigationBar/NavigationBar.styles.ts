import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.primary};

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
