/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Pedido } from '../../../interfaces/module';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const wishApi = createApi({
  reducerPath: 'wishApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: ({
        size, border, flavors, comment, id_cart, table,
      }: Pedido & {table: string}) => ({
        url: 'makewish',
        method: 'POST',
        body: {
          size, border, flavors, comment, id_cart, table,
        },
      }),
    }),
    getCart: builder.mutation({
      query: ({ id_cart }: { id_cart: number }) => ({
        url: `/getCart/${id_cart}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartMutation,
} = wishApi;
