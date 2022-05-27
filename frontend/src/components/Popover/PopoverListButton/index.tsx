import { BordersType, SizeType } from '../../../pages/Home';
import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string[];
  price: number;
  setStepOn: (sizeName: SizeType & BordersType) => void;
}
export function PopoverListButton({ item, price, setStepOn }: PopoverListButtonProps) {
  return (
    <div>
      { item.map((nameItem) => (
        <>
          <hr />
          <ButtonSize
            onClick={() => setStepOn(item as SizeType & BordersType)}
            type="button"
          >
            <p>{ nameItem }</p>
            <span>
              R$
              {' '}
              {price.toFixed(2)}
            </span>
          </ButtonSize>
        </>
      )) }
    </div>
  );
}
