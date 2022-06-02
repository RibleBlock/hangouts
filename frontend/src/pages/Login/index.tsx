import { Link } from 'react-router-dom';
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
            <Link to="/register">CLIQUE PARA ENTRAR AGORA!</Link>
          </p>
        </div>
      </Div>
      <Footer />
    </>
  );
}
