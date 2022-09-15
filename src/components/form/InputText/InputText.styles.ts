import styled, { css } from 'styled-components';

export const Box = styled.div<{valid: boolean, small?: boolean}>`
    position: relative;
    overflow: visible !important;
    ${((props) => (props.small ? css`margin-top: 0;` : css`margin-top: 3.5rem;`))}
    font-size: 1.6rem;
    label {
      ${((props) => (props.small ? css`width: 6rem;` : css`width: 100%;`))}
      > p {
        ${((props) => (props.small ? css`width: 6rem;` : css`width: 100%;`))}
        cursor: text;
        user-select: none;
        transition: 700ms;
        position: absolute;
        top: .5rem;
        ${(props) => props.valid && css`
          top: -1.2rem;
          font-size: 1.3rem;
        `}
      }
      > input {
        ${((props) => (props.small ? css`width: 5rem;` : css`width: 100%;`))}
        padding: .6rem .2rem;
        line-height: 2rem;
        font-size: 1.7rem;
        font-family: 'Open Sans', sans-serif;
        background-color: transparent;
        border-bottom: 2px solid #00000024;

        &[type="number"]::-webkit-outer-spin-button,
        &[type="number"]::-webkit-inner-spin-button {
            appearance: none;
        }
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
