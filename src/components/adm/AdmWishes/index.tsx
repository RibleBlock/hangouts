/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable camelcase */
import { Pizza } from 'phosphor-react';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { CartAdm } from '../../../interfaces/module';
import { useGetCartADMMutation, useUpdateCartMutation } from '../../../services/api/wish';
import { ButtonAction } from '../../form/ButtonAction';
import { Loading } from '../../Loading';
import {
  Box, ButtonWish, H1, MainBox, Boxx, BoxItem, TextArea, StatusWish,
} from './AdmWishes.styles';

export function AdmWishes() {
  const [isloadingData, setIsLoadingData] = useState<boolean>(false);
  const [cartList, setCartList] = useState<CartAdm[] | null>(null);
  const [selectedWish, setSelectedWish] = useState<CartAdm | null>(null);
  const [getWishes] = useGetCartADMMutation();
  const [updateCart] = useUpdateCartMutation();
  const [submitText, setSubmitText] = useState<{button: string, status: string}>();

  const returnStatus = (statusAtual: string) => {
    if (statusAtual === 'pending') {
      setSubmitText({ status: 'Pendente', button: 'Começar Pedido' });
      return 'preparation';
    } if (statusAtual === 'preparation') {
      setSubmitText({ status: 'Em preparo', button: 'Finanizar Pedido' });
      return 'concluded';
    }
    setSubmitText({ status: 'Concluído', button: '' });
    return 'concluded';
  };

  useEffect(() => {
    setIsLoadingData(true);
    returnStatus(selectedWish?.status!);
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
  /// ///

  const [reason, setReason] = useState<string>('');
  const [isCancel, setIsCancel] = useState<boolean>(false);
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false);
  useMemo(() => {
    setIsCancel(false);
    returnStatus(selectedWish?.status!);
  }, [selectedWish]);

  const cancelWish = async () => {
    try {
      await updateCart({
        id_cart: selectedWish?.id_cart!,
        status: 'cancel',
        reason,
      }) as any;
      setIsCancel(!isCancel);
      setCartList(
        cartList?.filter((value) => value.id_cart !== selectedWish?.id_cart!)!,
      );

      return toast.success('Canceldo com sucesso!');
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    }
  };

  const updateStatus = async (statusAtual: string) => {
    const status = returnStatus(statusAtual);

    setIsLoadingSubmit(true);
    try {
      if (selectedWish?.status !== 'concluded') {
        await updateCart({
          id_cart: selectedWish?.id_cart!,
          status,
        }) as any;
        if (status === 'concluded') {
          setCartList(
            cartList?.filter((value) => value.id_cart !== selectedWish?.id_cart!)!,
          );
          setSelectedWish(null);
        } else {
          setCartList(
            cartList?.map((value) => (value.id_cart === selectedWish!.id_cart
              ? { ...value, status }
              : value))!,
          );
          setSelectedWish({ ...selectedWish!, status });
        }
        return toast.success(`Pedido ${submitText?.status}!`);
      }
      return '';
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    } finally {
      setIsLoadingSubmit(false);
    }
  };

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

            { !isCancel ? (
              <>
                <div>
                  <h3>Pedido</h3>
                  <StatusWish status={selectedWish.status}>{submitText?.status}</StatusWish>
                </div>

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
                  {selectedWish.address.complement && (
                    <>
                      <hr />
                      <p>{selectedWish.address.complement}</p>
                    </>
                  )}

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
                  {selectedWish.troco !== 0 && (
                    <>
                      <hr />
                      <p className="flex">
                        <span>Troco para</span>
                        <span>{`R$: ${(selectedWish.troco).toFixed(2)}`}</span>
                      </p>
                    </>
                  )}
                </BoxItem>

                <div className="botoes">
                  <ButtonAction
                    type="button"
                    secundary
                    noMargin
                    small="19"
                    action={() => setIsCancel(!isCancel)}
                  >
                    Cancelar pedido
                  </ButtonAction>
                  <ButtonAction
                    type="button"
                    small="19"
                    noMargin
                    isLoading={isLoadingSubmit}
                    action={() => updateStatus(selectedWish.status)}
                  >
                    {submitText?.button}
                  </ButtonAction>
                </div>
              </>
            ) : (
              <>
                <p>Digite aqui o motivo para informar o cliente</p>
                <TextArea placeholder="motivo aqui...." onChange={(e) => setReason(e.target.value)} />

                <div className="botoes">
                  <ButtonAction
                    type="button"
                    secundary
                    noMargin
                    small="19"
                    action={() => setIsCancel(!isCancel)}
                  >
                    Retomar pedido
                  </ButtonAction>
                  <ButtonAction
                    type="button"
                    small="19"
                    noMargin
                    isLoading={isLoadingSubmit}
                    action={cancelWish}
                  >
                    Enviar Mensagem
                  </ButtonAction>
                </div>
              </>
            ) }
          </>
        ) }
      </section>

    </MainBox>
  );
}
