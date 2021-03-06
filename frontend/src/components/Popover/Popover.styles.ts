import { Dialog } from '@headlessui/react';
import styled from 'styled-components';

export const PopoverBox = styled(Dialog.Panel)`
  width: 100%;
  max-width: 60rem;
  padding-bottom: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.secondary};

  > header {
    position: relative;
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
  }

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
      width: 30%;
      margin-top: 3rem;
      border-radius: 50rem;
    }
  }
  @media (max-height: 600px) {
    > form > img {
      display: none;
    }
  }
`;

export const DarkBG = styled.div`
  width: max(100vw, 100%);
  height: max(100vh, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000085;
  user-select: none;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;
`;
