import styled from 'styled-components';

export const BoxItem = styled.div`
  width: 33.5rem;
  border-radius: 1rem;
  transition: 500ms;
  border: .3rem solid ${({ theme }) => theme.COLORS.text_tertiary};

  > img {
    width: 100%;
    height: 21rem;
    border-bottom: .3rem solid ${({ theme }) => theme.COLORS.text_tertiary};
  }

  > h3 {
    font-weight: normal;
    font-size: 2.4rem;
    text-align: center;
    margin-bottom: .5rem;
  }
  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    margin-bottom: .5rem;
    > span { white-space: pre;}
  }

  &:hover {
    transform: scale(1.02);
  }
`;
