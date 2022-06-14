/* eslint-disable no-restricted-globals */
import validator from 'validator';

export function validationUser({
  name, email, password, confirmPassword,
}: {
  name?: string,
  email?: string,
  password?: string,
  confirmPassword?: string,
  location: {
    pathname: string,
  },
}) {
  if (!name && location.pathname !== '/login') return 'Nome é necessário';
  if (name && !validator.isLength(name, { min: 3, max: 60 })) {
    console.log('errrrrrro');
    return 'Nome deve ter entre 3 e 60 caracteres!';
  }

  if (!email) return 'E-mail é necessário';
  if (email && !validator.isEmail(email)) {
    return 'Email inválido!';
  }

  if (!password) return 'Senha é necessária';
  if (password && !validator.isLength(password, { min: 6 })) {
    return 'Senha deve ter no mínimo 6 caracteres!';
  }
  if (!confirmPassword && location.pathname !== '/login') return 'Confirme sua senha!';
  if (password !== confirmPassword && location.pathname !== '/login') {
    return 'As senhas não são iguais';
  }

  return '';
}
