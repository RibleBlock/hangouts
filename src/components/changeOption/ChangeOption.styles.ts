import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Status = styled.p<{status: string}>`
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: bold;
  color: ${({ status }) => {
    if (status === 'cancel') return '#D00000';
    if (status === 'pending') return '#A5A800';
    if (status === 'preparation') return '#0000ff';
    if (status === 'fetching') return '#FF9F46';
    if (status === 'delivering') return '#8146FF';
    if (status === 'concluded') return '#03A800';
    return '#ff00ff';
  }}
`;

const buttonStyles = css`
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
  > ${Status} {
    position: absolute;
    right: 2.2rem;
  }
`;

export const Button = styled.button`${buttonStyles}`;
export const ButtonLink = styled(Link)`${buttonStyles}`;
