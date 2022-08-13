/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonAction, CartItem, Loading } from '../../components';
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

  return (
    <>
      <NavigationBar />
      <Header title="Carrinho" />

      <Box>
        { isFetchingCart ? (
          <div className="flex_itens loading">
            <Loading color="grey" />
          </div>
        ) : (
          <div className="flex_itens order_list">
            {itemsCart && itemsCart.pizza.map(({
              id, comment, pizza_flavor,
              pizza_border: { name: name_border, price: price_border },
              pizza_size: { name: name_size, price: price_size },
            }) => (
              <CartItem
                key={id}
                title={`PIZZA ${name_size}`}
                border={name_border}
                comment={comment}
                sabores={pizza_flavor}
                value={price_border + price_size}
              />
            )) }
            {itemsCart && itemsCart.calzone.map(({
              id_calzone, comment, calzone_flavor: { name, price },
            }) => (
              <CartItem
                key={id_calzone}
                title={`CALZONE DE ${name}`}
                comment={comment}
                sabores={name}
                value={price}
              />
            )) }
            {itemsCart && itemsCart.drink_cart.map(({
              drink: { id_drink, name_drink }, drink_size: { name_drink_size, price },
            }) => (
              <CartItem
                key={`${id_drink}${name_drink_size}`}
                title={`${name_drink} - ${name_drink_size}`}
                sabores={name_drink}
                value={price}
              />
            )) }
          </div>
        ) }

        <div className="flex_itens">
          <div>
            <p>Formas de Entrega:</p>
            <p>Botoes aqui</p>
          </div>
          <div>
            <p>Endereço:</p>
            <div>
              <p>Rua Pedro jose filia da massa</p>
              <p>Alterar</p>
            </div>
          </div>
          <div>
            <p>Entrega:</p>
            <p>R$ 0,00</p>
          </div>
          <div>
            <p>Total:</p>
            <p>R$ 0,00</p>
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
