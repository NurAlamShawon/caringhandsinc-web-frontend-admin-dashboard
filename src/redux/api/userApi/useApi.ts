import { UserResponseDataType } from "@/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register User
    getUsers: builder.query<UserResponseDataType, Record<string,string>>({
      query: (params) => ({
        url: "/users",
        method: "GET",
       params
      }),
    }),
 
  }),
});

export const {
  useGetUsersQuery
} = userApi;
