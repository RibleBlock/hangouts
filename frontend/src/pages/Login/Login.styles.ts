import styled from 'styled-components';

export const Div = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    margin-bottom: 8rem;

    > form {
      width: 100%;
      max-width: 45rem;
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
      > input {
        width: 100%;
        padding: 1rem 1rem;
        margin-bottom: 2rem;
        font-size: 1.6rem;
        border-radius: 1rem;
      }
    }
    > p {
      margin-top: 2rem;
      font-size : 1.4rem;
      text-align: center;
    }
  }
`;
