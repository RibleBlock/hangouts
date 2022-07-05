import styled from 'styled-components';

export const Button = styled.button<{small?: boolean, round?: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.small ? '18rem' : '38rem')};
  height: 5rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: .1rem;
  cursor: pointer;
  border-radius: ${(props) => (props.round ? '.6rem' : '5rem')};
  color: ${({ theme }) => theme.COLORS.secondary};
  background-color: ${({ theme }) => theme.COLORS.button};
  &:hover {
    filter: brightness(1.2);
  }
  &:disabled {
    opacity: .7;
  }
`;
