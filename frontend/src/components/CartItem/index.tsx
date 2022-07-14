/* eslint-disable no-restricted-syntax */
import { useState } from 'react';
import { ArrowCart, Button } from './CartItem.styles';

interface CartItemProps {
  title: string,
  border: string,
  sabores: string[],
  value: number,
}
export function CartItem({
  title, border, sabores, value,
}: CartItemProps) {
  const [buttonIsOpen, setButtonIsOpen] = useState<boolean>(false);

  return (
    <Button
      type="button"
      onClick={() => setButtonIsOpen(!buttonIsOpen)}
      isOpen={buttonIsOpen}
    >
      <div id="title">
        <ArrowCart
          style={{ transform: `rotate(${buttonIsOpen ? '90deg' : '0'})` }}
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
