import supabase from '../config/supabase';

class Flavors {
  async store(eqAt: string, mach?: string) {
    const { data, error } = await supabase
      .from('flavor')
      .select(`
        name,
        created_at,
        flavor_category:id_flavor_category ( name, price ),
        flavor_type:id_flavor_type ( name, created_at )
      `);
    return { data, error };
  }
}
export default new Flavors();
