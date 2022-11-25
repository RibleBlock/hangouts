import styled, { css } from 'styled-components';
import { FooterProps } from '.';

export const FooterBox = styled.footer<FooterProps>`
  ${(props) => (props.relative ? css`
    position: relative;
    bottom: 4rem;
  ` : css`
    margin: 2rem 0;
  `)}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > div p {
    text-align: center;
    font-size: 1.2rem;
    &:last-of-type {
      margin-top: .5rem;
      font-size: 1.1rem;
    }
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0 1.3rem;
    color: #000;
  }
`;
