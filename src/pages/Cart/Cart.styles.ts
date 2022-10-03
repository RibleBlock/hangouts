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
    padding: 1rem 2rem 2.8rem;
    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    > .botoes {
      flex-direction: row;
      box-shadow: none;
      padding: 0;
    }
    > div {
      padding: 2.2rem 2rem;
      border-radius: 2rem;
      box-shadow: 0px 0px 15px #BABABA;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }
    @media screen and (max-width: 455px) {
      > .botoes {
        flex-direction: column;
      }
    }
  }

  > div.grid {
    width: 100%;
    max-width: 40rem;
    font-size: 1.6rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'address address'
      'troco troco'
      'frete total'
      'botoes botoes';
    justify-content: space-between;
    gap: 2rem;
    > .botoes {
      grid-area: botoes;
      align-self: start;
      height: auto;
      flex-direction: row;
      box-shadow: none;
      padding: 0;
    }
      #address {
        grid-area: address;
        button { // Alterar
          cursor: pointer;
          color: #0085FF;
          background-color: transparent;
          letter-spacing: .1rem;
          font-weight: bold;
          font-size: 1.3rem;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      #troco {
        grid-area: troco;
        > div {
          display: flex;
          input {
            text-align: right;
          }
        }
      }
      #frete {
        grid-area: frete;
        flex-direction: column;
        padding: 1.5rem 0;
        gap: .5rem
      }
      #total {
        grid-area: total;
        flex-direction: column;
        padding: 1.5rem 0;
        gap: .5rem
     }
    > div {
      height: 8rem;
      padding: 0 2rem;
      border-radius: 2rem;
      box-shadow: 0px 0px 15px #BABABA;
      text-align: right;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;

      > div > a {  // Alterar
        color: blue;
        font-size: 1.3rem;
        text-decoration: underline;
      }
      > div p {
        text-align: right;
        font-size: 1.4rem;
        right: 0;
      }
      > p:first-of-type {
        text-align: left;
        font-weight: bold;
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

  > div.loading {
    height: 36rem;
    display: grid;
    place-content: center;
    z-index: -1;

    > svg {
      width: 4rem;
      height: 4rem
    }
  }
`;
