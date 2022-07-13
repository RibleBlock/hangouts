import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 0 3rem;
  margin-top: 4rem;
  position: relative;

  > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  > h3 {
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  > .load_box {
    background-color: ${({ theme }) => theme.COLORS.secondary};
    /* background-color: red; */
    position: absolute;
    top: -27rem;
    left: 0rem;
    width: 100%;
    height: 30rem;
    border-radius: 50rem;
    display: grid;
    place-content: center;
    > svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const ButtonSize = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
  width: 100%;
  height: 5.5rem;
  font-size: 1.8rem;
  background-color: transparent;
  cursor: pointer;

  > div {
    overflow: hidden;
    margin: auto 0;
    text-align: left;
    white-space: nowrap;

    > p {
      font-size: 1.8rem;
    }
    > span {
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
`;
