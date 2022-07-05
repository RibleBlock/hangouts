import { useState } from 'react';
import { ButtonBC, ChangeOption } from '../../../../components';
import { Section } from '../BeginUser/BeginUser.styles';
import { Div, TaillessArrow } from '../MyData/MyData.styles';

interface OrderHistoryProps {
  user: User;
  setOption: (value: string) => void;
}
interface Baba {
  id: number,
  name: string,
}
export function OrderHistory({ user, setOption }: OrderHistoryProps) {
  // variavel de controle do popup
  const [popoverOrderIsOpen, setPopoverOrderIsOpen] = useState('');

  const objetoDeExemplo = [
    {
      id: 8, name: 'RIquelme',
    },
    {
      id: 9, name: 'Victor',
    },
    {
      id: 10, name: 'Pietro',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
    {
      id: 11, name: 'RIquelme',
    },
  ] as Baba[];

  return (
    <>
      <Div>
        <ButtonBC arrow action={setOption} />
        <p>Minhas Compras</p>
      </Div>
      <Section>

        { objetoDeExemplo.map(({ id }: Baba, indice, array) => (
          <>
            <ChangeOption
              setOption={setPopoverOrderIsOpen}
              optionTitle={`Pedido  N${id}`}
              optionDescription="Ver informacoes sobre este pedido"
              showArrow
            />
            { indice + 1 < array.length && (
              <hr />
            ) }
          </>
        )) }

      </Section>
    </>
  );
}
