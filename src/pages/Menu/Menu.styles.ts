import styled from 'styled-components';

import lupa from '../../assets/images/lupa.svg';

export const InputFilter = styled.input`
  background-color: #E8E8E8;
  color: #000;
  font-weight: bold;
  max-width: 45rem;
  width: 100%;
  height: 3.5rem;
  padding: 0 1.7rem;
  border-radius: 2rem;
  letter-spacing: .1rem;
  &:placeholder-shown {
    color: #888888;
    letter-spacing: .2rem;
  }
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
  > ${InputFilter} {
    margin-top: 6rem;
    margin-bottom: 3rem;
    background-image: url(${lupa});
    background-repeat: no-repeat;
    background-position: right 1.3rem center;
  }
`;

export const Div = styled.div`
  max-width: 80rem;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 8rem;
  font-size: 2rem;

  .noPizza {
    text-align: center;
    margin: calc(100vh / 5) 0;
  }
`;

export const LoadBox = styled.div`
  width: 100%;
  margin: calc(100vh / 4.5) 0;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    width: 5rem;
    height: 5rem;
  }
`;
