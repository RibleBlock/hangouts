import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export const wishApi = createApi({
  reducerPath: 'flavorApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    sendCart: builder.mutation({
      query: () => ({
        url: 'createflavor',
        method: 'POST',
      }),
    }),
  }),
});
