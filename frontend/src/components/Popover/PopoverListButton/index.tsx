import { BordersType, SizeType } from '../../../pages/Home';
import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string[];
  price: number;
  descricao?: string;
  setStepOn: (sizeName: SizeType & BordersType) => void;
}
export function PopoverListButton({
  item, descricao, price, setStepOn,
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
            <div>
              <p>{ nameKey }</p>
              <span>{ descricao }</span>
            </div>
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
