import supabase from '../config/supabase';

interface User {
  name: string,
  email: string,
  password: string,
  phone?: string,
  admin?: boolean,
  cart?: [
    {
      id_cart: number,
      created_at: string,
      id_user: number,
      status: number,
    }
  ]
}

interface UserDB extends User {
  id: number,
  created_at: string,
}
export interface UpdateFields {
  id: any,
  field: string,
  value: string,
}

class Users {
  async read(columns: string, query: Partial<UserDB>) {
    const { data, error }: { data: UserDB[] | null, error: any } = await supabase
      .from('users')
      .select(columns)
      .match(query);

    return { data, error };
  }

  async create(newUser: User) {
    const { data, error }: { data: UserDB[] | null, error: any } = await supabase
      .from('users')
      .insert([
        {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      ]);
    return { data, error };
  }

  async updateOneUser({ id, field, value }: UpdateFields) {
    const { data, error }: { data: UserDB[] | null, error: any } = await supabase
      .from('users')
      .update({ [field]: value })
      .match({ id });

    return { data, error };
  }
}

export default new Users();
