import { Request, Response } from 'express';
import UserModels from '../models/users.model';
import { checkErrorInDB } from '../utils/errorDB.utils';

class User {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    let errors: string = '';
    try {
      if (name && email && password) {
        const { data, error } = await UserModels.create({ name, email, password });

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
