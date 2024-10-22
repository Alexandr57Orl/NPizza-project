import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const URL = "https://66eb270b55ad32cda47bd76d.mockapi.io/";
export const ITEMS_TAG = "items";

export const baseApi = createApi({
  baseQuery: retry(fetchBaseQuery({ baseUrl: URL }), { maxRetries: 0 }),
  endpoints: () => ({}),
  tagTypes: [ITEMS_TAG],
});
