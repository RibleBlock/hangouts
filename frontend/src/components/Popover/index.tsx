import { useState } from 'react';
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

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>

        <img
          src={chosenType.image.source}
          alt={chosenType.image.alt}
        />
        { size ? (
          <PopoverBorderStep
            borda={border}
            setBorda={setBorder}
          />
        ) : (
          <>
            <span></span>
            { chosenType ? (
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
            ) : (
              <p style={{ fontSize: '3rem' }}>SABores</p>
            ) }
          </>
        )}
      </PopoverBox>
    </DarkBG>
  );
}
