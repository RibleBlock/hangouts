/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonAction, ButtonBC } from '../../../../components';
import { AddressItem } from '../../../../components/AddressItem';
import { PlusIcon } from '../../../../components/adm/AdmLineFlavors/AdmLineFlavors.styles';
import { DarkBG } from '../../../../components/Popover/Popover.styles';
import { useAddAddressMutation, useGetAddressMutation, useRemoveAddressMutation } from '../../../../services/api/Auth';
import { validationAddress } from '../../../../services/utils/validations/validationAddress';
import { Div } from '../MyData/MyData.styles';
import {
  AddressField, addressSection as Section, BoxPopOverAddress, DialogTitle, FormAddress,
} from './AddressUser.styles';

interface AddressUserProps {
  user: User,
  setOption: (value: string) => void,
}
interface InputsAddress {
  cep: string,
  street: string,
  number: number,
  district: string,
  complement?: string,
}
interface PopoverAddress {
  type: 'new' | 'edit' | 'delete' | null,
  idAddress: number,
}

export function AddressUser({ user, setOption }: AddressUserProps) {
  const [getAddress] = useGetAddressMutation();
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [address, setAddress] = useState<Address[] | null>(null);
  const [dialogIsOpen, setDialogIsOpen] = useState<PopoverAddress>({ type: null, idAddress: 0 });
  const { register, handleSubmit } = useForm<InputsAddress>();
  const [newAddress] = useAddAddressMutation();
  const [excluirAddress] = useRemoveAddressMutation();
  const [isLodingRemoveAddress, setIsLodingRemoveAddress] = useState<boolean>(false);

  useEffect(() => {
    async function searchAddress() {
      const { data } = await getAddress({ id: user.id_user }) as any;
      setAddress(data);
    }
    searchAddress();
  }, []);

  const removeAddress = async () => {
    setIsLodingRemoveAddress(true);
    try {
      await excluirAddress({ id: dialogIsOpen.idAddress }) as any;

      setAddress(address!.filter((value) => value.id_address !== dialogIsOpen.idAddress));

      return toast.success('Endereço apagado!');
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error?.data.error);
      }
      return toast.error(error);
    } finally {
      setDialogIsOpen({ type: null, idAddress: 0 });
      setIsLodingRemoveAddress(false);
    }
  };

  const shemaThreeDots = [
    // {
    //   option: 'Editar',
    //   action: () => {
    //     setDialogIsOpen('edit');
    //   },
    // },
    {
      option: 'Excluir',
      action: (idAddress: number) => {
        setDialogIsOpen({
          type: 'delete',
          idAddress,
        });
      },
    },
  ];

  async function submit(data: InputsAddress) {
    const {
      cep, district, number, complement, street,
    } = data;
    const city = 'Curitiba';

    setLoadingSubmit(true);
    try {
      const inValid = validationAddress({
        id_address: 0, cep, district, number, complement, street, city,
      });
      if (inValid) return toast.error(inValid);

      const cepString = cep.length === 8
        ? cep.replace(/\D/g, '')
          .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1')
        : cep;

      const { data } = await newAddress({
        id_user: user.id_user,
        cep: cepString,
        street,
        number,
        district,
        city,
        complement,
      }) as any;

      setAddress((old) => [...old!, data[0]]);
      setDialogIsOpen({ type: null, idAddress: 0 });
      return toast.success('Endereço adicionado com sucesso');
    } catch (error: any) {
      return toast.error(error);
    } finally {
      setLoadingSubmit(false);
    }
  }

  return (
    <>
      <Div>
        <ButtonBC to="/user" arrow />
        <p>Endereço</p>
      </Div>
      <Section>
        <button type="button" onClick={() => setDialogIsOpen({ type: 'new', idAddress: 0 })}>
          <PlusIcon weight="bold" />
          <h3>Adicionar Endereço</h3>
        </button>

        { address && address.map(({
          id_address, street, number, district, city, cep,
        }) => (
          <>
            <hr />
            <AddressItem
              key={id_address}
              idAddress={id_address}
              title={`${street}, ${number} - ${district.toUpperCase()}`}
              subTitle={`Cep ${cep} - ${city}`}
              config={shemaThreeDots}
            />
          </>
        )) }
      </Section>

      {/* POPOVER */}
      <Dialog open={!!dialogIsOpen.type} onClose={() => setDialogIsOpen({ type: null, idAddress: 0 })} as="div">
        <DarkBG>
          { dialogIsOpen.type !== 'delete' ? (
            <BoxPopOverAddress as="div">
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
                  <input {...register('complement')} />
                </AddressField>

                <ButtonAction
                  noMargin
                  isLoading={loadingSubmit}
                >
                  Salvar
                </ButtonAction>
                <ButtonAction
                  noMargin
                  secundary
                  type="button"
                  action={() => setDialogIsOpen({ type: null, idAddress: 0 })}
                >
                  Cancelar
                </ButtonAction>
              </FormAddress>
            </BoxPopOverAddress>
          ) : (
            <BoxPopOverAddress as="div" hasWidth={41}>
              <DialogTitle noBorder padding={2}>Remover Endereço?</DialogTitle>

              <div className="botoes">
                <ButtonAction
                  small
                  noMargin
                  round
                  color="#970721"
                  isLoading={isLodingRemoveAddress}
                  action={removeAddress}
                >
                  Remover
                </ButtonAction>
                <ButtonAction
                  small
                  noMargin
                  round
                  secundary
                  action={() => setDialogIsOpen({ type: null, idAddress: 0 })}
                >
                  Cancelar
                </ButtonAction>
              </div>
            </BoxPopOverAddress>
          ) }
        </DarkBG>
      </Dialog>
    </>
  );
}
