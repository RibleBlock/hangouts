import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Flavor } from '../../../interfaces/module';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const flavorApi = createApi({
  reducerPath: 'flavorApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    sendCart: builder.mutation({
      query: () => ({
        url: 'createflavor',
        method: 'POST',
      }),
    }),
    updateFlavor: builder.mutation({
      query: (body: {
        id_flavor: number,
        name: string,
        ingredients: string[],
        type: number,
        category: number,
        image: string,
      }) => ({
        url: `updateflavor/${body.id_flavor}`,
        body,
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useSendCartMutation, useUpdateFlavorMutation } = flavorApi;
