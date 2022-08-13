import styled from 'styled-components';
import { CircleNotch } from 'phosphor-react';
import { LoadingStyles } from '.';

export const Circle = styled(CircleNotch)<LoadingStyles>`
  width: 2rem;
  height: 2rem;
  color: ${(props) => (props.color !== 'grey' ? props.color : '#cccccc')};
  animation: rodar 2s linear infinite;

  @keyframes rodar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
