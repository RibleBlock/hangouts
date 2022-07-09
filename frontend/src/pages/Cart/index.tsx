/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { ButtonAction, CartItem } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { Pedido } from '../../store/module';
import { Box } from './Cart.styles';

export function Cart() {
  const objetoTeste = [
    {
      category: 'PiZZA',
      size: 'média',
      border: 'Borda de Chocolate Preto',
      flavors: ['Banana', 'Mel', 'mussarela', 'lombo com abacaxi'],
      value: 34.23,
      comment: 'Nao coloca fermento',
      idUser: 1,
    },
    {
      category: 'PiZZA',
      size: 'média',
      border: 'Borda de Chocolate Branco',
      flavors: ['Banana', 'Mel'],
      value: 34.23,
      comment: 'Nao coloca a massa',
      idUser: 2,
    },
    {
      category: 'PiZZA',
      size: 'média',
      border: 'Borda de Catupiry',
      flavors: ['Banana', 'Mel'],
      value: 67.563,
      comment: 'Nao coloca trigo na massa',
      idUser: 4,
    },
    {
      category: 'CALZONE',
      size: '',
      border: 'Borda de Catupiry',
      flavors: ['Frango'],
      value: 67.563,
      comment: 'Nao coloca trigo na massa',
      idUser: 4,
    },
  ] as Pedido[];

  return (
    <>
      <NavigationBar />
      <Header title="Carrinho" />

      <Box>
        <div className="flex_itens order_list">
          { objetoTeste.map(({
            category, size, border, flavors, comment, value, idUser,
          }: Pedido, i) => (
            <CartItem
              key={i}
              title={size ? `PIZZA ${size}` : category!}
              border={border}
              sabores={flavors}
              value={value}
              isOpen={false}
            />
          )) }

        </div>
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
          <div>
            <ButtonAction
              type="button"
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
