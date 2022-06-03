/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  ButtonAction, Footer, Header, NavigationBar,
} from '../../components';
import { Div } from './Register.styles';

type InputsRegister = {
  email: string;
  senha: string;
}
export function Register() {
  const { register, handleSubmit } = useForm<InputsRegister>();
  const submit: SubmitHandler<InputsRegister> = (data) => console.log(data);

  return (
    <>
      <NavigationBar />
      <Header title="Login" />
      <Div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <p>Nome Completo:</p>
            <input {...register('email')} />

            <p>E-mail:</p>
            <input {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('senha')} />

            <p>Confirmar Senha:</p>
            <input type="password" {...register('senha')} />

            <ButtonAction small>Criar Conta</ButtonAction>
          </form>
          <p>
            Já possui uma conta?
            {' '}
            <Link to="/login">CLIQUE PARA ENTRAR AGORA!</Link>
          </p>
        </div>
      </Div>
      <Footer />
    </>
  );
}
