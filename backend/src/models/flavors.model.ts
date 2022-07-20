import supabase from '../config/supabase';

export interface SelectTable {
  columns: string,
  table: string,
  filter: string,
}

class Flavors {
  async store({ table }: {table: string}) {
    if (table === 'drink_size') {
      const { data, error } = await supabase
        .from(table)
        .select(`
          *,
          drink_size_drink!id_drink_size ( drink (*) )
        `);
      return { data, error };
    }
    if (table) {
      const { data, error } = await supabase
        .from(table)
        .select('*')
        .order('price', { ascending: true });
      return { data, error };
    }
    const { data, error } = await supabase
      .from('flavor_category')
      .select(`
        *,
        flavor!id_flavor_category (
          *,
          image (*),
          flavor_type:id_flavor_type ( name, created_at ),
          flavor_ingredient!id_flavor(ingredient (*))
        )
      `)
      .order('price', { ascending: true });
    return { data, error };
  }

  async filterFlavor({ table, filter }: {table?: string, filter: string}) {
    if (table) {
      const { data, error } = await supabase
        .from(table)
        .select(`
          *,
          image (*)
        `)
        .ilike('name', `%${filter}%`); // <-- isso é loucura

      return { data, error };
    }

    const { data, error } = await supabase
      .from('flavor_type')
      .select(`
        *,
        flavor!inner(
          *,
          image!id_image (*),
          flavor_ingredient!id_flavor(ingredient (*))
        )
      `)
      .ilike('flavor.name', `%${filter}%`); // <-- isso é loucura

    return { data, error };
  }

  async selectTable({ table, filter, columns }: SelectTable) {
    if (filter) {
      const { data, error } = await supabase
        .from(table)
        .select(columns)
        .eq('name', filter);
      return { data, error };
    }
    const { data, error } = await supabase
      .from(table)
      .select(columns)
      .order('price', { ascending: true });
    return { data, error };
  }
}
export default new Flavors();
