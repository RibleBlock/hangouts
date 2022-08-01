/* eslint-disable camelcase */
import supabase from '../config/supabase';

interface Pedido {
  id?: number;
  size: number | null,
  border: string,
  flavors?: number[],
  comment?: string,
  id_cart: number,
}
class Wish {
  async createCart({ idUser }: {idUser: any}) {
    const { data, error } = await supabase
      .from('cart')
      .insert([{
        id_user: idUser,
      }]);
    return { data, error };
  }

  async addToCart({
    table, size, border, comment, id_cart, flavors,
  }: Pedido & {table: string}) {
    console.log(table);
    if (table === 'pizza') {
      const { data, error }: { data: Pedido[] | null, error: any } = await supabase
        .from(table)
        .insert([{
          id_pizza_size: size,
          id_pizza_border: border,
          comment,
          id_cart,
        }]);
      return { data, error };
    } if (table === 'calzone' && flavors) {
      const { data, error }: { data: Pedido[] | null, error: any } = await supabase
        .from(table)
        .insert([{
          id_calzone_flavor: flavors[0],
          comment,
          id_cart,
        }]);
      return { data, error };
    }
    console.log('bebida');
    const { data, error }: { data: Pedido[] | null, error: any } = await supabase
      .from(table)
      .insert([{
        id_cart,
        id_drink: 99,
      }]);
    return { data, error };
  }

  /* ↑ together ↓ */
  async addFlavorToPizza({ table, idPizza, idFlavor }: {
    table: string, idPizza: number, idFlavor: number,
  }) {
    const { data, error } = await supabase
      .from(table)
      .insert([{
        id_pizza: idPizza,
        id_flavor: idFlavor,
      }]);
    return { data, error };
  }
}
export default new Wish();
