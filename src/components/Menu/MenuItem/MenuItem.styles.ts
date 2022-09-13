import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxItem = styled(Link)`
  width: 33.5rem;
  border-radius: 1rem;
  transition: 500ms;
  color: #000;
  text-decoration: none;
  border: .2rem solid ${({ theme }) => theme.COLORS.text_tertiary};

  > img {
    width: 100%;
    height: 20rem;
    border-top-left-radius: .8rem;
    border-top-right-radius: .8rem;
    border-bottom: .2rem solid ${({ theme }) => theme.COLORS.text_tertiary};
  }

  > h3 {
    font-weight: normal;
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: .5rem;
    letter-spacing: .1rem;
  }
  > p {
    letter-spacing: .1rem;
    padding: 0 1rem;
    font-size: 1.6rem;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
    > span { white-space: pre;}
  }

  &:hover {
    transform: scale(1.02);
  }
`;
