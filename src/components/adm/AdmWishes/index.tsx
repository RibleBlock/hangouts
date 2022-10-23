/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import { Pizza } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { CartAdm } from '../../../interfaces/module';
import { useGetCartADMMutation } from '../../../services/api/wish';
import { ButtonAction } from '../../form/ButtonAction';
import { Loading } from '../../Loading';
import {
  Box, ButtonWish, H1, MainBox, Boxx, BoxItem,
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

  const valorTotalPizza = selectedWish?.pizza.reduce((ac, {
    pizza_border: { price: price_border },
    pizza_size: { price: price_size },
    pizza_flavor,
  }) => {
    const flavorEspecial = pizza_flavor.reduce((ac2, {
      flavor: { flavor_category: { price } },
    }) => ac2 += price, 0);
    return ac += price_border + price_size + flavorEspecial;
  }, 0);

  const valorTotalCalzone = selectedWish?.calzone.reduce((ac, {
    calzone_flavor: { price },
  }) => ac += price, 0);

  const valorTotalBebida = selectedWish?.drink_cart.reduce((ac, {
    drink_size: { price },
  }) => ac += price, 0);

  const frete = selectedWish?.address.street !== 'RETIRAR' ? 15 : 0;
  const total = valorTotalPizza! + valorTotalCalzone! + valorTotalBebida! + frete;

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
            <Pizza size={100} weight="light" />
            <H1>Selecione um Pedido</H1>
          </Boxx>
        ) : (
          <>
            <div>
              <H1>
                {selectedWish?.users.name[0].toUpperCase()}
                {selectedWish?.users.name.substring(1)}
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
                  <Box>Retirar em mãos</Box>
                  <p>{ selectedWish?.address.street }</p>
                </>
              ) }
            </Box>

            <h3>Pedido</h3>

            {/* ADICIONAR OS VALORES DOS SABORES ESPECIAIS */}
            { selectedWish.pizza && selectedWish.pizza.map(({
              id_pizza, pizza_flavor, comment,
              pizza_size: { name: size, price },
              pizza_border: { name: border, price: prise_border },
            }, i) => (
              <BoxItem key={id_pizza}>
                <div className="flex">
                  <p>{`${i + 1}  Pizza ${size}`}</p>
                  <p>
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
              </BoxItem>
            )) }

            { selectedWish.calzone && selectedWish.calzone.map(({
              id_calzone, comment, calzone_flavor: { name, price },
            }, i) => (
              <BoxItem key={id_calzone}>
                <div className="flex">
                  <p>{`${i + 1}  Calzone`}</p>
                  <p>{`R$: ${(price).toFixed(2)}`}</p>
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
              </BoxItem>
            )) }

            { selectedWish.drink_cart && selectedWish.drink_cart.map(({
              id_drink_cart, drink: { name_drink }, drink_size: { name_drink_size, price },
            }, i) => (
              <BoxItem key={id_drink_cart}>
                <p>{`${i + 1}  ${name_drink} ${name_drink_size}`}</p>
                <p>{`R$: ${(price).toFixed(2)}`}</p>
              </BoxItem>
            )) }

            <BoxItem>
              <H1>Pagamento/Entrega</H1>
              <hr />
              <p>
                Entrega Domiciliar -
                {' '}
                {selectedWish?.address.street[0].toUpperCase()}
                { selectedWish?.address.street.substring(1)}
                ,
                {' '}
                {selectedWish?.address.number}
              </p>
              <hr />
              <p className="flex">
                <span>Frete</span>
                <span>{`R$: ${frete.toFixed(2)}`}</span>
              </p>
              <hr />
              <p className="flex">
                <span>Total do pedido</span>
                <span>{`R$: ${(total).toFixed(2)}`}</span>
              </p>
            </BoxItem>

            <div className="botoes">
              <ButtonAction
                type="button"
                secundary
                noMargin
                small="19"
                action={() => alert('Cancelar')}
              >
                Cancelar pedido
              </ButtonAction>
              <ButtonAction
                type="button"
                small="19"
                noMargin
                action={() => alert('Preparar')}
              >
                Começar preparo
              </ButtonAction>
            </div>
          </>
        ) }
      </section>

    </MainBox>
  );
}
