/* eslint-disable react/no-array-index-key */
import { useEffect, useState } from 'react';
import { ButtonAction, CartItem, Loading } from '../../components';
import { Pedido } from '../../interfaces/module';
import { Footer, Header, NavigationBar } from '../../layouts';
import { Box } from './Cart.styles';

export function Cart() {
  const [isFetchingCart, setIsFetchingCart] = useState<boolean>(false);
  const [objetoPedidoTeste] = useState<Pedido[]>([]);

  useEffect(() => {
    async function getCartUser() {
      // setIsFetchingCart(true);
      // alert('Buscando Carrinho do usuario');
      // setIsFetchingCart(false);
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
            { objetoPedidoTeste.map(({
              category, size, border, flavors, comment, id_cart,
            }: Pedido, i) => (
              <CartItem
                key={i}
                title={size ? `PIZZA ${size}` : category!}
                border={border}
                sabores={flavors}
                value={73573} // teste
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
