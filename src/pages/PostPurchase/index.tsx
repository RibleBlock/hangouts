import { CheckCircle, Info } from 'phosphor-react';
import { ButtonAction } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { MainBox } from './PostPurchase.styled';

export function PostPurchase() {
  return (
    <>
      <NavigationBar />
      <Header title="Compra finalizada" />

      <MainBox>
        <span>Compra realizada com com sucesso</span>
        <div style={{ display: 'flex', margin: 0 }}>
          <CheckCircle weight="thin" color="#00ff11" size={90} />
          <CheckCircle weight="light" color="#00ff11" size={90} />
          <CheckCircle weight="fill" color="#00ff11" size={90} />
          <CheckCircle weight="duotone" color="#00ff11" size={90} />
          <Info weight="thin" color="#0021de" size={90} />
          <Info weight="fill" color="#0021de" size={90} />
          <Info weight="duotone" color="#0021de" size={90} />
        </div>
        <p>Estamos confirmando o seu pedido, por favor aguarde</p>
        <div>
          <ButtonAction link to="/" noMargin>
            Voltar para a página principal
          </ButtonAction>
          <ButtonAction link to="/user?tab=historic" noMargin>
            Ir para o histórico
          </ButtonAction>
        </div>
      </MainBox>

      <Footer />
    </>
  );
}
