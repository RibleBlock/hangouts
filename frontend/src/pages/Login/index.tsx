import { Footer, Header, NavigationBar } from '../../components';
import { Div } from './Login.styles';

export function Login() {
  return (
    <>
      <NavigationBar />
      <Header title="Login" />
      <Div>
        <form action="" method="post">
          <p>Nome:</p>
          <input type="text" />
          <p>Senha:</p>
          <input type="text" />
          <button type="submit">Entrar</button>
        </form>
      </Div>
      <Footer />
    </>
  );
}
