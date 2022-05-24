import styled, { css } from 'styled-components';
import { DarkSection } from '.';
import backgroundDarkSection from '../../assets/images/bg_dark.svg';

export const SectionBox = styled.section<DarkSection>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2.5rem 15rem;
  ${(props) => props.background && css`
    color: ${({ theme }) => theme.COLORS.text_secondary};
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${backgroundDarkSection});
  `}
  span {
    display: block;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.text_tertiary};
    font-family: 'Pirata One', cursive;
  }
  > h1 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  > p {
    font-size: 2rem;
    max-width: 100rem;
    text-align: center;
    margin-top: 5rem;
  }
  // bolinha
  > .boxLinks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 9rem;
    margin-top: 5rem;
  }
`;
