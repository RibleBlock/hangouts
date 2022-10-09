import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ButtonActionStyles } from '.';

export const MyLink = styled(Link)<ButtonActionStyles>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: ${(props) => (props.small ? `${props.small}rem` : '38rem')};
  height: 5rem;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.secondary};
  ${({ color }) => color && css`color: ${color}`};
  background-color: ${({ theme }) => theme.COLORS.button};
  ${({ bcolor }) => bcolor && css`background-color: ${bcolor}`};
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
  max-width: ${(props) => (props.small ? `${props.small}rem` : '38rem')};
  height: 5rem;
  margin: 0 auto;
  ${(props) => !props.noMargin && css`margin-top: 2.5rem;`}
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: ${(props) => (props.round ? '.6rem' : '5rem')};
  color: ${({ theme }) => theme.COLORS.secondary};
  ${({ color }) => color && css`color: ${color}`};
  background-color: ${({ theme }) => theme.COLORS.button};
  ${({ bcolor }) => bcolor && css`background-color: ${bcolor}`};
  &:hover {
    filter: brightness(1.2);
  }
  ${(props) => props.secundary && css`
  font-weight: bold;
  color: #1c25569f;
  border: .3rem solid #1C25569f;
  background-color: transparent;
  &:hover {
    color: ${({ theme }) => theme.COLORS.button};
    border: .3rem solid ${({ theme }) => theme.COLORS.button};
  }
  `}
  &:disabled {
    opacity: .7;
  }
`;
