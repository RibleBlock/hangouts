import { ButtonAction, CartItem } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { Box } from './Cart.styles';

export function Cart() {
  return (
    <>
      <NavigationBar />
      <Header title="Carrinho" />

      <Box>
        <div className="flex_itens order_list">
          {/* UM .MAP() AQUI */}
          <CartItem title="PIZZA GRANDE" />
          <CartItem title="PIZZA GIGA" />
          <CartItem title="PIZZA GRANDE" />
          <CartItem title="PIZZA BROTO" />
          <CartItem title="PIZZA GIGA" />
          <CartItem title="PIZZA BROTO" />
          <CartItem title="PIZZA BROTO" />

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
