import styled from 'styled-components';
import { Dialog } from '@headlessui/react';
import { CaretRight } from 'phosphor-react';

export const BoxPopOver = styled(Dialog.Panel)`
  width: 46rem;
  padding: 2rem 2.2rem;
  border-radius: 1.5rem;
  position: relative;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.secondary};
  > header {
    margin-bottom: 1.6rem;
    > button {
      top: 2.3rem;
      left: 2.3rem;
    }
    h2 {
      text-align: center;
      font-size: 2rem;
    }
  }

  > p {
    margin-bottom: .9rem;
  }

  form> input {
    width: 100%;
    padding: 1rem 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    border: 3px solid ${({ theme }) => theme.COLORS.text_tertiary} ;
    border-radius: 1rem;
    outline: none;
  }
`;

export const TaillessArrow = styled(CaretRight)`
  width: 2rem;
  height: 2rem;
  color: red !important;
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
        z-index: -1;
    }
    &:not(:disabled):hover {
      font-weight: bold;
    }
  }
`;
