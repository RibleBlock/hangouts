import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModels from '../models/users.model';
import { checkErrorInDB } from '../utils/errorDB.utils';
import { passwordIsValid } from '../utils/checkPassword.util';

class User {
  async store(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    let errors: string = '';
    try {
      if (email && password) {
        const { data: user, error } = await UserModels.read('id, name, email, password', { email });

        if (checkErrorInDB(error)) {
          errors = 'Email já existe';
          throw new Error();
        }

        if (!user || user?.length === 0) {
          return res.status(406).json({
            error: 'Usuário não existe',
          });
        }

        const {
          id, name, email: emailBD, password: passwordHash,
        } = user[0];

        if (!(await passwordIsValid(password, passwordHash))) {
          return res.status(406).json({
            error: 'Senha inválida',
          });
        }

        const token = jwt.sign({ id, name, emailBD }, 'ola_banana');

        return res.json({
          token,
          user: { id, name, emailBD },
        });
      }
      return res.status(409).json({
        error: 'Credenciais inválidas',
      });
    } catch (error: any) {
      return res.status(400).json({
        error: errors,
      });
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    let errors: string = '';
    try {
      // validar dados aqui //

      if (name && email && password) {
        const salt = await bcryptjs.genSalt();
        const passwordHash = bcryptjs.hashSync(password, salt);

        const { data, error } = await UserModels.create({ name, email, password: passwordHash });

        if (checkErrorInDB(error)) {
          errors = 'Email já existe';
          throw new Error();
        }

        return res.json({
          data,
        });
      }

      return res.json({
        error: 'Credenciais inválidas',
      });
    } catch (error: any) {
      return res.status(406).json({
        error: errors,
      });
    }
  }

  async selectAllUsers(req: Request, res: Response) {
    try {
      const { data, error } = await UserModels.readAll();

      return res.json({
        data,
      });
    } catch (error: any) {
      return res.status(400).json({
        error,
      });
    }
  }
}
export default new User();
