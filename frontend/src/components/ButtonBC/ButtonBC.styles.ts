import styled, { css } from 'styled-components';
import { IconChange } from '.';

export const Button = styled.button<IconChange>`
  position: absolute;
  top: 1rem;
  ${(props) => (props.right ? css`
    right: 1.1rem;
  ` : css`
    left: 1.1rem;
  `)}
  cursor: pointer;
  background-color: transparent;
  > svg {
    width: 2rem;
    height: 2rem;
    ${(props) => !props.arrow && css`color: #FF7E7E;`}
  }
`;
