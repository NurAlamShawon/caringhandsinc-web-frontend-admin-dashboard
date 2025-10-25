import { baseApi } from "../baseApi";

export const companyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create Company
    createCompany: builder.mutation({
      query: (companyData) => ({
        url: "/companies/create",
        method: "POST",
        body: companyData,
      }),
    }),
  }),
});

export const { useCreateCompanyMutation } = companyApi;