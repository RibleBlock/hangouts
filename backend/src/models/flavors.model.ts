import supabase from '../config/supabase';

export interface SelectTable {
  columns: string,
  table: string,
  filter: string,
}

class Flavors {
  async store() {
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
    const { data, error } = await supabase
      .from(table)
      .select(columns)
      .eq('name', filter);
    return { data, error };
  }
}
export default new Flavors();
