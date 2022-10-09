/* eslint-disable react/jsx-props-no-spreading */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonAction } from '../../components';
import { Div } from './Login.styles';
import { Footer, Header, NavigationBar } from '../../layouts';
import { validationUser } from '../../services/utils/validations/validationUser';
import { useLoginUserMutation } from '../../services/api/Auth';
import { addToken } from '../../store/Auth/reducer';

export type InputsLogin = {
  email: string;
  password: string;
}
export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<InputsLogin>();
  const [isLoadindLogin, setIsLoadingLogin] = useState<boolean>(false);
  const [userLogin] = useLoginUserMutation();
  const dispatch = useDispatch();

  async function submit(data: InputsLogin): Promise<any> {
    setIsLoadingLogin(true);

    try {
      const inValid: string = validationUser({ ...data, location });
      if (inValid) return toast.error(inValid);

      const { email, password } = data;
      const { token } = await userLogin({ email, password }).unwrap();
      dispatch(addToken(token));

      navigate('/', { replace: true, state: { prevPath: location.pathname } });
      return toast.success(String('Logado com sucesso'));
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error);
    } finally {
      setIsLoadingLogin(false);
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title="Login">
        Voce deve se cadastrar para fazer um pedido
      </Header>
      <Div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <p>E-mail:</p>
            <input {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('password')} />

            <ButtonAction
              type="submit"
              isLoading={isLoadindLogin}
              small="18"
            >
              Entrar
            </ButtonAction>
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
