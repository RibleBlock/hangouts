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

export interface cartUser {
  id_cart: number,
  created_at: string,
  id_user: number,
  status: string | null,
  pizza: [
    {
      id: number,
      created_at: string,
      id_pizza_size: number,
      id_pizza_border: number,
      comment: string,
      pizza_size: {
        id_pizza_size: number,
        created_at: string,
        name: string,
        price: number,
        quantidade_flavors: number
      },
      pizza_border: {
        id_pizza_border: number,
        created_at: string,
        name: string,
        price: number
      },
      pizza_flavor: [
        {
          flavor: {
            id_flavor: number,
            created_at: string,
            name: string,
            id_flavor_type: number,
            id_flavor_category: number,
            id_image: number | null
          }
        },
      ]
    },
  ],
  calzone: [
    {
      id_calzone: number,
      created_at: string,
      comment: string,
      id_calzone_flavor: number,
      calzone_flavor: {
        id_calzone_flavor: number,
        created_at: string,
        name: string,
        price: number,
        id_image: number | null
      }
    }
  ],
  drink_cart: [
    {
      id_drink_cart: number,
      created_at: string,
      id_cart: number,
      id_drink: number,
      id_drink_size: number,
      drink: {
        name_drink: string
      },
      drink_size: {
        id_drink_size: number,
        created_at: string,
        name_drink_size: string,
        price: number
      }
    },
  ]
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
    // console.log('table'); //
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
    // console.log('bebida'); //
    const { data, error }: { data: Pedido[] | null, error: any } = await supabase
      .from(table)
      .insert([{
        id_cart,
        id_drink: flavors![0],
        id_drink_size: size,
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

  async getCart({ id_cart }: {id_cart: number}) {
    const { data, error } = await supabase
      .from('cart')
      .select(`
        pizza!id_cart(
          *,
          pizza_size (*),
          pizza_border (*),
          pizza_flavor!id_pizza (
            flavor (
              name,
              flavor_category!inner (name, price)
            )
          )
        ),
        calzone!id_cart (
          *,
          calzone_flavor (*)
        ),
        drink_cart!id_cart (
          *,
          drink (*),
          drink_size (*)
        )
      `)
      .match({ id_cart });
    return { data, error };
  }
}
export default new Wish();
