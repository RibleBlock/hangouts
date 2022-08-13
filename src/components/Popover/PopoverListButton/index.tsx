import { ButtonSize } from '../step/PopoverSizeStep/PopoverSizeStep.styles';

interface PopoverListButtonProps {
  item: string,
  price: number,
  descricao?: string,
  plusIcon?: boolean,
  setStepOn: () => void,
}
export function PopoverListButton({
  item, descricao, price, plusIcon, setStepOn,
}: PopoverListButtonProps) {
  return (
    <div>
      <hr />
      <ButtonSize
        onClick={setStepOn}
        type="button"
      >
        <div>
          <p>{ item }</p>
          <span>{ descricao }</span>
        </div>
        <span>
          { plusIcon && '+ ' }
          R$
          {' '}
          <span id="preco">{price.toFixed(2)}</span>
        </span>
      </ButtonSize>
    </div>
  );
}
