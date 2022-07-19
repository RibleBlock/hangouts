import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
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
max-width: 75rem;
width: 100%;
margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 7rem;
  font-size: 2.2rem;

  > h2 {
    background-color: red;
    width: 100%;
    text-align: center;
  }
`;
