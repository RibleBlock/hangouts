import styled from 'styled-components';
import { CheckCircle } from 'phosphor-react';

export const CheckIcon = styled(CheckCircle)`
  min-width: 9rem;
  min-height: 9rem;
  width: 12rem;
  height: 12rem;
`;

export const MainBox = styled.main`
  height: calc(100vh - 21rem);
  /* max-height: 50rem; */
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  font-size: 2rem;
  > p {
    font-weight: bold;
  }

  > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
  }
`;
