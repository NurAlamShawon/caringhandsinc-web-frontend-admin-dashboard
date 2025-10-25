import { UserResponseDataType } from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login admin
    getUsers: builder.query<UserResponseDataType, Record<string, string>>({
      query: (params) => ({
        url: "/users",
        method: "GET",
        params,
      }),
      providesTags: ["User"],
    }),
    // get selected user
    getUsersbyId: builder.query<UserResponseDataType, Record<string, string>>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    // update role
    updateRole: builder.mutation({
      query: ({ email, body }) => ({
        url: `/users/role-change/${email}`, // dynamic email
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // delete user
    deleterUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/remove/${id}`, // dynamic id
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Suspend user
    suspendUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/suspend/${id}`, // dynamic id
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    // Get me
    getMe: builder.query<UserResponseDataType, Record<string, string>>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
  
      }),
      providesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateRoleMutation,
  useGetUsersbyIdQuery,
  useSuspendUserMutation,
  useDeleterUserMutation,
  useGetMeQuery,
} = userApi;
