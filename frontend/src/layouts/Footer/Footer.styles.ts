import styled from 'styled-components';

export const FooterBox = styled.footer`
  position: relative;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > p {
    font-size: 1.2rem;
  }
  svg {
    width: 4rem;
    height: 4rem;
    margin: 0 1.3rem;
    color: #000;
  }
`;
