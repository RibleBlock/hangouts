import { ButtonAction } from '../../components';
import { Footer, Header, NavigationBar } from '../../layouts';
import { MainBox } from './PostPurchase.styled';

export function PostPurchase() {
  return (
    <>
      <NavigationBar />
      <Header title="Compra finalizada" />

      <MainBox>
        <p>oapa</p>
        <p>oapa</p>
        <p>oapa</p>
        <p>oapa</p>
        <p>oapa</p>
        <p>oapa</p>
        <div>
          <ButtonAction link to="/" noMargin>
            Voltar para a página principal
          </ButtonAction>
          <ButtonAction link to="/user?tab=historic" noMargin>
            Voltar para a página principal
          </ButtonAction>
        </div>
      </MainBox>

      <Footer />
    </>
  );
}
