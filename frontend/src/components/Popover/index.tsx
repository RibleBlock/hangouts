import { useEffect, useState } from 'react';
import {
  BordersType, FlavorType, SizeType, TypeFood, typeFoods,
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
  const [flavor, setFlavor] = useState<FlavorType | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedType, size, border, flavor);
  }, [selectedType, size, border, flavor]);

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>
        <form method="POST">
          <input type="hidden" name="type" value={selectedType} />
          <input type="hidden" name="size" value={size || ''} />
          <input type="hidden" name="border" value={border || ''} />
          <input type="hidden" name="flavor" value={flavor || ''} />

          { (flavor || selectedType === 'CALZONE') || (!flavor && (border || selectedType === 'BEBIDA') && size) ? (
            <PopoverFlavorsStep
              chosenType={selectedType}
              size={size || 'BROTO'}
              setFlavors={setFlavor}
            />
          ) : (
            <>
              <img
                src={chosenType.image.source}
                alt={chosenType.image.alt}
              />

              { size && selectedType !== 'BEBIDA' ? (
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
