import { Request, Response } from 'express';
import flavorsModel from '../models/flavors.model';

class Flavors {
  async read(req: Request, res: Response) {
    // const {} = req.body;
    try {
      const { data, error } = await flavorsModel.store('Batata com milho');

      if (error) {
        throw new Error(`${error}`);
      }
      return res.json(
        data,
      );
    } catch (error: any) {
      return res.status(400).json({
        error,
      });
    }
  }
}
export default new Flavors();
