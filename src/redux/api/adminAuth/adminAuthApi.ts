import { baseApi } from "../baseApi";

export const adminAuthApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
 
    // Login User
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/admin-login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {

  useLoginMutation,
} = adminAuthApi;
 