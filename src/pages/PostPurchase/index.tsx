import { ButtonAction } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { CheckIcon, MainBox } from './PostPurchase.styled';

export function PostPurchase() {
  return (
    <>
      <NavigationBar />
      <Header title="Compra finalizada" />

      <MainBox>
        <span>Compra realizada com com sucesso</span>
        <CheckIcon weight="light" color="#00ff11" />
        <p>Estamos confirmando o seu pedido, Por favor aguarde.</p>
        <div>
          <ButtonAction link to="/" noMargin>
            Voltar para a página principal
          </ButtonAction>
          <ButtonAction link to="/user?tab=historic" noMargin>
            Ir para o histórico
          </ButtonAction>
        </div>
      </MainBox>
    </>
  );
}
