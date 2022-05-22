import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Linked = styled(Link)<{title: string}>`
  width: 23rem;
  height: 23rem;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.background_OP};
  border-radius: 100%;
  transition: 600ms;

  display: flex;
  justify-content: center;
  align-items: center;

${(props) => props.title === 'DOCE' && css`
  display: none !important;
`}
    &:hover {
      transform: scale(1.1);
    }
  > img {
    border-radius: 100rem;

  }
`;
