import { JobsApiResponse, SingleJobById } from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const jobApi = baseApi.injectEndpoints({
  overrideExisting: true, // ✅ add this
  endpoints: (builder) => ({
    // get all users
    getJobs: builder.query<JobsApiResponse, { page: string; limit: string }>({
      query: ({ page, limit }) => ({
        url: `/jobs/all-posts?page=${page}&limit=${limit}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    // get job by Id
    getJobById: builder.query<SingleJobById, Record<string, string>>({
      query: ({ id }) => ({
        url: `/jobs/${id}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    //get job by company Id
    getJobByCompanyId: builder.query<SingleJobById, Record<string, string>>({
      query: ({ id }) => ({
        url: `/jobs/company/${id}`,
        method: "GET",
      }),
      providesTags: ["Jobs"],
    }),
    // Suspend Job
    suspendJob: builder.mutation({
      query: ({ id }) => ({
        url: `/jobs/${id}/suspend`, // dynamic id
        method: "PATCH",
    
      }),
      invalidatesTags: ["Jobs"],
    }),
    // Delete Job
    deleteJob: builder.mutation({
      query: ({ id  ,body}) => ({
        url: `/jobs/${id}`, // dynamic id
        method: "DELETE",
        body
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

// get job by company Id

export const {
  useGetJobsQuery,
  useGetJobByIdQuery,
  useGetJobByCompanyIdQuery,
  useSuspendJobMutation,
  useDeleteJobMutation
} = jobApi;
