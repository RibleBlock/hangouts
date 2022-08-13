import { useState } from 'react';
import { ButtonBC, ChangeOption } from '../../../../components';
import { Section } from '../BeginUser/BeginUser.styles';
import { Div, TaillessArrow } from '../MyData/MyData.styles';

interface OrderHistoryProps {
  user: User;
  setOption: (value: string) => void;
}
interface TypeObjetoDeExemplo {
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
      id: 12, name: 'RIquelme',
    },
    {
      id: 13, name: 'RIquelme',
    },
    {
      id: 14, name: 'RIquelme',
    },
    {
      id: 15, name: 'RIquelme',
    },
    {
      id: 16, name: 'RIquelme',
    },
    {
      id: 17, name: 'RIquelme',
    },
    {
      id: 18, name: 'RIquelme',
    },
    {
      id: 19, name: 'RIquelme',
    },
    {
      id: 20, name: 'RIquelme',
    },
    {
      id: 21, name: 'RIquelme',
    },
    {
      id: 22, name: 'RIquelme',
    },
    {
      id: 23, name: 'RIquelme',
    },
    {
      id: 24, name: 'RIquelme',
    },
    {
      id: 25, name: 'RIquelme',
    },
    {
      id: 26, name: 'RIquelme',
    },
  ] as TypeObjetoDeExemplo[];

  return (
    <>
      <Div>
        <ButtonBC arrow action={setOption} />
        <p>Minhas Compras</p>
      </Div>
      <Section>

        { objetoDeExemplo.map(({ id }: TypeObjetoDeExemplo, indice, array) => (
          <>
            <ChangeOption
              key={id}
              setOption={setPopoverOrderIsOpen}
              optionTitle={`Pedido N${id}`}
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
