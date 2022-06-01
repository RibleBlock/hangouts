import {
  ButtonAction, Footer, Header, NavigationBar,
} from '../../components';
import { Div } from './Login.styles';

export function Login() {
  return (
    <>
      <NavigationBar />
      <Header title="Login" />
      <Div>
        <div>
          <form action="" method="post">
            <p>Nome:</p>
            <input type="text" />
            <p>Senha:</p>
            <input type="text" />
            <ButtonAction small>Entrar</ButtonAction>
          </form>
          <p>
            Já possui uma conta?
            {' '}
            <a href="/register">CLIQUE PARA ENTRAR AGORA!</a>
          </p>
        </div>
      </Div>
      <Footer />
    </>
  );
}
