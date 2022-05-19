import styled from 'styled-components';

export const Button = styled.a`
  width: 23rem;
  height: 23rem;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.background_OP};
  border-radius: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    border-radius: 100rem;
  }
`;
