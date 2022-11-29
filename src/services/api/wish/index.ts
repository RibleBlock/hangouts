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
        id_user, idAddress, thing, order_time, date,
      }: {
        id_user: number, idAddress: number, thing: number, order_time: string, date: string
      }) => ({
        url: `sendcart/${id_user}?idAddress=${idAddress}&thing=${thing}&ordertime=${order_time}&date=${date}`,
        method: 'PATCH',
      }),
    }),
    updateCart: builder.mutation({
      query: ({ id_cart, status, reason }: {
        id_cart: number, status: string, reason?: string
      }) => ({
        url: `updateCartAdm/${id_cart}`,
        body: { status, reason },
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
    inactivewish: builder.mutation({
      query: ({ id, value }: { id: number, value: boolean }) => ({
        url: `cartitem?id_cart=${id}`,
        body: { value },
        method: 'DELETE',
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
  useUpdateCartMutation,
  useAddToCartMutation,
  useGetCartMutation,
  useGetCartADMMutation,
  useInactivewishMutation,
  useDeleteItemMutation,
} = wishApi;
