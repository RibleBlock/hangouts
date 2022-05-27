import { useEffect, useState } from 'react';
import {
  BordersType, SizeType, TypeFood, typeFoods,
} from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverBorderStep } from './step/PopoverBorderStep';
import { PopoverSizeStep } from './step/PopoverSizeStep';

interface PopoverProps {
  selectedType: TypeFood;
}
export function Popover({ selectedType }: PopoverProps) {
  const chosenType = typeFoods[selectedType];
  const [size, setSize] = useState<SizeType | null>(null);
  const [border, setBorder] = useState<BordersType | null>(null);
  const [flavor, setFlavor] = useState<BordersType | null>(null);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(selectedType, size, border, flavor);
  }, [selectedType, size, border, flavor]);

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>

        { (flavor || selectedType === 'CALZONE') || (!flavor && (border || selectedType === 'BEBIDA') && size) ? (
          <p style={{ fontSize: '3rem' }}>SABores</p>
        ) : (
          <>
            <img
              src={chosenType.image.source}
              alt={chosenType.image.alt}
            />

            { size && selectedType !== 'BEBIDA' ? (
              <PopoverBorderStep
                borda={border}
                setBorda={setBorder}
              />
            ) : (
              <>
                <input type="hidden" name="type" value={selectedType} />
                {/* <input type="hidden" name="size" value={size} /> */}
                {/* <input type="hidden" name="" /> */}

                <PopoverSizeStep
                  size={size}
                  setSize={setSize}
                  chosenType={selectedType}
                />
              </>
            ) }
          </>
        )}
      </PopoverBox>
    </DarkBG>
  );
}
