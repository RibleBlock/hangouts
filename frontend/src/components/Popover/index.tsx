import { Dialog } from '@headlessui/react';
import { TypeFood, typeFoods } from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';

interface PopoverProps {
  selectedType: TypeFood;
}
export function Popover({ selectedType }: PopoverProps) {
  const chosenType = typeFoods[selectedType];

  return (
    <DarkBG>
      <PopoverBox>
        <Dialog.Title as="h2">{ chosenType.title }</Dialog.Title>

        <img
          src={chosenType.image.source}
          alt={chosenType.image.alt}
        />
        <button type="button">APENAS PARA FOCAR</button>
      </PopoverBox>
    </DarkBG>
  );
}
