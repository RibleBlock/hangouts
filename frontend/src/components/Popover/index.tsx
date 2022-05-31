import { FormEvent, useEffect, useState } from 'react';
import {
  BordersType, SizeType, TypeFood, typeFoods,
} from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverBorderStep } from './step/PopoverBorderStep';
import { PopoverFlavorsStep } from './step/PopoverFlavorsStep';
import { PopoverSizeStep } from './step/PopoverSizeStep';

interface PopoverProps {
  selectedType: TypeFood;
}
export function Popover({ selectedType }: PopoverProps) {
  const chosenType = typeFoods[selectedType];
  const [size, setSize] = useState<SizeType | null>(null);
  const [border, setBorder] = useState<BordersType | null>(null);
  const [flavor, setFlavor] = useState<string[]>([]);
  const [comment, setComment] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(selectedType, size, border, flavor, comment);
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedType, size, border, flavor, comment);
  }, [selectedType, size, border, flavor, comment]);

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="type" value={selectedType} />
          <input type="hidden" name="size" value={size || 'vázio'} />
          <input type="hidden" name="border" value={border || 'vázio'} />
          <input type="hidden" name="flavor" value={flavor} />

          { (selectedType === 'BEBIDA') || (selectedType === 'CALZONE') || (size && border) ? (
            <PopoverFlavorsStep
              chosenType={selectedType}
              size={size || 'BROTO'}
              setFlavors={setFlavor}
              flavors={flavor}
              setComment={setComment}
            />
          ) : (
            <>
              <img
                src={chosenType.image.source}
                alt={chosenType.image.alt}
              />

              { size ? (
                <PopoverBorderStep
                  setBorda={setBorder}
                />
              ) : (
                <PopoverSizeStep
                  setSize={setSize}
                  chosenType={selectedType}
                />
              ) }
            </>
          )}

        </form>
      </PopoverBox>
    </DarkBG>
  );
}
