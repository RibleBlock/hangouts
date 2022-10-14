import styled from 'styled-components';

export const MainBox = styled.main`
  background-color: red;
  height: calc(100vh - 25rem);
  /* min-height: ; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.7rem;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
  }
`;
