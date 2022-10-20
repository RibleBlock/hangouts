/* eslint-disable camelcase */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Pedido } from '../../../interfaces/module';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const wishApi = createApi({
  reducerPath: 'wishApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    sendCart: builder.mutation({
      query: ({
        id_user, idAddress, thing, order_time,
      }: {
        id_user: number, idAddress: number, thing: number, order_time: string,
      }) => ({
        url: `sendcart/${id_user}?idAddress=${idAddress}&thing=${thing}&ordertime=${order_time}`,
        method: 'PATCH',
      }),
    }),
    addToCart: builder.mutation({
      query: ({
        size, border, flavors, comment, id_user, table,
      }: Pedido & {table: string}) => ({
        url: 'makewish',
        method: 'POST',
        body: {
          size, border, flavors, comment, id_user, table,
        },
      }),
    }),
    getCart: builder.mutation({
      query: ({ id_user, status }: { id_user: number, status: string }) => ({
        url: `getcart/${id_user}?status=${status}`,
        method: 'GET',
      }),
    }),
    getCartADM: builder.mutation({
      query: () => ({
        url: 'getcartadm',
        method: 'GET',
      }),
    }),
    deleteItem: builder.mutation({
      query: ({ id, table }: { id: number, table?: string }) => ({
        url: `cartitem?id_cart=${id}&table=${table}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useSendCartMutation,
  useAddToCartMutation,
  useGetCartMutation,
  useGetCartADMMutation,
  useDeleteItemMutation,
} = wishApi;
