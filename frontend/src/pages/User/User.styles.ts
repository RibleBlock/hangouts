import styled from 'styled-components';

export const Box = styled.div`
  height: calc(100vh - 250px);
  min-height: 58rem;
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
