import { Dialog } from '@headlessui/react';
import styled from 'styled-components';

export const PopoverBox = styled(Dialog.Panel)`
  width: 65vw;
  height: 80vh;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.secondary};
`;

export const DarkBG = styled.div`
  width: max(100vw, 100%);
  height: max(100vh, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000075;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`;
