import styled from 'styled-components';

export const BoxItem = styled.div`
  width: 100%;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  > div {
    text-align: left;
    flex-direction: column;
    > p {font-size: 1.6rem;}
    > span {font-size: 1.4rem;}
  }
  > button {
    padding: .1rem;
    border-radius: .5rem;
    &:not(:hover) {
      background-color: transparent;
    }
  }
`;
