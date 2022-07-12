import { Request, Response } from 'express';
import wishModel from '../models/wish.model';

class Wish {
  async create(req: Request, res: Response) {
    const {
      category, size, border, flavors, comment, value, idUser,
    } = req.body;

    try {
      const { data, error } = await wishModel.create({
        category, size, border, flavors, comment, value, idUser,
      });

      return res.status(200).json({
        data,
      });
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}
export default new Wish();
