import { toast } from 'react-toastify';
import * as yup from 'yup';
import { InputsLogin } from '../../../pages/Login';
import { InputsRegister } from '../../../pages/Register';

export const schema = yup.object({
  name: yup.string().min(5, () => toast.error('Nome deve ter entre 5 e 60 caracteres!')).max(60, () => toast.error('Nome deve ter entre 5 e 60 caracteres!')).required(() => toast.error('Nome é necessário!')),
  email: yup.string().email(() => toast.error('Email inválido!')).required(() => toast.error('Email é necessário!')),
  password: yup.string().min(6, () => toast.error('Senha deve ter no mínimo 6 caracteres!')).required(() => toast.error('Senha é necessária!')),
}).required();

export async function submit(data: InputsLogin | InputsRegister) {
  try {
    console.log(data);
    toast.success(String('Logado com sucesso'));
  } catch (error: any) {
    toast.error(String(error).slice(7));
  }
}

// async function submit(data: InputsRegister) {
//   try {
//     if (!data.email || !data.password || !data.name || !data.ConfirmPassword) throw new Error('Campos vazios');
//     if (data.password !== data.ConfirmPassword) throw new Error('As senhas não são iguais');
//     if (data.password.length < 6) throw new Error('A senha dever ter mais de 5 letras');
//     console.log(data);
//     toast.success(String('Cadastrado com sucesso'));
//   } catch (error: any) {
//     toast.error(String(error).slice(7));
//   }
// }
