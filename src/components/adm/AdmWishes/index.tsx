import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  Box, ButtonWish, H1, MainBox,
} from './AdmWishes.styles';

export function AdmWishes() {
  const [loadingData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    setLoadingData(true);
    async function getAllWishes() {
      try {
        // const {data} = await
        return toast.success('');
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
          <li>
            <ButtonWish type="button" onClick={() => alert('fefdwefwe')}>
              <p>wishesList</p>
              <p>18:00</p>
            </ButtonWish>
          </li>
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
