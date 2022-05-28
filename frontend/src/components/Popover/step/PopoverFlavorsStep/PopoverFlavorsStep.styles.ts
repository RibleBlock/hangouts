import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 0 3rem;
  margin-top: 4rem;

  > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  > h3 {
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  > div input[type='checkbox'] {
    display: none;

    &:checked + label {
      background-color: #2fef2f42;
    }
  }
`;

export const Div = styled.div`
  width: 100%;

  hr {
    width: 100%;
    height: .1rem;
    background-color: #00000040;
  }

  > label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: max(auto, 5.5rem);
    font-size: 1.8rem;
    background-color: transparent;
    cursor: pointer;

    > span {
      white-space: nowrap;
      text-align: right;
    }
    > div {
      overflow: hidden;
      margin: auto 0;

      > p {
        text-align: left;
        font-size: 1.8rem;
        white-space: nowrap;
      }
      > span {
        white-space: wrap;
        text-align: right;
        font-size: 1.4rem;
      }
    }

    &:hover {
      background-color: ${({ theme }) => theme.COLORS.secondary_hover};
    }
    &:active {
      background-color: #2fef2f22;
    }

    > span {
      color: #038E00;
    }
  }
`;
