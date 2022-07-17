import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  > input {
    background-color: #E8E8E8;
    color: #000;
    font-weight: bold;
    max-width: 45rem;
    width: 100%;
    height: 3.3rem;
    padding: 0 1.7rem;
    margin-top: 6rem;
    margin-bottom: 4.5rem;
    border-radius: 2rem;
    letter-spacing: .1rem;
    &:placeholder-shown {
      color: #888888;
      letter-spacing: .2rem;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  background-color: #ff00ff;

  > h2 {
    background-color: red;
    width: 100%;
    text-align: center;

  }
`;
