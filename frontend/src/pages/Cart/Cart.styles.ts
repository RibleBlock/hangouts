import styled from 'styled-components';

export const Box = styled.div`
  height: max(auto, calc(100vh - 250px));
  min-height: 40rem;
  margin: 5rem auto 0 auto;

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  gap: 6rem;
  > div {
    width: 47rem;
    /* height: 5rem; // altura do bloco // */
    padding: 2.2rem 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 15px #BABABA;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    > div {
      display: flex;
      justify-content: space-between;
      > div p:last-of-type {  // Alterar
        text-align: right;
        color: #0085FF;
        font-size: 1.3rem;
        text-decoration: underline;
      }
      > p {
        &:first-of-type {
          font-weight: bold;
        }
      }
    }
  }
`;
