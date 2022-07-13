import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pedido } from '../../../store/module';

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
    getFlavors: builder.query({
      query: () => ({
        url: 'flavors',
        method: 'GET',
      }),
    }),
    getSizes: builder.mutation({
      query: (body: { filter: string }) => ({
        url: 'sizes',
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
  useLazyGetFlavorsQuery,
  useGetSizesMutation,
} = authApi;
