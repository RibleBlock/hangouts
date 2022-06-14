/* eslint-disable react/jsx-props-no-spreading */
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ButtonAction } from '../../components';
import { Div } from './Login.styles';
import { Footer, Header, NavigationBar } from '../../layouts';

export type InputsLogin = {
  email: string;
  password: string;
}
export function Login() {
  const { register, handleSubmit } = useForm<InputsLogin>();

  async function submit(data: InputsLogin) {
    try {
      if (!data.email || !data.password) throw new Error('Campos vazios');
      if (data.password.length < 6) throw new Error('A senha dever ter mais de 5 letras');
      toast.success(String('Logado com sucesso'));
      console.log(data);
    } catch (error: any) {
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
