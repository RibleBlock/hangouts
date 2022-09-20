/* eslint-disable camelcase */
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { ButtonBC } from '../../../../components';
import { AddressItem } from '../../../../components/AddressItem';
import { PlusIcon } from '../../../../components/adm/AdmLineFlavors/AdmLineFlavors.styles';
import { DarkBG } from '../../../../components/Popover/Popover.styles';
import { useGetAddressMutation } from '../../../../services/api/Auth';
import { BoxPopOver } from '../MyData/MyData.styles';
import { addressDiv as Div, addressSection as Section } from './AddressUser.styles';

interface AddressUserProps {
  user: User,
  setOption: (value: string) => void,
}

export function AddressUser({ user, setOption }: AddressUserProps) {
  const [getAddress] = useGetAddressMutation();
  const [address, setAddress] = useState<Address[] | null>(null);
  const [dialogIsOpen, setDialogIsOpen] = useState<'edit' | 'delete' | null>(null);

  useEffect(() => {
    async function searchAddress() {
      const { data } = await getAddress({ id: user.id_user }) as any;
      setAddress(data);
    }
    searchAddress();
  }, []);

  const shemaThreeDots = [
    {
      option: 'Editar',
      action: () => {
        setDialogIsOpen('edit');
        console.log('foiI');
      },
    },
    {
      option: 'Excluir',
      action: () => {
        setDialogIsOpen('delete');
        console.log('EXCLUIR');
      },
    },
  ];

  return (
    <>
      <Div>
        <ButtonBC arrow action={setOption} />
        <p>Endereço</p>
      </Div>
      <Section>
        { address && address.map(({
          id_address, street, number, district, city, state, cep, id_user,
        }) => (
          <>
            <AddressItem
              key={id_address}
              title={`${street}. ${number} - ${district.toUpperCase()}`}
              subTitle={`Cep ${cep} - ${city} - ${state}`}
              config={shemaThreeDots}
            />
            <hr />
          </>
        )) }

        <button type="button">
          <PlusIcon weight="bold" />
          <h3>Adicionar Endereço</h3>
        </button>
      </Section>

      {/* POPOVER */}
      <Dialog open={!!dialogIsOpen} onClose={() => setDialogIsOpen(null)} as="div">
        <DarkBG>
          <BoxPopOver>
            <h1>alA TESTENDO</h1>
            <button type="button">Botao para focar</button>

          </BoxPopOver>
        </DarkBG>
      </Dialog>
    </>
  );
}
