import styled from 'styled-components';

export const Div = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 100%;
    max-width: 45rem;
    margin-bottom: 8rem;

    > form {
      padding: 3.3rem;
      font-size: 1.6rem;
      font-weight: bold;
      border-radius: 1.3rem;
      background-color: #E8E8E8;
      text-align: center;

      > p {
        text-align: left;
        margin-bottom: .7rem;
      }
      > p.errormsg {
        position: relative;
        left: .5rem;
        margin: .3rem 0 .8rem;
        color: #FF7E7E;
        font-size: 1.2rem;
        font-weight: bold;
        &:last-of-type {
        margin: .3rem 0 0;
        }
      }
      > input {
        width: 100%;
        padding: 1rem 1rem;
        font-size: 1.6rem;
        border-radius: 1rem;
        outline: none;
      }
    }
    > p {
      margin-top: 2rem;
      font-size : 1.4rem;
      text-align: center;
    }
  }
`;
