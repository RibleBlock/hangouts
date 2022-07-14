import supabase from '../config/supabase';

export interface SelectTable {
  columns: string,
  table: string,
  filter: string,
}

class Flavors {
  async store({ table }: {table: string}) {
    if (table) {
      const { data, error } = await supabase
        .from(table)
        .select('*');
      return { data, error };
    }
    const { data, error } = await supabase
      .from('flavor')
      .select(`
        name,
        created_at,
        flavor_category:id_flavor_category ( name, price ),
        flavor_type:id_flavor_type ( name, created_at ),
        flavor_ingredient!id_flavor(ingredient (*))
      `);
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
