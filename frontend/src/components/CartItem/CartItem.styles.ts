import styled from 'styled-components';
import { CaretRight } from 'phosphor-react';

export const ArrowCart = styled(CaretRight)`
  width: 2rem;
  height: 2rem;
  color: ${({ theme }) => theme.COLORS.select_primary};
  transform: rotate(0deg);
`;

export const Section = styled.section`
width: 100%;
  padding: 1.4rem 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px #BABABA;

  > div {
    display: flex;
    gap: 1rem;
  };
`;
