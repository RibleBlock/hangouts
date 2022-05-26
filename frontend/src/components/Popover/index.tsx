import { TypeFood, typeFoods } from '../../pages/Home';
import { DarkBG, PopoverBox } from './Popover.styles';
import { PopoverSizeStep } from './step/PopoverSizeStep';

interface PopoverProps {
  selectedType: TypeFood;
}
export function Popover({ selectedType }: PopoverProps) {
  const chosenType = typeFoods[selectedType];

  return (
    <DarkBG>
      <PopoverBox>
        <h2>{ chosenType.title }</h2>

        <img
          src={chosenType.image.source}
          alt={chosenType.image.alt}
        />
        {chosenType ? (
          <PopoverSizeStep chosenType={selectedType} />
        ) : (
          <p style={{ fontSize: '3rem' }}>SABores</p>
        )}
      </PopoverBox>
    </DarkBG>
  );
}
