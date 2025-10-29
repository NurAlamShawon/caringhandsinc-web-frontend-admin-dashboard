import {
  SingleUserResponseDataType,
  UserResponseDataType,
  SingleProfileApiResponse,
  SingleCompanyResponse
} from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  overrideExisting: true, // ✅ add this
  endpoints: (builder) => ({
    // get all users
    getUsers: builder.query<
      UserResponseDataType,
      { page: string; limit: string }
    >({
      query: ({ page, limit }) => ({
        url: `/users?page=${page}&limit=${limit}`,
        method: "GET",
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
    getMe: builder.query<SingleUserResponseDataType, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    // update contact info
    updateContact: builder.mutation({
      query: ({ body }: { body: FormData }) => ({
        url: "/users/update",
        method: "PATCH",
        body,
        // Do NOT set headers here; FormData will set them automatically
      }),
      invalidatesTags: ["User"],
    }),

    // Get job seeker profile

    getMyProfile: builder.query<SingleProfileApiResponse, Record<string, string>>({
      query: ({ id }) => ({
        url: `/profiles/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

     // Get Employee Profile

    getEmployeeProfile: builder.query<SingleCompanyResponse, Record<string, string>>({
      query: ({ id }) => ({
        url: `/companies/${id}`,
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
  useUpdateContactMutation,
  useGetMyProfileQuery,
  useGetEmployeeProfileQuery
} = userApi;
