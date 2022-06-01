import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    margin-top: 3.5rem;
    font-size: 1.6rem;
    label {
      > p {
        width: 100%;
        cursor: text;
        user-select: none;
        transition: 700ms;
        position: absolute;
        top: .5rem;
      }
      > input {
        width: 100%;
        padding: .6rem .2rem;
        line-height: 2rem;
        font-size: 1.7rem;
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        border-bottom: 2px solid #00000024;
        &:focus {
          outline: none;
          border-color: #00000060;
        }
        &:focus ~ p {
          top: -1.2rem;
          font-size: 1.3rem;
        }
      }
    }
`;
