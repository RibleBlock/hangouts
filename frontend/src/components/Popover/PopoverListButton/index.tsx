import { MouseEvent } from 'react';
import { BordersType, SizeType } from '../../../assets/Foods';
import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string[];
  price: number;
  descricao?: string;
  setStepOn: (sizeName: SizeType & BordersType) => void;
  setValue: (value: number) => void;
  valueWish: number;
}
export function PopoverListButton({
  item, descricao, price, setStepOn, setValue, valueWish,
}: PopoverListButtonProps) {
  function setarValores(e: MouseEvent) {
    const el = e.target as EventType & EventTarget;
    const size = el!.firstChild.innerText;
    const price = Number((el!.lastChild.innerText).slice(3));

    setStepOn(size as SizeType & BordersType);
    setValue(Number(valueWish + price));
  }

  return (
    <>
      { item.map((nameKey) => (
        <div key={nameKey}>
          <hr />
          <ButtonSize
            onClick={(e) => setarValores(e as any)}
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
