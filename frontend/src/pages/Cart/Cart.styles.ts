import styled from 'styled-components';

export const Box = styled.div`
  height: max(auto, calc(100vh - 250px));
  min-height: 40rem;
  margin: 5rem auto 0 auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;

  > div.flex_itens {
    width: 100%;
    max-width: 47rem;
    padding: 2.2rem 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 15px #BABABA;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
    > .botoes {
      flex-direction: row;
    }
    > div {
      text-align: right;
      display: flex;
      justify-content: space-between;
      gap: 2rem;

      > div p:last-of-type {  // Alterar
        color: #0085FF;
        font-size: 1.3rem;
        text-decoration: underline;
      }
      > p {

        &:first-of-type {
          text-align: left;
          font-weight: bold;
        }
      }
    }
  @media screen and (max-width: 455px) {
    > .botoes {
      flex-direction: column;
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
