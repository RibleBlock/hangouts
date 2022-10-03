/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  ButtonAction, CartItem, InputText, Loading,
} from '../../components';
import { AddressItem } from '../../components/AddressItem';
import { RadioButtonsGroup } from '../../components/form/RadioButtonsGroup';
import { DarkBG } from '../../components/Popover/Popover.styles';
import { Cart as CartInterface } from '../../interfaces/module';
import { Footer, Header, NavigationBar } from '../../layouts';
import { useGetAddressMutation } from '../../services/api/Auth';
import { useGetCartMutation, useDeleteItemMutation } from '../../services/api/wish';
import { decodeJWT } from '../../services/utils/Decode/DecodeJWT';
import validationCart from '../../services/utils/validations/validationCart';
import { getToken } from '../../store/Auth/reducer';
import { BoxPopOverAddress, DialogTitle } from '../User/steps/AddressUser/AddressUser.styles';
import { Box } from './Cart.styles';

export function Cart() {
  const token = useSelector(getToken);
  const currentUser = decodeJWT<User>(token);

  const [isFetchingCart, setIsFetchingCart] = useState<boolean>(false);
  const [itemsCart, setItemsCart] = useState<CartInterface>();
  const [deleteItem] = useDeleteItemMutation();
  const [getFuckingCart] = useGetCartMutation();

  const { id_user } = decodeJWT<User>(useSelector(getToken));
  const [getAddress] = useGetAddressMutation();
  const [addressIsOpen, setAddressIsOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<Address[] | null>(null);

  useEffect(() => {
    async function searchAddress() {
      const { data } = await getAddress({ id: id_user }) as any;
      setAddress(data);
    }
    searchAddress();
  }, []);

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

  const [isloadingWish, setIsloadingWish] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<Address | 'retirar' | null>(null);
  const [radio, setRadio] = useState('');
  const [thing, setThing] = useState<number>(0);
  const frete = selectedAddress && selectedAddress !== 'retirar' ? 15 : 0;
  const total = valorTotalPizza! + valorTotalCalzone! + valorTotalBebida! + frete || 0;
  const qtdItems = 0;

  const submitCart = async () => {
    try {
      setIsloadingWish(true);
      const isValid = validationCart({ address: selectedAddress, thing, total });
      if (isValid) {
        return toast.error(isValid);
      }

      return toast.success('Pedido enviado');
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    } finally {
      setIsloadingWish(false);
    }
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
              <p>
                { selectedAddress === 'retirar' ? 'Retirar em mãos'
                  : selectedAddress?.street || 'Nenhum endereço selecionado'}
              </p>
              <button
                type="button"
                onClick={() => setAddressIsOpen(!addressIsOpen)}
              >
                Alterar
              </button>
            </div>
          </div>
          <div id="troco">
            <p>Precisa de troco</p>
            <div>
              <RadioButtonsGroup title="" checked={radio} fields={['Não']} setState={setRadio} />
              <InputText
                type="number"
                title="Troco"
                setText={setThing}
                onFocus={() => setRadio('')}
                small
              />
            </div>
          </div>
          <div id="frete">
            <p>Frete:</p>
            <p>
              R$
              {' '}
              { frete.toFixed(2)}
            </p>
          </div>
          <div id="total">
            <p>Total do pedido:</p>
            <p>
              R$
              {' '}
              { total?.toFixed(2) }
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
              type="button"
              noMargin
              isLoading={isloadingWish}
              action={submitCart}
            >
              Finalizar compra
            </ButtonAction>
          </div>
        </div>
      </Box>

      <Footer />

      <Dialog open={addressIsOpen} onClose={() => setAddressIsOpen(false)} as="div">
        <DarkBG>
          <BoxPopOverAddress as="div">
            <DialogTitle>Selecione o endereço para entrega</DialogTitle>
            <hr />

            <div className="address">
              <AddressItem
                idAddress={0}
                title="RETIRAR EM MÃOS"
                subTitle="Retirar no balcão"
                fStart
                hover
                action={() => {
                  setSelectedAddress('retirar');
                  toast.success('Retirar no balcão!');
                  setAddressIsOpen(false);
                }}
              />
              <hr />
              {/*  */}

              { address && address.map(({
                id_address, street, number, district, city, cep, id_user,
              }, i) => (
                <>
                  <AddressItem
                    key={id_address}
                    idAddress={id_address}
                    title={`${street}, ${number} - ${district.toUpperCase()}`}
                    subTitle={`CEP ${cep} - ${city}`}
                    fStart
                    hover
                    action={() => {
                      setSelectedAddress({
                        id_address, cep, street, number, district, city, id_user,
                      });
                      toast.success('Endereço alterado!');
                      setAddressIsOpen(false);
                    }}
                  />
                  { i + 1 === address.length || (<hr />) }
                </>
              )) }
            </div>

            {/* Botoes */}
            <div className="botoes">
              <ButtonAction
                link
                to="/user?tab=address"
                noMargin
              >
                Adicionar Endereço
              </ButtonAction>
              <ButtonAction
                type="button"
                action={() => setAddressIsOpen(false)}
                secundary
                noMargin
              >
                Fechar
              </ButtonAction>
            </div>

          </BoxPopOverAddress>
        </DarkBG>
      </Dialog>
    </>
  );
}
