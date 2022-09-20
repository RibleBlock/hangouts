import styled from 'styled-components';
import { Menu } from '@headlessui/react';
import { DotsThreeVertical } from 'phosphor-react';

export const DotsIcon = styled(DotsThreeVertical)`
  width: 2.5rem;
  height: 2.5rem;
  color: #000;
`;

export const BoxMenu = styled(Menu)``;

export const MenuButton = styled(Menu.Button)`
  cursor: pointer;
  border-radius: .4rem;
  &:not(:hover) {
    background-color: transparent;
  }
`;

export const MenuItems = styled(Menu.Items)`
   position: absolute;
   background-color: #fff;
   width: 10rem;
   box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.25);
`;

export const MenuItem = styled(Menu.Item)`
  cursor: pointer;
  padding: .5rem 1rem;
  user-select: none;
  &:hover {
    background-color: #F0F0F0;
  }
`;
