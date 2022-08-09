/* eslint-disable camelcase */
import { Request, Response } from 'express';
import wishModel, { cartUser } from '../models/wish.model';

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
      return res.status(201).json(
        data,
      );
    } catch (error) {
      return res.status(400).json({
        error: errors,
      });
    }
  }

  async getCart(req: Request, res: Response) {
    const { id_cart } = req.body;

    let errors: any;
    try {
      if (!id_cart) {
        errors = 'ID não encontrado.';
        throw new Error();
      }

      const { data, error }: {
         data: cartUser[] | null, error: any,
    } = await wishModel.getCart({ id_cart });

      if (!data) {
        errors = error.message;
        throw new Error();
      }

      const formatedData = [
        ...data[0].pizza,
        ...data[0].calzone,
        ...data[0].drink_cart,
      ];
      console.log(formatedData);

      return res.status(200).json({
        data,
      });
    } catch (error: any) {
      return res.status(400).json({
        error: errors,
      });
    }
  }
}
export default new Wish();
