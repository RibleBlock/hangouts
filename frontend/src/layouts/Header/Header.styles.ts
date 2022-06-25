import styled from 'styled-components';

import headerBackground from '../../assets/images/header_bg.svg';

export const Box = styled.header`
  width: 100%;
  padding: 2rem 0;
  color: ${({ theme }) => theme.COLORS.text_secondary};
  background-image: url(${headerBackground});
  font-size: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.3rem;
    margin-bottom: 1.5rem;
  }

  svg {
    width: 10rem;
  }

  p {
    text-align: center;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 64rem;
  }
`;
