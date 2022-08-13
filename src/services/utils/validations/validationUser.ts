/* eslint-disable no-restricted-globals */
import validator from 'validator';

export function validationUser({
  name, email, password, confirmPassword, phone,
}: {
  name?: string,
  email?: string,
  phone?: string,
  password?: string,
  confirmPassword?: string,
  location: {
    pathname: string,
  },
}) {
  if (!name && location.pathname !== '/login') return 'Nome é necessário';
  if (name && !validator.isLength(name, { min: 3, max: 60 })) {
    return 'Nome deve ter entre 3 e 60 caracteres!';
  }

  if (!email) return 'E-mail é necessário';
  if (email && !validator.isEmail(email)) {
    return 'Email inválido!';
  }

  if (phone && !validator.isNumeric(phone)) {
    return 'precisa ser numero';
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

export function validationUserData({
  name, email, password, phone,
}: {
  name?: string,
  email?: string,
  phone?: string,
  password?: string,
}) {
  if (name && !validator.isLength(name, { min: 3, max: 60 })) {
    return 'Nome deve ter entre 3 e 60 caracteres!';
  }

  if (email && !validator.isEmail(email)) {
    return 'Email inválido!';
  }

  if (phone && !validator.isNumeric(phone)) {
    return 'precisa ser numero';
  }

  if (password && !validator.isLength(password, { min: 6 })) {
    return 'Senha deve ter no mínimo 6 caracteres!';
  }

  return '';
}
