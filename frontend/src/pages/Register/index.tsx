/* eslint-disable react/jsx-props-no-spreading */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonAction } from '../../components';
import { Div } from './Register.styles';
import { Footer, Header, NavigationBar } from '../../layouts';
import { validationUser } from '../../services/utils/validations/validationUser';
import { useNewUserMutation } from '../../services/api/Auth';
import { addToken } from '../../store/Auth/reducer';

export type InputsRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<InputsRegister>();
  const [registrar] = useNewUserMutation();
  const [isLoadindRegister, setIsLoadingRegister] = useState<boolean>(false);
  const dispatch = useDispatch();

  async function submit(data: InputsRegister): Promise<any> {
    setIsLoadingRegister(true);

    try {
      const inValid: string = validationUser({ ...data, location });
      if (inValid) return toast.error(inValid);

      await registrar(data).unwrap();
      // dispatch(addToken(user.token));

      navigate('/login', { replace: true, state: { prevPath: location.pathname } });
      return toast.success(String('Cadastrado com sucesso'));
    } catch (error: any) {
      if (error?.data.error) {
        return toast.error(error.data.error);
      }
      return toast.error(error?.status || error);
    } finally {
      setIsLoadingRegister(false);
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title="Registrar" />
      <Div>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <p>Nome Completo:</p>
            <input {...register('name')} />

            <p>E-mail:</p>
            <input {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('password')} />

            <p>Confirmar Senha:</p>
            <input type="password" {...register('confirmPassword')} />

            <ButtonAction small isLoading={isLoadindRegister}>
              Criar Conta
            </ButtonAction>
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
