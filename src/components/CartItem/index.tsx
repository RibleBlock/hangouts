/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { ArrowCart, Button } from './CartItem.styles';

interface CartItemProps {
  title: string,
  border?: string,
  comment?: string,
  deleteFunction: () => void,
  sabores: {
    flavor: {
      name: string,
      flavor_category: {
        name: string,
        price: number,
      }
    }
  }[] | any,
  value: number,
}
export function CartItem({
  title, border, sabores, comment, value, deleteFunction,
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
        <p>
          {'• '}
          { Array.isArray(sabores)
            ? sabores.map(({
              flavor: { name: name_flavor },
            }, index) => (
              `${name_flavor}${index + 1 < sabores.length ? ', ' : ''}`
            ))
            : sabores}
        </p>
        { border && (<p>{`• ${border}`}</p>) }

        { comment && (<p>{`• OBS: ${comment}`}</p>) }
      </div>
      <p id="value">
        {'R$ '}
        { Array.isArray(sabores)
          ? sabores.reduce((ac: number, {
            flavor: { flavor_category: { price } },
          }: any) => ac = value + price, 0).toFixed(2)
          : (value).toFixed(2)}
      </p>
      <Icon
        id="trash"
        icon="akar-icons:trash-can"
        color="#ff0000"
        onClick={deleteFunction}
      />
    </Button>
  );
}
