import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChangeOptionStyles } from '.';

export const Button = styled(Link)<ChangeOptionStyles>`
  width: 100%;
  padding: 1rem 0;
  text-decoration: none !important;
  color: #000;
  display: flex;
  gap: 1rem;
  &:hover {
    font-weight: bold;
  }
  > svg {
    width: 4.5rem;
    height: 4.5rem;
    color: ${({ theme }) => theme.COLORS.primary};
  }
  > svg.arrowsvg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.COLORS.primary};
    position: absolute;
    right: 2.5rem;
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
