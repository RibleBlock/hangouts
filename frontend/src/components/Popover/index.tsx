import { Dialog } from '@headlessui/react';
import { DarkBG, PopoverBox } from './Popover.styles';

export function Popover() {
  return (
    <DarkBG>
      <PopoverBox>
        <Dialog.Title as="h1">OADEerferg</Dialog.Title>

        <button type="button">APENAS PARA FOCAR</button>
      </PopoverBox>
    </DarkBG>
  );
}
