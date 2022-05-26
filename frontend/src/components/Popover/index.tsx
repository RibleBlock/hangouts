import { Dialog } from '@headlessui/react';
import { TypeFood, typeFoods } from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverSizeStep } from './step/PopoverSizeStep';

export const sizesObj = {
  BROTO: {
    size: 'Broto',
    price: 26.00,
  },
  MEDIA: {
    size: 'Média',
    price: 35.00,
  },
  GRANDE: {
    size: 'Grande',
    price: 48.00,
  },
  GIGA: {
    size: 'Giga',
    price: 62.00,
  },
};

export type sizeTypes = keyof typeof sizesObj;
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
        <PopoverSizeStep />
      </PopoverBox>
    </DarkBG>
  );
}
