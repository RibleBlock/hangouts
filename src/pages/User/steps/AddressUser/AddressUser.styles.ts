import styled from 'styled-components';
import { Div, Section } from '../MyData/MyData.styles';

export const addressDiv = styled(Div)``;

export const addressSection = styled(Section)`
  width: 100%;
  max-width: 66rem;
  padding: 0;

  > button {
    padding: 3.3rem 4rem;
    display: flex;
    gap: 1rem;
    h3 {
      font-size: 1.6rem;
    }
  }
`;
