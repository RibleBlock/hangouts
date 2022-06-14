import styled from 'styled-components';

export const Button = styled.button<{small?: boolean}>`
  width: ${(props) => (props.small ? '18rem' : '38rem')};
  height: 5rem;
  align-self: center;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: .6rem;
  color: ${({ theme }) => theme.COLORS.secondary};
  background-color: ${({ theme }) => theme.COLORS.button};
  &:hover {
    filter: brightness(1.1);
  }
`;
