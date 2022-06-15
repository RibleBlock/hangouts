import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(import.meta.env);

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
    getter: builder.query({
      query: () => ({
        url: 'msg',
        method: 'GET',
      }),
    }),
    newUser: builder.mutation({
      query: (user: User) => ({
        url: 'createUser',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useNewUserMutation, useGetterQuery } = authApi;
