import { Footer, Header, NavigationBar } from '../../layouts';
import { Box } from './Cart.styles';

export function Cart() {
  return (
    <>
      <NavigationBar />
      <Header title="Carrinho" />

      <Box>
        <div style={{ boxShadow: 'none' }}>ITEM 1</div>
        <div>
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
            <p>R$ 300,00</p>
          </div>
        </div>
      </Box>

      <Footer />
    </>
  );
}
