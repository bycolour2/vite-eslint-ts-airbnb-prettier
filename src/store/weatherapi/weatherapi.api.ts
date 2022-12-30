import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IServerResponse } from '../../models/ServerResponse';

export const weatherApi = createApi({
  reducerPath: 'weatherapi/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.weatherapi.com/v1/',
  }),
  endpoints: (build) => ({
    current: build.query<IServerResponse, string>({
      query: (search: string) => ({
        url: '/current.json',
        params: { key: '37c55fe3eff446e7b73133138222812', q: search },
      }),
    }),
  }),
});

export const { useCurrentQuery } = weatherApi;

export default weatherApi;
