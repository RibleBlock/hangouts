import styled from 'styled-components';

export const Main = styled.main`
  /* width: 100%; */
  max-width: 100rem;
  padding: 7rem 0 10rem;
  display: grid;
  grid-template-columns: 40% 40%;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  grid-column-gap: 7rem;
  grid-row-gap: 5rem;
  margin: 0 auto;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
