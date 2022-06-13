import supabase from '../config/supabase';

interface User {
  name?: string,
  email?: string,
  password?: string,
}

interface UserBD extends User {
  id: number,
  created_at: string,
}

class Users {
  async create(newUser: User) {
    const { data, error }: { data: UserBD[] | null, error: any } = await supabase
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
