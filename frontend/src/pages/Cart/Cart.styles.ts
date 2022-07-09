import styled from 'styled-components';

export const Box = styled.div`
  height: max(auto, calc(100vh - 250px));
  min-height: 40rem;
  margin: 5rem auto 0 auto;

  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;

    > div.flex_itens {
    width: 47rem;
    /* height: 35rem; // altura do bloco // */
    height: 35rem;
    padding: 2.2rem 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 15px #BABABA;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;

    > div {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
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

  > div.order_list {
    justify-content: start;
    height: 100%;
    max-height: 35rem;
    padding: 1rem;
    box-sizing: content-box;
    border-radius: 0;
    box-shadow: none;
    overflow: hidden scroll;
  }
`;
