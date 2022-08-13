import styled from 'styled-components';

export const Box = styled.div`
  height: max(auto, calc(100vh - 250px));
  /* min-height: 45rem; */
  min-height: calc(100vh - 35rem);
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  > svg {
    width: 3rem;
    height: 3rem;
  }
`;
