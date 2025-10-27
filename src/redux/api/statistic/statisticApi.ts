import { DashboardResponse } from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  overrideExisting: true, // ✅ add this
  endpoints: (builder) => ({
    // get all statistics
    getStatistic: builder.query<DashboardResponse, {}>({
      query: () => ({
        url: `/statistics`,
        method: "GET",
      }),
      providesTags: ["Statistic"],
    }),
     // get all statistics
    getChartStatistic: builder.query<DashboardResponse, {}>({
      query: () => ({
        url: `/statistics/login-stats`,
        method: "GET",
      }),
      providesTags: ["Statistic"],
    }),
  }),
});

export const { useGetStatisticQuery ,useGetChartStatisticQuery } = userApi;
