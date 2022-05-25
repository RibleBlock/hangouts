import { Dialog } from '@headlessui/react';
import styled from 'styled-components';

export const PopoverBox = styled(Dialog.Panel)`
  width: 65vw;
  height: 80vh;
  /* padding: ; */
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.secondary};
  /* overflow: hidden; */

  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    &::after {
      content: '';
      height: .1rem;
      display: block;
      background-color: #00000040;
    }
  }
  > img {
    width: 25%;
    margin-top: 2rem;
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
