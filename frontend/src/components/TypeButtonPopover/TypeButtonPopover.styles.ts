import styled from 'styled-components';

export const ButtonBox = styled.button`
  width: 25rem;
  background-color: transparent;
  cursor: pointer;
  > h2 {
    font-size: 2.5rem;
    letter-spacing: .1rem;
  }

  > img {
    width: 100%;
    transition: 700ms;
    margin-top: 2.2rem;
    border-radius: 1.3rem;
  }

  > p {
    font-size: 2rem;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;
