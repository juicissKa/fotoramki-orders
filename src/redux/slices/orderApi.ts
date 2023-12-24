import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { OrderType } from "../../components/OrderTable/Order";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getOrders: builder.query<OrderType[], string>({
      query: () => `orders`,
      providesTags: ["Orders"],
    }),
    createOrder: builder.mutation({
      query: (values) => ({
        url: "orders",
        method: "POST",
        body: values,
      }),
      invalidatesTags: ["Orders"],
    }),
    updateOrder: builder.mutation({
      query: ({ id, title }) => ({
        url: `orders/${id}`,
        method: "PUT",
        body: { title },
      }),
      invalidatesTags: ["Orders"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
} = orderApi;
