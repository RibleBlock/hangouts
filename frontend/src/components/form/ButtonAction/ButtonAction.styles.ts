import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonActionStyles } from '.';

export const MyLink = styled(Link)<ButtonActionStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: ${(props) => (props.small ? '18rem' : '38rem')};
  height: 5rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.secondary};
  background-color: ${({ theme }) => theme.COLORS.button};
  &:hover {
    filter: brightness(1.2);
  }
  &:disabled {
    opacity: .7;
  }
`;

export const Button = styled.button<ButtonActionStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: ${(props) => (props.small ? '18rem' : '38rem')};
  height: 5rem;
  margin: 0 auto;
  ${(props) => !props.noMargin && css`margin-top: 2.5rem;`}
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: ${(props) => (props.round ? '.6rem' : '5rem')};
  color: ${({ theme }) => theme.COLORS.secondary};
  background-color: ${({ theme }) => theme.COLORS.button};
  &:hover {
    filter: brightness(1.2);
  }
  &:disabled {
    opacity: .7;
  }
`;
