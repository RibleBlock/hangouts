import { BordersType, SizeType } from '../../../pages/Home';
import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string[];
  price: number;
  step: SizeType | BordersType | null;
  setStepOn: (sizeName: SizeType & BordersType) => void;
}
export function PopoverListButton({
  item, price, step, setStepOn,
}: PopoverListButtonProps) {
  return (
    <>
      { item.map((nameKey) => (
        <div key={nameKey}>
          <hr />
          <ButtonSize
            onClick={() => setStepOn(nameKey as SizeType & BordersType)}
            type="button"
          >
            <p>{ nameKey }</p>
            <span>
              R$
              {' '}
              {price.toFixed(2)}
            </span>
          </ButtonSize>
        </div>
      )) }
    </>
  );
}
