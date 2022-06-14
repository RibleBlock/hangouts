/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  const { register, handleSubmit } = useForm<InputsRegister>();

  function submit(data: InputsRegister) {
    try {
      const inValid: string = validationUser(data);
      console.log(inValid || 'NADA');
      if (inValid) throw new Error(inValid);
      // if (!data.email || !data.password || !data.name || !data.ConfirmPassword) throw new Error('Campos vazios');
      // if (data.password !== data.ConfirmPassword) throw new Error('As senhas não são iguais');
      // if (data.password.length < 6) throw new Error('A senha dever ter mais de 5 letras');
      toast.success(String('Cadastrado com sucesso'));
      console.log(data);
    } catch (error: any) {
      console.log(error);
      toast.error(String(error).slice(7));
    }
  }

  return (
    <>
      <NavigationBar />
      <Header title="Login" />
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
