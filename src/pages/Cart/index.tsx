/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  ButtonAction, CartItem, InputText, Loading,
} from '../../components';
import { Cart as CartInterface } from '../../interfaces/module';
import { Footer, Header, NavigationBar } from '../../layouts';
import { useGetCartMutation } from '../../services/api/wish';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { Box } from './Cart.styles';

export function Cart() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  const [isFetchingCart, setIsFetchingCart] = useState<boolean>(false);
  const [itemsCart, setItemsCart] = useState<CartInterface>();
  const [getFuckingCart] = useGetCartMutation();

  useEffect(() => {
    async function getCartUser() {
      setIsFetchingCart(true);
      const { data } = await getFuckingCart({
        id_cart: currentUser.cart[0].id_cart,
      }) as any;
      setItemsCart(data.data[0]);
      setIsFetchingCart(false);
    }
    getCartUser();
  }, []);

  const valorTotalPizza = itemsCart?.pizza.reduce((ac, {
    pizza_border: { price: price_border },
    pizza_size: { price: price_size },
  }) => ac += price_border + price_size, 0);

  const valorTotalCalzone = itemsCart?.calzone.reduce((ac, {
    calzone_flavor: { price },
  }) => ac += price, 0);

  const valorTotalBebida = itemsCart?.drink_cart.reduce((ac, {
    drink_size: { price },
  }) => ac += price, 0);

  const [troco, setTroco] = useState<any>(0);
  const valorCompra = {
    troco: Number(troco),
    frete: 0,
    total: valorTotalPizza! + valorTotalCalzone! + valorTotalBebida!, // MAIS O FRETE //
  };
  console.log(valorCompra);

  return (
    <>
      <NavigationBar />
      <Header title="Carrinho" />

      <Box>
        { isFetchingCart ? (
          <div className="flex_itens loading">
            <Loading color="grey" big />
          </div>
        ) : (
          <div className="flex_itens order_list">
            {itemsCart && itemsCart.pizza.map(({
              id, comment, pizza_flavor,
              pizza_border: { name: name_border, price: price_border },
              pizza_size: { name: name_size, price: price_size },
            }, i) => (
              <CartItem
                key={`${id}${i}`}
                title={`PIZZA ${name_size}`}
                border={name_border}
                comment={comment}
                sabores={pizza_flavor}
                value={price_border + price_size}
              />
            )) }
            {itemsCart && itemsCart.calzone.map(({
              id_calzone, comment, calzone_flavor: { name, price },
            }, i) => (
              <CartItem
                key={`${id_calzone}${i}`}
                title={`CALZONE DE ${name}`}
                comment={comment}
                sabores={name}
                value={price}
              />
            )) }
            {itemsCart && itemsCart.drink_cart.map(({
              drink: { id_drink, name_drink }, drink_size: { name_drink_size, price },
            }, i) => (
              <CartItem
                key={`${id_drink}${name_drink_size}${i}`}
                title={`${name_drink} - ${name_drink_size}`}
                sabores={name_drink}
                value={price}
              />
            )) }
          </div>
        ) }

        <div className="grid">
          <div id="address">
            <p>Endereço</p>
            <div>
              <p>Rua Pedro jose filia da massa</p>
              <Link to="/">Alterar</Link>
            </div>
          </div>
          <div id="troco">
            <p>Troco para</p>
            <InputText
              small
              title="Troco"
              setText={setTroco}
              type="number"
            />
          </div>
          <div id="frete">
            <p>Frete:</p>
            <p>R$ 0,00</p>
          </div>
          <div id="total">
            <p>Total do pedido:</p>
            <p>
              R$
              {' '}
              { valorCompra.total?.toFixed(2) || '0.00' }
            </p>
          </div>
          <div className="botoes">
            <ButtonAction
              link
              to="/pedir"
              noMargin
            >
              Continuar comprando
            </ButtonAction>
            <ButtonAction
              type="submit"
              noMargin
            >
              Finalizar compra
            </ButtonAction>
          </div>
        </div>
      </Box>

      <Footer />
    </>
  );
}
