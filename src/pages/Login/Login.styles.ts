import styled from 'styled-components';

export const Div = styled.div`
  height: calc(100vh - 300px);
   min-height: 45rem;
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
      text-align: center;

      > p {
        text-align: left;
        margin-bottom: .7rem;
      }

      > input {
        width: 100%;
        padding: 1rem 1rem;
        margin-bottom: 1.5rem;
        font-size: 1.6rem;
        border: 3px solid ${({ theme }) => theme.COLORS.text_tertiary} ;
        border-radius: 1rem;
        outline: none;
      }
    }
    > p {
      margin-top: 2rem;
      font-size : 1.4rem;
      text-align: center;
      > a {
        color: #5671FF;
      }
    }
  }
`;
