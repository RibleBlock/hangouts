import {
  Box, ButtonWish, H1, MainBox,
} from './AdmWishes.styles';

export function AdmWishes() {
  return (
    <MainBox>
      <section id="wishesList">
        <ul>
          <li>
            <ButtonWish type="button" onClick={() => alert('fefdwefwe')}>
              <p>wishesList</p>
              <p>18:00</p>
            </ButtonWish>
          </li>
        </ul>
      </section>
      <section id="selectedWish">
        <div>
          <H1>nome_do_cliente</H1>

          <p>Pedido #002 • Pedido feito as 20:10</p>
        </div>

        <Box>
          <Box>Entregar em</Box>
          <p>Rua jao kubcheck camargo - 202 - casa • CEP 81270-200</p>
        </Box>
      </section>

    </MainBox>
  );
}
