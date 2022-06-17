import supabase from '../config/supabase';

interface User {
  name?: string,
  email?: string,
  password?: string,
}

interface UserDB extends User {
  id: number,
  created_at: string,
}

class Users {
  async read(columns: string, query: Partial<UserDB>) {
    const { data, error }: { data: UserDB[] | null, error: any } = await supabase
      .from('users')
      .select(columns)
      .match(query);
  }

  async readAll() {
    const { data, error }: { data: UserDB[] | null, error: any } = await supabase
      .from('users')
      .select('*');
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
    console.log({ data, error });
    return { data, error };
  }
}

export default new Users();
