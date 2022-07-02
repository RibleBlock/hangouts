import styled, { css } from 'styled-components';
import { IconChange } from '.';

export const Button = styled.button<IconChange>`
  position: ${(props) => props.absolute && 'absolute'};
  top: .8rem;
  ${(props) => (props.right ? css`
  right: 1.1rem;
  ` : css`
  left: 1.1rem;
  `)}
  opacity: .8;
  cursor: pointer;
  background-color: transparent;
  > svg {
    width: 2.2rem;
    height: 2.2rem;
    ${(props) => !props.arrow && css`color: #FF2E2E;`}
  }
  &:hover {
    opacity: 1;
  }
`;
