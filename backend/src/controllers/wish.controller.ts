/* eslint-disable camelcase */
import { Request, Response } from 'express';
import wishModel from '../models/wish.model';

class Wish {
  async create(req: Request, res: Response) {
    const {
      table, size, border, flavors, comment, id_cart,
    } = req.body;

    const errors: string = '';
    try {
      const { data, error } = await wishModel.addToCart({
        table, size, border, comment, id_cart, flavors,
      });

      if (error) {
        return res.status(400).json({
          errors: error,
        });
      }

      if (table === 'pizza') {
        const result = flavors.map(async (value: number) => {
          const { data: cart, error: errorCart } = await wishModel.addFlavorToPizza({
            table: 'pizza_flavor', idPizza: data![0].id!, idFlavor: value,
          });
        });
      }
      return res.status(200).json(
        data,
      );
    } catch (error) {
      return res.status(400).json({
        error: errors,
      });
    }
  }
}
export default new Wish();
