import { CaretRight } from 'phosphor-react';
import styled from 'styled-components';

export const TaillessArrow = styled(CaretRight)`
  width: 2rem;
  height: 2rem;
  color: red;
`;

export const Div = styled.div`
  width: 100%;
  max-width: 40em;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1rem;
  > p {
    font-size: 1.7rem;
  }
`;

export const Section = styled.div`
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.30);
  position: relative;
  width: 100%;
  max-width: 40em;
  padding: 1.2rem 1.9rem;
  border-radius: .5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    > p {
      max-width: 16rem;
      margin-left: .5rem;
    }
  }

  > button {
    width: 100%;
    height: 4rem;
    display: grid;
    grid-template-columns: 1fr 3fr 3rem;
    grid-template-rows: 1fr;
    align-items: center;

    cursor: pointer;
    font-size: 1.6rem;
    background-color: transparent;

    > span {
      width: 3rem;
      white-space: nowrap;
      &:first-of-type {
        justify-self: flex-start;
      }
    }
    &:not(:disabled):hover {
      font-weight: bold;
    }
  }
`;
