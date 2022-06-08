/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
  ButtonAction, Footer, Header, NavigationBar,
} from '../../components';
import { Div } from './Register.styles';

type InputsRegister = {
  nomeCompleto: string;
  email: string;
  senha: string;
  ConfirmSenha: string;
}
export function Register() {
  const { register, handleSubmit } = useForm<InputsRegister>();

  async function submit(data: InputsRegister) {
    try {
      if (!data.email || !data.senha || !data.nomeCompleto || !data.ConfirmSenha) throw new Error('Campos vazios');
      if (data.senha !== data.ConfirmSenha) throw new Error('As senhas não são iguais');
      if (data.senha.length < 6) throw new Error('A senha dever ter mais de 5 letras');
      toast.success(String('Cadastrado com sucesso'));
      console.log(data);
    } catch (error: any) {
      toast.error(String(error));
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
            <input {...register('nomeCompleto')} />

            <p>E-mail:</p>
            <input type="email" {...register('email')} />

            <p>Senha:</p>
            <input type="password" {...register('senha')} />

            <p>Confirmar Senha:</p>
            <input type="password" {...register('ConfirmSenha')} />

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
