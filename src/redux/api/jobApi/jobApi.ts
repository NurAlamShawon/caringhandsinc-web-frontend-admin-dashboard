import {
  Job,
} from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const jobApi = baseApi.injectEndpoints({
  overrideExisting: true, // ✅ add this
  endpoints: (builder) => ({
    // get all users
    getJobs: builder.query<
      Job,
      { page: string; limit: string }
    >({
      query: ({ page, limit }) => ({
        url: `/jobs/all-posts?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
  }),
});

export const { useGetJobsQuery } = jobApi;
