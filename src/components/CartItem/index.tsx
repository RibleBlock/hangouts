/* eslint-disable camelcase */
/* eslint-disable no-restricted-syntax */
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDeleteItemMutation } from '../../services/api/wish';
import { ArrowCart, Button } from './CartItem.styles';

interface CartItemProps {
  idPedido: number,
  title: string,
  border?: string,
  comment?: string,
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
  title, border, sabores, comment, value, idPedido,
}: CartItemProps) {
  const [deleteItem] = useDeleteItemMutation();
  const [buttonIsOpen, setButtonIsOpen] = useState<boolean>(false);
  const [showItem, setShowItem] = useState<boolean>(true);

  const handleDelete = async () => {
    const table = title.split(' ')[0];
    try {
      const { data: message } = await deleteItem({ id: idPedido, table }) as any;
      setShowItem(false);
      return toast.success(message);
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    }
  };

  return (
    <Button
      type="button"
      onClick={() => setButtonIsOpen(!buttonIsOpen)}
      isOpen={buttonIsOpen}
      show={showItem}
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
      <p id="value">{`R$ ${value.toFixed(2)}`}</p>
      <Icon
        id="trash"
        icon="akar-icons:trash-can"
        color="#ff0000"
        onClick={handleDelete}
      />
    </Button>
  );
}
