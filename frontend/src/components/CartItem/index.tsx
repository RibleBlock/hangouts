/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { ArrowCart, Button } from './CartItem.styles';

export type CartItemStyle = {
  isOpen: boolean,
}
interface CartItemProps {
  title: string,
  border: string,
  sabores: string[],
  value: number,
}
export function CartItem({
  title, border, sabores, value,
}: CartItemProps) {
  const [buttonIsOpen, setButtonIsOpen] = useState(false);

  return (
    <Button
      type="button"
      isOpen={buttonIsOpen}
      onClick={() => setButtonIsOpen(!buttonIsOpen)}
    >
      <div id="title">
        <ArrowCart
          isOpen={buttonIsOpen}
          weight="bold"
        />
        <p>{(title || 'Sem Titulo').toUpperCase()}</p>
      </div>
      <div id="flavors">
        <p>{`• ${border}`}</p>
        <p>
          {'• '}
          { sabores.map((value, index) => `${value}${index + 1 < sabores.length ? ',' : ''} `) }
        </p>
      </div>
      <p id="value">{`R$ ${value.toFixed(2)}`}</p>
    </Button>
  );
}
