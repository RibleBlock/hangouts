/* eslint-disable camelcase */
import { Pizza } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetCartADMMutation } from '../../../services/api/wish';
import { Loading } from '../../Loading';
import {
  Box, ButtonWish, H1, MainBox, Boxx,
} from './AdmWishes.styles';

export function AdmWishes() {
  const [isloadingData, setIsLoadingData] = useState<boolean>(false);
  const [cartList, setCartList] = useState<CartAdm[] | null>(null);
  const [selectedWish, setSelectedWish] = useState<CartAdm | null>(null);
  const [getWishes] = useGetCartADMMutation();

  useEffect(() => {
    setIsLoadingData(true);
    async function getAllWishes() {
      try {
        const { data } = await getWishes('') as any;
        setCartList([...data]);

        return {};
      } catch (error: any) {
        if (error?.data.error) {
          return toast.error(error.data.error);
        }
        return toast.error(error);
      } finally {
        setIsLoadingData(false);
      }
    }
    getAllWishes();
  }, []);

  return (
    <MainBox>
      <section id="wishesList">
        { isloadingData ? (
          <Boxx style={{ height: '43rem' }}>
            <Loading big color="#8e8e8e" />
          </Boxx>
        ) : (
          <ul>
            { cartList?.map(({
              id_cart, order_time,
              users: { name },
            }, i, a) => (
              <li key={id_cart}>
                <ButtonWish
                  type="button"
                  onClick={() => setSelectedWish(a[i])}
                  isSelected={id_cart === selectedWish?.id_cart}
                >
                  <p>{name.split(' ')[0]}</p>
                  <p>{order_time}</p>
                </ButtonWish>
              </li>
            )) }
          </ul>
        ) }
      </section>
      <section id="selectedWish">

        { !selectedWish ? (
          <Boxx>
            <Pizza size={120} weight="light" />
            <H1>Selecione um Pedido a esquerda</H1>
          </Boxx>
        ) : (
          <>
            <div>
              <H1>
                {selectedWish?.users.name[0].toUpperCase()}
                { selectedWish?.users.name.substring(1)}
              </H1>

              <p>
                Pedido #
                {selectedWish?.id_cart}
                {' '}
                • Pedido feito as
                {' '}
                {selectedWish?.order_time}
              </p>
            </div>

            <Box>
              { selectedWish?.address.street !== 'RETIRAR' ? (
                <>
                  <Box>Entregar em</Box>
                  <p>
                    {selectedWish?.address.street[0].toUpperCase()}
                    { selectedWish?.address.street.substring(1)}
                    {' '}
                    -
                    {' '}
                    {selectedWish?.address.number}
                    {' '}
                    • CEP
                    {' '}
                    {selectedWish?.address.cep}
                  </p>
                </>
              ) : (
                <>
                  <Box>Retirar em mãos</Box>
                  <p>{ selectedWish?.address.street }</p>
                </>
              ) }
            </Box>
          </>
        ) }
      </section>

    </MainBox>
  );
}
