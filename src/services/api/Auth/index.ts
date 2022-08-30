import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

interface User {
  name: string,
  email: string,
  password: string,
}

export const authApi = createApi({ //
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.mutation({
      query: () => ({
        url: 'allusers',
        method: 'GET',
      }),
    }),
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
      query: ({ table }: { table: string }) => ({
        url: `flavors?table=${table}`,
        method: 'GET',
      }),
    }),
    getFlavorsFilter: builder.mutation({
      query: ({ table, filter }: { table?: string, filter: string }) => ({
        url: `flavorsfilter?table=${table}&filter=${filter}`,
        method: 'GET',
      }),
    }),
    getDataTable: builder.mutation({
      query: ({ filter, route }: { filter: string, route: string }) => ({
        url: `${route}?filter=${filter}`,
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
  useGetAllUsersMutation,
  useLoginUserMutation,
  useNewUserMutation,
  useGetFlavorsMutation,
  useGetFlavorsFilterMutation,
  useGetDataTableMutation,
  useUpdateDataUserMutation,
} = authApi;
