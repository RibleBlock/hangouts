/* eslint-disable no-prototype-builtins */
import { Request, Response } from 'express';
import flavorsModel, { SelectTable } from '../models/flavors.model';

class Flavors {
  async readFlavors(req: Request, res: Response) {
    try {
      const { table } = req.body;

      if (Object.keys(req.body).length !== 1 || !Object.keys(req.body).includes('table')) {
        return res.status(400).json({
          error: 'Credenciais invalidas',
        });
      }

      const { data, error } = await flavorsModel.store({ table });

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

  async getBorders(req: Request, res: Response) {
    try {
      const { filter }: SelectTable = req.body;

      if (Object.keys(req.body).length === 0 || !Object.keys(req.body).includes('filter')) {
        return res.status(400).json({
          error: 'Credenciais invalidas',
        });
      }

      const { data, error } = await flavorsModel.selectTable({
        table: 'pizza_border',
        filter,
        columns: '*',
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
