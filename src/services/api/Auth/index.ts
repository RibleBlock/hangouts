import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL;

interface User {
  name: string,
  email: string,
  password: string,
}

export const authApi = createApi({ //
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
    getFlavors: builder.mutation({
      query: (body: { table: string }) => ({
        url: 'flavors',
        body,
        method: 'GET',
      }),
    }),
    getFlavorsFilter: builder.mutation({
      query: (body: { table?: string, filter: string }) => ({
        url: 'flavorsfilter',
        body,
        method: 'GET',
      }),
    }),
    getDataTable: builder.mutation({
      query: (body: { filter: string, route: string }) => ({
        url: body.route,
        body,
        method: 'GET',
      }),
    }),
    updateDataUser: builder.mutation({
      query: (body: { id: number, field: string, value: string, password: string }) => ({
        url: 'updateuserdata',
        body,
        method: 'PATCH',
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useNewUserMutation,
  useGetFlavorsMutation,
  useGetFlavorsFilterMutation,
  useGetDataTableMutation,
  useUpdateDataUserMutation,
} = authApi;
