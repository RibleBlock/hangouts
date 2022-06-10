import supa from '../config/supabase';

interface User {
  name?: string,
  email?: string,
  password?: string,
}

class Users {
  async create(newUser: User) {
    const { data, error }: {
       data: User | null, error: any | null
      } = await supa.auth.api.createUser({
        email: newUser.email,
        password: newUser.password,
        user_metadata: { name: newUser.name },
      });
    console.log({ data, error });
    return { data, error };
  }
}

export default new Users();
