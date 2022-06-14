/* eslint-disable react/jsx-props-no-spreading */
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect } from 'react';
import { ButtonAction } from '../../components';
import { Div } from './Login.styles';
import { Footer, Header, NavigationBar } from '../../layouts';
import { validationUser } from '../../services/utils/validations/validationUser';

export type InputsLogin = {
  email: string;
  password: string;
}
export function Login() {
  const location = useLocation();
  const { register, handleSubmit } = useForm<InputsLogin>();

  async function submit(data: InputsLogin) {
    try {
      const inValid: string = validationUser({ ...data, location });
      console.log(inValid || 'NADA');
      if (inValid) throw new Error(inValid);
      toast.success(String('Logado com sucesso'));
      console.log(data);
    } catch (error: any) {
      toast.error(String(error).slice(7));
    }
  }

  /// //////

  useEffect(() => {
    console.log(location);
  }, [location]);
  /// ///////
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
            <input type="password" {...register('password')} />

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
