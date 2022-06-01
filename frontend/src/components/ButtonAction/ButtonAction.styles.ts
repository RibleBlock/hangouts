import styled from 'styled-components';

export const Button = styled.button<{small?: boolean}>`
  width: ${(props) => (props.small ? '18rem' : '38rem')};
  height: 5rem;
  align-self: center;
  font-size: 1.6rem;
  font-weight: bold;
  border-radius: .6rem;
  color: ${({ theme }) => theme.COLORS.secondary};
  background-color: ${({ theme }) => theme.COLORS.button};
`;
