import { Request, Response } from 'express';
import UserModels from '../models/users.model';

class User {
  async create(req: Request, res: Response) {
    // console.log(req.body); //
    const { name, email, password } = req.body;
    try {
      if (name && email && password) {
        const { data, error } = await UserModels.create({
          name, email, password,
        });

        return res.json({
          data,
        });
      }

      return res.json({
        error: 'Credenciais inválidas',
      });
    } catch (error: any) {
      return res.status(400).json(error);
    }
  }
}
export default new User();
