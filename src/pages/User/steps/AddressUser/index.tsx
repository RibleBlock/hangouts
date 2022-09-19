/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { ButtonBC } from '../../../../components';
import { AddressItem } from '../../../../components/AddressItem';
import { PlusIcon } from '../../../../components/adm/AdmLineFlavors/AdmLineFlavors.styles';
import { useGetAddressMutation } from '../../../../services/api/Auth';
import { addressDiv as Div, addressSection as Section } from './AddressUser.styles';

interface AddressUserProps {
  user: User,
  setOption: (value: string) => void,
}

export function AddressUser({ user, setOption }: AddressUserProps) {
  const [getAddress] = useGetAddressMutation();
  const [address, setAddress] = useState<Address[] | null>(null);

  useEffect(() => {
    async function searchAddress() {
      const { data } = await getAddress({ id: user.id }) as any;
      setAddress(data);
    }
    searchAddress();
  }, []);

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
              title={`${street}. ${number}`}
              subTitle={`Cep ${cep} - ${city} - ${state}`}
              action={() => console.log(`${id_address} ${street}`)}
            />
            <hr />
          </>
        )) }

        <button type="button" style={{ justifyContent: 'flex-start', gap: '1.2rem' }}>
          <PlusIcon weight="bold" />
          <h3>Adicionar Endereço</h3>
        </button>
      </Section>
    </>
  );
}
