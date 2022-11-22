import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

interface FlavorData {
  id_flavor?: number,
  name: string,
  ingredients: string[],
  type: string,
  category: string,
  image: string,
}

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
    createFlavor: builder.mutation({
      query: (body: FlavorData) => ({
        url: 'createflavor',
        body,
        method: 'POST',
      }),
    }),
    updateFlavor: builder.mutation({
      query: (body: FlavorData) => ({
        url: `updateflavor/${body.id_flavor}`,
        body,
        method: 'PATCH',
      }),
    }),
  }),
});

export const { useSendCartMutation, useCreateFlavorMutation, useUpdateFlavorMutation } = flavorApi;
