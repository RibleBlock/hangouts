/* eslint-disable react/jsx-props-no-spreading */
import { Link, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ButtonAction } from '../../components';
import { Div } from './Register.styles';
import { Footer, Header, NavigationBar } from '../../layouts';
import { validationUser } from '../../services/utils/validations/validationUser';

export type InputsRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export function Register() {
  const location = useLocation();
  const { register, handleSubmit } = useForm<InputsRegister>();

  function submit(data: InputsRegister) {
    try {
      const inValid: string = validationUser({ ...data, location });
      if (inValid) throw new Error(inValid);

      toast.success(String('Cadastrado com sucesso'));
      console.log(data);
    } catch (error: any) {
      toast.error(String(error).slice(7));
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
