/* eslint-disable camelcase */
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonAction, ButtonBC } from '../../../../components';
import { AddressItem } from '../../../../components/AddressItem';
import { PlusIcon } from '../../../../components/adm/AdmLineFlavors/AdmLineFlavors.styles';
import { DarkBG } from '../../../../components/Popover/Popover.styles';
import { useGetAddressMutation } from '../../../../services/api/Auth';
import { addressDiv as Div, AddressField, addressSection as Section, BoxPopOverAddress, DialogTitle, FormAddress } from './AddressUser.styles';

interface AddressUserProps {
  user: User,
  setOption: (value: string) => void,
}
interface InputsAddress {
  cep: string,
  street: string,
  number: number,
  district: string,
  obs: string,
}

export function AddressUser({ user, setOption }: AddressUserProps) {
  const [getAddress] = useGetAddressMutation();
  const [address, setAddress] = useState<Address[] | null>(null);
  const [dialogIsOpen, setDialogIsOpen] = useState<'edit' | 'delete' | null>(null);
  const { register, handleSubmit } = useForm<InputsAddress>();

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

  async function submit(data: InputsAddress) {
    alert('DADOS ENVIADOS');
  }

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
          <BoxPopOverAddress>
            <DialogTitle>Adicionar Endereço</DialogTitle>
            <FormAddress onSubmit={handleSubmit(submit)}>
              <AddressField id="cep">
                <p>CEP</p>
                <input {...register('cep')} />
              </AddressField>
              <AddressField id="bairro">
                <p>Bairro</p>
                <input {...register('district')} />
              </AddressField>
              <AddressField id="rua">
                <p>Rua/Avenida</p>
                <input {...register('street')} />
              </AddressField>
              <AddressField id="numero">
                <p>Número</p>
                <input {...register('number')} />
              </AddressField>
              <AddressField id="complemento">
              <p>Complemento</p>
              <input {...register('obs')} />
              </AddressField>

              <ButtonAction
                noMargin
                isLoading={!true}
              >Salvar</ButtonAction>
              <ButtonAction
                noMargin
              >Cancelar</ButtonAction>
            </FormAddress>
          </BoxPopOverAddress>
        </DarkBG>
      </Dialog>
    </>
  );
}
