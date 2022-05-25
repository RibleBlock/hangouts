import styled from 'styled-components';

export const ButtonBox = styled.button`
  cursor: pointer;
  background-color: transparent;
  > h2 {
    font-size: 2.5rem;
    letter-spacing: .1rem;
  }

  > img {
    transition: 700ms;
    margin: 2.2rem 0;
    width: 25rem;
    border-radius: 1.5rem;
  }

  > p {
    font-size: 2rem;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;
