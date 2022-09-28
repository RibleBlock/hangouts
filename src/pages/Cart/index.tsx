/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  ButtonAction, CartItem, InputText, Loading,
} from '../../components';
import { Cart as CartInterface } from '../../interfaces/module';
import { Footer, Header, NavigationBar } from '../../layouts';
import { useGetCartMutation, useDeleteItemMutation } from '../../services/api/wish';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import { getToken } from '../../store/Auth/reducer';
import { Box } from './Cart.styles';

export function Cart() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  const [isFetchingCart, setIsFetchingCart] = useState<boolean>(false);
  const [itemsCart, setItemsCart] = useState<CartInterface>();
  const [deleteItem] = useDeleteItemMutation();
  const [getFuckingCart] = useGetCartMutation();

  const handleDelete = async ({ id, table }: {id: number, table: 'pizza' | 'calzone' | ''}) => {
    try {
      const { data: message } = await deleteItem({ id, table }) as any;

      if (table === 'pizza') {
        setItemsCart({
          pizza: itemsCart!.pizza.filter(({ id_pizza }) => id_pizza !== id),
          calzone: itemsCart!.calzone,
          drink_cart: itemsCart!.drink_cart,
        });
      } else if (table === 'calzone') {
        setItemsCart({
          pizza: itemsCart!.pizza,
          calzone: itemsCart!.calzone.filter(({ id_calzone }) => id_calzone !== id),
          drink_cart: itemsCart!.drink_cart,
        });
      } else {
        setItemsCart({
          pizza: itemsCart!.pizza,
          calzone: itemsCart!.calzone,
          drink_cart: itemsCart!.drink_cart.filter(({ id_drink_cart }) => id_drink_cart !== id),
        });
      }

      return toast.success(message);
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    }
  };

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
    total: valorTotalPizza! + valorTotalCalzone! + valorTotalBebida! || 0, // MAIS O FRETE //
  };

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
              id_pizza, comment, pizza_flavor,
              pizza_border: { name: name_border, price: price_border },
              pizza_size: { name: name_size, price: price_size },
            }, i) => (
              <CartItem
                key={`${id_pizza}${i}`}
                deleteFunction={() => handleDelete({ id: id_pizza, table: 'pizza' })}
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
                deleteFunction={() => handleDelete({ id: id_calzone, table: 'calzone' })}
                title={`CALZONE DE ${name}`}
                comment={comment}
                sabores={name}
                value={price}
              />
            )) }
            {itemsCart && itemsCart.drink_cart.map(({
              id_drink_cart,
              drink: { name_drink }, drink_size: { name_drink_size, price },
            }) => (
              <CartItem
                key={id_drink_cart}
                deleteFunction={() => handleDelete({ id: id_drink_cart, table: '' })}
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
              { valorCompra.total?.toFixed(2) }
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
