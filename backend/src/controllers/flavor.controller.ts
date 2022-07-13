import { Request, Response } from 'express';
import flavorsModel, { SelectTable } from '../models/flavors.model';

class Flavors {
  async readFlavors(req: Request, res: Response) {
    try {
      const { data, error } = await flavorsModel.store();

      if (error) {
        throw new Error(`${error?.code} Algo deu errado`);
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

  async getSizes(req: Request, res: Response) {
    try {
      const { filter }: SelectTable = req.body;

      if (!filter) {
        return res.status(400).json({
          error: 'Credenciais invalidas',
        });
      }

      const { data, error } = await flavorsModel.selectTable({
        table: 'flavor_type',
        filter,
        columns: `
          *,
          flavor_type_pizza_size!id_flavor_type(pizza_size (*))
        `,
      });

      if (error) {
        return res.status(400).json(
          error,
        );
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
