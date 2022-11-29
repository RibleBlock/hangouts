/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { Trash } from 'phosphor-react';
import {
  ButtonBC, ChangeOption, Loading,
} from '../../../../components';
import { CartAdm } from '../../../../interfaces/module';
import { useGetCartMutation, useInactivewishMutation } from '../../../../services/api/wish';
import { Section } from '../BeginUser/BeginUser.styles';
import {
  ButtonTrash, InnerBox, SectionWish, Title,
} from './OrderHistory.styles';
import { Div } from '../MyData/MyData.styles';
import { StatusWish } from '../../../../components/adm/AdmWishes/AdmWishes.styles';

interface OrderHistoryProps {
  user: User;
  setOption: (value: string) => void;
}
export function OrderHistory({ user, setOption }: OrderHistoryProps) {
  const [getCart] = useGetCartMutation();
  const [inactiveWish] = useInactivewishMutation();
  const [myWishes, setMyWishes] = useState<CartAdm[] | null>(null);
  const [selectedWish, setSelectedWish] = useState<CartAdm | null>(null);
  const [submitText, setSubmitText] = useState('Pedido');
  const [loadingTrash, setLoadingTrash] = useState(false);

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

  useMemo(() => {
    switch (selectedWish?.status) {
      case 'cancel':
        setSubmitText('Pedido cancelado');
        break;
      case 'pending':
        setSubmitText('Pedido pendente');
        break;
      case 'preparation':
        setSubmitText('Em preparo');
        break;
      case 'delivering':
        setSubmitText('Pedido a caminho');
        break;
      case 'fetching':
        setSubmitText('Pedido pronto para ser retirado');
        break;

      default:
        setSubmitText('Pedido concluido');
        break;
    }
  }, [selectedWish]);

  const inactivateOrder = async () => {
    setLoadingTrash(true);
    try {
      const { data } = await inactiveWish({ id: selectedWish?.id_cart!, value: false }) as any;

      setMyWishes(myWishes?.filter(
        (value) => value.id_cart !== selectedWish?.id_cart,
      )!);
      setSelectedWish(null);

      return toast.success(data);
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    } finally {
      setLoadingTrash(false);
    }
  };

  return (
    <>
      {/**/}
      { selectedWish ? (
        <SectionWish>
          <Title id="title">
            <div>
              <ButtonBC arrow action={() => setSelectedWish(null)} color="#000" />
              <h2>{submitText}</h2>

              { (selectedWish.status === 'concluded' || selectedWish.status === 'cancel') && (
                <ButtonTrash type="button" title="Remover este pedido." onClick={inactivateOrder}>
                  <Trash weight="bold" color="#ff0000" size={21} />
                </ButtonTrash>
              ) }
            </div>

            <StatusWish status={selectedWish.status}>
              Pedido #
              {selectedWish?.id_cart}
              {' '}
              • Pedido feito as
              {' '}
              {selectedWish?.order_time}
            </StatusWish>
          </Title>

          { selectedWish.status === 'cancel' && (
          <InnerBox style={{ borderColor: '#ff0000' }}>
            <p className="flex">Motivo do Cancelamento.</p>
            <p>{selectedWish.reason || '"Motivo não informado."'}</p>
          </InnerBox>
          ) }

          { selectedWish.status === 'pending' && (
          <InnerBox style={{ borderColor: '#A5A800' }}>
            <p className="flex">Vamos verificar seu pedido.</p>
            <p>Continue aguardando...</p>
          </InnerBox>
          ) }

          { selectedWish.status === 'preparation' && (
          <InnerBox style={{ borderColor: '#0000ff' }}>
            <p className="flex">Estamos preparando seu pedido.</p>
            <p>Continue aguardando...</p>
          </InnerBox>
          ) }

          { selectedWish.status === 'fetching' && (
          <InnerBox style={{ borderColor: '#FF9F46' }}>
            <p className="flex">Seu pedido está pronto.</p>
            <p>
              Venha buscar seu pedido.
              <br />
              E não se esqueça de dizer número do pedido
              {' #'}
              {selectedWish.id_cart}
              {' '}
              para o atendente.
            </p>
          </InnerBox>
          ) }

          { selectedWish.status === 'delivering' && (
          <InnerBox style={{ borderColor: '#8146FF' }}>
            <p className="flex">Seu pedido está a caminho.</p>
            <p>Aguarde mais pouco...</p>
          </InnerBox>
          ) }

          { selectedWish.status === 'concluded' && (
          <InnerBox style={{ borderColor: '#03A800' }}>
            <p className="flex">Este pedido já foi concluído.</p>
          </InnerBox>
          ) }

          <InnerBox style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            { selectedWish?.address.street !== 'RETIRAR' ? (
              <>
                <p style={{ width: '15rem' }}>Entregar em</p>
                <p className="righttext">
                  {selectedWish?.address.street[0].toUpperCase()}
                  { selectedWish?.address.street.substring(1)}
                  ,
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
                <p>Retirar no endereço:</p>
                <p className="righttext">Av. Rep. Argentina, 2376</p>
              </>
            ) }
          </InnerBox>

          { selectedWish.pizza && selectedWish.pizza.map(({
            id_pizza, pizza_flavor, comment,
            pizza_size: { name: size, price },
            pizza_border: { name: border, price: prise_border },
          }, i) => (
            <InnerBox key={id_pizza}>
              <div className="flex">
                <p>{`${i + 1}  Pizza ${size}`}</p>
                <p className="righttext">
                  {'R$: '}
                  <span>
                    { pizza_flavor.reduce((ac, {
                      flavor: { flavor_category: { price: price_flavor } },
                    }) => ac = price + prise_border + price_flavor, 0).toFixed(2) }
                  </span>
                </p>
              </div>
              <hr />
              <p>
                Sabores -
                {' '}
                { pizza_flavor.map(({
                  flavor: { id_flavor, name },
                }) => (
                  <span key={id_flavor}>{`${name}, `}</span>
                )) }
              </p>
              { border !== 'Sem Borda' && (
              <>
                <hr />
                <p>{`Borda recheada - ${border}`}</p>
              </>
              ) }
              { comment && (
              <>
                <hr />
                <p>{`Observações - ${comment}`}</p>
              </>
              ) }
            </InnerBox>
          )) }

          { selectedWish.calzone && selectedWish.calzone.map(({
            id_calzone, comment, calzone_flavor: { name, price },
          }, i) => (
            <InnerBox key={id_calzone}>
              <div className="flex">
                <p>{`${i + 1}  Calzone`}</p>
                <p className="righttext">{`R$: ${(price).toFixed(2)}`}</p>
              </div>
              <hr />
              <p>
                Sabores -
                {' '}
                {name}
              </p>
              { comment && (
              <>
                <hr />
                <p>
                  Observações -
                  {' '}
                  {comment}
                </p>
              </>
              ) }
            </InnerBox>
          )) }

          { selectedWish.drink_cart && selectedWish.drink_cart.map(({
            id_drink_cart, drink: { name_drink }, drink_size: { name_drink_size, price },
          }, i) => (
            <InnerBox key={id_drink_cart}>
              <div className="flex">
                <p>{`${i + 1}  ${name_drink} ${name_drink_size}`}</p>
                <p className="righttext">{`R$: ${(price).toFixed(2)}`}</p>
              </div>
            </InnerBox>
          )) }
        </SectionWish>
      ) : (
        <>
          <Div>
            <ButtonBC to="/user" arrow />
            <p>Minhas Compras</p>
          </Div>
          <Section>
            <>
              {/* Botoes do pedido */}
              { myWishes ? myWishes.map((item, indice, array) => (
                <>
                  <ChangeOption
                    key={item.id_cart}
                    status={item.status}
                    setOption={() => setSelectedWish(item)}
                    optionTitle={`Pedido N${item.id_cart}`}
                    optionDescription="Ver informacoes sobre este pedido"
                  />
                  { indice + 1 < array.length && (<hr />) }
                </>
              )) : (
                <Loading color="#5c5c5c" big />
              ) }
            </>
          </Section>
        </>
      ) }

    </>
  );
}
