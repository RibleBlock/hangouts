import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pedido } from '../../../constants/module';

const baseUrl = import.meta.env.VITE_API_URL;

interface User {
  name: string,
  email: string,
  password: string,
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userLogin: Pick<User, 'email' | 'password'>) => ({
        url: 'login',
        method: 'POST',
        body: userLogin,
      }),
    }),
    newUser: builder.mutation({
      query: (user: User) => ({
        url: 'createUser',
        method: 'POST',
        body: user,
      }),
    }),
    addToCart: builder.mutation({
      query: (wish: Pedido) => ({
        url: 'makeWish',
        method: 'POST',
        body: wish,
      }),
    }),
    getFlavors: builder.mutation({
      query: (body: { table: string }) => ({
        url: 'flavors',
        body,
        method: 'POST',
      }),
    }),
    getDataTable: builder.mutation({
      query: (body: { filter: string, route: string }) => ({
        url: body.route,
        body,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useNewUserMutation,
  useAddToCartMutation,
  useGetFlavorsMutation,
  useGetDataTableMutation,
} = authApi;
