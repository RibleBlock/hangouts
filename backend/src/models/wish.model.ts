import supabase from '../config/supabase';

interface Pedido {
  category: string,
  size: string | null,
  border: string,
  flavors: string[],
  comment?: string,
  value: number,
  idUser: number,
}
class Wish {
  async create({
    category, size, border, flavors, comment, value, idUser,
  }: Pedido) {
    const { data, error }: { data: Pedido[] | null, error: any } = await supabase
      .from('cart')
      .insert([{
        category, size, border, flavors, comment, value, idUser,
      }]);
    return { data, error };
  }
}
export default new Wish();
