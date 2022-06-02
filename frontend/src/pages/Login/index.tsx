/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ButtonAction, Footer, Header, NavigationBar,
} from '../../components';
import { Div } from './Login.styles';

type InputsLogin = {
  email: string;
  senha: string;
}
export function Login() {
  const { register, handleSubmit } = useForm<InputsLogin>();
  const submit: SubmitHandler<InputsLogin> = (data) => console.log(data);

  return (
    <>
      <NavigationBar />
      <Header title="Login" />
      <Div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <p>E-mail:</p>
            <input {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('senha')} />

            <ButtonAction small>Entrar</ButtonAction>
          </form>
          <p>
            Ainda não tem uma conta?
            {' '}
            <Link to="/register">CRIE UMA AGORA!</Link>
          </p>
        </div>
      </Div>
      <Footer />
    </>
  );
}
