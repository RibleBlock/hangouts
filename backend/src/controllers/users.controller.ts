import { Request, Response } from 'express';
import UserModels from '../models/users.model';

class User {
  async create(req: Request, res: Response) {
    console.log(req.body);
    const { name, email, password } = req.body;
    try {
      console.log(1);
      const { data, error } = await UserModels.create({
        name, email, password,
      });
      console.log(2);

      return res.json({
        data,
      });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}
export default new User();
