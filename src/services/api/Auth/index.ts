import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

interface User {
  name: string,
  email: string,
  password: string,
}
interface Address {
  id_user: number,
  cep: string,
  district: string,
  number: number,
  complement: string,
  street: string,
  city: string,
}

export const authApi = createApi({ //
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.mutation({
      query: ({ filter }: {filter: string}) => ({
        url: `allusers?filter=${filter}`,
        method: 'GET',
      }),
    }),
    getAddress: builder.mutation({
      query: ({ id }: {id: number}) => ({
        url: `getaddress?id=${id}`,
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
    addAddress: builder.mutation({
      query: (body: Address) => ({
        url: 'addaddress',
        method: 'POST',
        body,
      }),
    }),
    removeAddress: builder.mutation({
      query: ({ id }: {id: number}) => ({
        url: `removeaddress?id=${id}`,
        method: 'DELETE',
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
      query: (body: {
        id: number,
        field: string,
        value: string | number | boolean,
        password?: string,
        isAdmin?: boolean,
       }) => ({
        url: 'updateuserdata',
        body,
        method: 'PATCH',
      }),
    }),
  }),
});

export const {
  useGetAddressMutation,
  useGetAllUsersMutation,
  useLoginUserMutation,
  useNewUserMutation,
  useAddAddressMutation,
  useRemoveAddressMutation,
  useGetFlavorsMutation,
  useGetFlavorsFilterMutation,
  useGetDataTableMutation,
  useUpdateDataUserMutation,
} = authApi;
