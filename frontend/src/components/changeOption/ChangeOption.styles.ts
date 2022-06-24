import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  text-decoration: none !important;
  transform: none !important;
  > svg {
    width: 4.5rem;
    height: 4.5rem;
    color: ${({ theme }) => theme.COLORS.primary};
  }
  > div.option {
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: .1rem;

    > .optionTitle {
      font-size: 1.7rem;
    }

    > .optionDescription {
      font-size: 1.4rem;
    }
  }
`;
