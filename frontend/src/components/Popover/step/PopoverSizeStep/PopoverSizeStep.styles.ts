import { RadioGroup } from '@headlessui/react';
import styled from 'styled-components';

export const Formulario = styled.form`
  width: 100%;
  padding: 0 3rem;
  margin-top: 4rem;
  /* background-color: red; */

  > h2 {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }
  hr {
    width: 100%;
    height: .1rem;
    background-color: #00000040;
  }
`;

export const ButtonSize = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 5.5rem;
  font-size: 1.8rem;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.secondary_hover};
  }
  &:active {
    background-color: #2fef2f22;
  }

  > span {
    color: #038E00;
  }
`;
