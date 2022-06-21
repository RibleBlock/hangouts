import bcryptjs from 'bcryptjs';

export async function passwordIsValid(password: string, passwordHash: string) {
  return bcryptjs.compare(password, passwordHash);
}
