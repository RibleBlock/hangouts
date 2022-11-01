/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ButtonBC, ChangeOption, Loading } from '../../../../components';
import { CartAdm } from '../../../../interfaces/module';
import { useGetCartMutation } from '../../../../services/api/wish';
import { Section } from '../BeginUser/BeginUser.styles';
import { Div } from '../MyData/MyData.styles';

interface OrderHistoryProps {
  user: User;
  setOption: (value: string) => void;
}
export function OrderHistory({ user, setOption }: OrderHistoryProps) {
  const [getCart] = useGetCartMutation();
  const [myWishes, setMyWishes] = useState<CartAdm[] | null>(null);
  const [popoverOrderIsOpen, setPopoverOrderIsOpen] = useState('');

  useEffect(() => {
    async function getmyWishes() {
      try {
        const { data: { data } } = await getCart({ id_user: user.id_user, status: 'noStatus' }) as any;
        setMyWishes(data);
        return {};
      } catch (error: any) {
        if (error?.data.error) {
          return toast.error(error.data.error);
        }
        return toast.error(error);
      }
    }
    getmyWishes();
  }, []);

  return (
    <>
      <Div>
        <ButtonBC to="/user" arrow />
        <p>Minhas Compras</p>
      </Div>
      <Section>

        { myWishes ? myWishes.map(({
          id_cart, status,
        }, indice, array) => (
          <>
            <ChangeOption
              key={id_cart}
              tab=""
              status={status}
              setOption={setPopoverOrderIsOpen}
              optionTitle={`Pedido N${id_cart}`}
              optionDescription="Ver informacoes sobre este pedido"
              showArrow
            />
            { indice + 1 < array.length && (<hr />) }
          </>
        )) : (
          <Loading color="#5c5c5c" big />
        ) }

      </Section>
    </>
  );
}
