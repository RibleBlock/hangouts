import { Request, Response } from 'express';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModels from '../models/users.model';
import { checkErrorInDB } from '../utils/errorDB.utils';
import { passwordIsValid } from '../utils/checkPassword.util';
import wishModel from '../models/wish.model';

class User {
  async store(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;

    let errors: string = '';
    try {
      if (email && password) {
        const { data: user, error } = await UserModels.read(
          'id, name, email, password, phone, cart!inner(id_cart, status), admin',
          { email },
        );

        if (checkErrorInDB(error)) {
          errors = 'Email já existe';
          throw new Error();
        }

        if (!user || user?.length === 0) {
          return res.status(406).json({
            error: 'Usuário não existe',
          });
        }
        console.log(user[0]);
        const {
          id, name, password: passwordHash, phone, admin, cart,
        } = user[0];

        if (!(await passwordIsValid(password, passwordHash))) {
          return res.status(406).json({
            error: 'Senha inválida',
          });
        }

        const token = jwt.sign({
          id, name, email, phone, admin, cart,
        }, 'código_do_serviço_secreto');

        return res.json({
          token,
          user: {
            id, name, email, phone, admin, cart,
          },
        });
      }
      return res.status(409).json({
        error: 'Credenciais inválidas',
      });
    } catch (error: any) {
      return res.status(400).json({
        error: errors,
      });
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    let errors: string = '';
    try {
      // validar dados aqui //

      if (name && email && password) {
        const salt = await bcryptjs.genSalt();
        const passwordHash = bcryptjs.hashSync(password, salt);

        const { data, error } = await UserModels.create({ name, email, password: passwordHash });

        if (checkErrorInDB(error)) {
          errors = 'Email já existe';
          throw new Error();
        }
        const { data: cart, error: errorCart } = await wishModel.createCart({
          idUser: data![0].id,
        });

        if (errorCart) {
          return res.status(400).json({
            error: errorCart,
          });
        }

        return res.json({
          data,
          cart,
        });
      }

      return res.json({
        error: 'Credenciais inválidas',
      });
    } catch (error: any) {
      return res.status(406).json({
        error: errors,
      });
    }
  }

  async selectUser(req: Request, res: Response) {
    const {
      id, field, value, password,
    } = req.body;

    try {
      if ((!Number(id) || !String(field)) || (field !== 'name' && field !== 'password' && field !== 'phone')) {
        return res.status(400).json({
          error: 'Credenciais inválidas',
        });
      }

      const { data: user } = await UserModels.read('*', { id });

      if (!user || user?.length === 0) {
        return res.status(406).json({
          error: 'Usuário não existe',
        });
      }

      if (!(await passwordIsValid(password, user[0].password))) {
        return res.status(400).json({
          error: 'Senha invalida.',
        });
      }

      let passwordHash: string = '';
      if (field === 'password') {
        const salt = await bcryptjs.genSalt();
        passwordHash = bcryptjs.hashSync(value, salt);
      }

      const { data, error } = await UserModels.updateOneUser({
        id, field, value: passwordHash || value,
      });

      if (error) { // caso erro no supabase
        return res.status(400).json({
          error,
        });
      }
      const {
        id: idUser, name, email, phone, admin,
      } = data![0];

      const token = jwt.sign({
        id: idUser, name, email, phone, admin,
      }, 'código_do_serviço_secreto');

      return res.json({ // sucesso
        // data, //
        token,
      });
    } catch (error: any) {
      return res.status(400).json({
        error,
      });
    }
  }
}
export default new User();
