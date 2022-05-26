import { Dialog } from '@headlessui/react';
import styled from 'styled-components';

export const PopoverBox = styled(Dialog.Panel)`
  width: 100%;
  max-width: 60rem;
  padding-bottom: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    &::after {
      content: '';
      display: block;
      height: .1rem;
      background-color: #00000040;
    }
  }
  > img {
    width: max(35%, 15rem);
    margin-top: 3rem;
    border-radius: 50rem;
  }
`;

export const DarkBG = styled.div`
  width: max(100vw, 100%);
  height: max(100vh, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000085;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`;
