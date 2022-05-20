import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  background-color: ${({ theme }) => theme.COLORS.primary};

  > nav ul {
    list-style: none;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    & button {
      width: 13.6rem;
      height: 7rem;
      font-size: 1.7rem;
      transition: 600ms;
      cursor: pointer;

      color: ${({ theme }) => theme.COLORS.text_secondary};
      background-color: transparent;
      border-color: transparent;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS.primary_hover};
      }
    }
  }
`;
