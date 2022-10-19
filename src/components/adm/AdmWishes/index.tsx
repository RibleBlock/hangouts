/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useGetCartADMMutation } from '../../../services/api/wish';
import {
  Box, ButtonWish, H1, MainBox,
} from './AdmWishes.styles';

export function AdmWishes() {
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [cartList, setCartList] = useState<CartAdm[] | null>(null);
  const [getWishes] = useGetCartADMMutation();

  useEffect(() => {
    setLoadingData(true);
    async function getAllWishes() {
      try {
        const { data } = await getWishes('') as any;
        setCartList([...data]);

        return toast.success('sucesso');
      } catch (error: any) {
        if (error?.data.error) {
          return toast.error(error.data.error);
        }
        return toast.error(error);
      } finally {
        setLoadingData(false);
      }
    }
    getAllWishes();
  }, []);

  return (
    <MainBox>
      <section id="wishesList">
        <ul>
          { cartList?.map(({
            id_cart, order_time,
            users: { name, email },
          }) => (
            <li key={id_cart}>
              <ButtonWish type="button" onClick={() => alert(`carrinho: ${id_cart}`)}>
                <p>{name.split(' ')[0]}</p>
                <p>{order_time}</p>
              </ButtonWish>
            </li>
          )) }
        </ul>
      </section>
      <section id="selectedWish">
        <div>
          <H1>Nome_do_cliente</H1>

          <p>Pedido #002 • Pedido feito as 20:10</p>
        </div>

        <Box>
          <Box>Entregar em</Box>
          <p>Rua jao kubcheck camargo - 202 - casa • CEP 81270-200</p>
        </Box>
      </section>

    </MainBox>
  );
}
