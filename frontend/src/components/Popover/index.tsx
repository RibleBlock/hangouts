import { useState } from 'react';
import { SizeTypes, TypeFood, typeFoods } from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverSizeStep } from './step/PopoverSizeStep';

interface PopoverProps {
  selectedType: TypeFood;
}
export function Popover({ selectedType }: PopoverProps) {
  const chosenType = typeFoods[selectedType];
  const [size, setSize] = useState<SizeTypes | null>(null);

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>

        <img
          src={chosenType.image.source}
          alt={chosenType.image.alt}
        />
        { size ? (
          <h2>BORDAS OU OS SABORES</h2>
        ) : (
          <>
            <span></span>
            { chosenType ? (
              <>
                <input type="hidden" name="type" value={selectedType} />
                {/* <input type="hidden" name="size" value={size} /> */}
                {/* <input type="hidden" name="" /> */}

                <PopoverSizeStep
                  chosenType={selectedType}
                  objeto={typeFoods[selectedType].sizes}
                  stepValue={size}
                  setStepOn={setSize}
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
